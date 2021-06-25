const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN, CONTENT_PREVIEW_API_TOKEN } =
  process.env;

export default async function getData(query, preview) {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview ? CONTENT_PREVIEW_API_TOKEN : REACT_APP_CDA_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
      }
    );

    return response.json();
  } catch (err) {
    const errors = err;
    return errors;
  }
}
