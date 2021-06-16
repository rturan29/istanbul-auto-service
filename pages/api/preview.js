export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query{
        companyInfo(id: "3jzT7frtpI0ABw2yWerlfH") {
          companyName
          companyEMail
          phoneNumber
          phoneFormated
          whatsapp
          companyAdress
          logo{
            title
            fileName
            url
          }
        }
        hero(id: "2mWUDRdrx7OGeOB18c51BL") {
          motto
          title
          body
          contactText
          heroImage{
            title
            fileName
            url
          }
        }
        advantagesCollection{
          items {
            advantage
          }
        }
        openingHours(id:"7EGGv6lzqu52SH8QpCU5Vx"){
          weekdays
          saturday
          sunday
        }
        services(id:"2lgiTHE27jAIPhV6W8CPrC"){
          title
          body
          serviceImage{
            title
            fileName
            url
          }
        }
        serviceTypesCollection{
          items {
            serviceTitle
            serviceIcon
          }
        }
        about(id:"1WYqw6tfGPpfnMtwTPbVho"){
          title
          body{json}
          principleCardsCollection {
            items {
              title
              body
              iconTag
            }
          }
        }
      
        contactText(id:"6heivoJrruZWQWDQQy3Ofd"){
          motto
          phoneText
          mailText
        }
      }`,
    true
  );
  return extractPost(entry);
}

export default async function preview(req, res) {
  const { secret } = req.query;

  if (secret !== process.env.CONTENT_PREVIEW_API_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const post = await getPreviewPostBySlug();

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/posts/${post.slug}` })
  const url = `/`;
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  );
  res.end();
}
