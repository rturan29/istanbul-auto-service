const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN, CONTENT_PREVIEW_API_TOKEN } =
  process.env;

// const preview = true;

// const query = `
// query{
//   companyInfo(id: "3jzT7frtpI0ABw2yWerlfH",preview:${preview}) {
//     companyName
//     companyEMail
//     phoneNumber
//     phoneFormated
//     whatsapp
//     companyAdress
//     logo{
//       title
//       fileName
//       url
//     }
//   }
//   hero(id: "2mWUDRdrx7OGeOB18c51BL",preview:${preview}) {
//     motto
//     title
//     body
//     contactText
//     heroImage{
//       title
//       fileName
//       url
//     }
//   }
//   advantagesCollection(preview:${preview}){
//     items {
//       advantage
//     }
//   }
//   openingHours(id:"7EGGv6lzqu52SH8QpCU5Vx",preview:${preview}){
//     weekdays
//     saturday
//     sunday
//   }
//   services(id:"2lgiTHE27jAIPhV6W8CPrC",preview:${preview}){
//     title
//     body
//     serviceImage{
//       title
//       fileName
//       url
//     }
//   }
//   serviceTypesCollection(preview:${preview}){
//     items {
//       serviceTitle
//       serviceIcon
//     }
//   }
//   about(id:"1WYqw6tfGPpfnMtwTPbVho",preview:${preview}){
//     title
//     body{json}
//     principleCardsCollection(preview:${preview}) {
//       items {
//         title
//         body
//         iconTag
//       }
//     }
//   }

//   contactText(id:"6heivoJrruZWQWDQQy3Ofd",preview:${preview}){
//     motto
//     phoneText
//     mailText
//   }
// }

// `;

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

    const json = await response.json();

    const pageData = await json.data;

    return await pageData;
  } catch (err) {
    const errors = err;
    return errors;
  }
}
