const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const query = `
query{
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
    contactMotto
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
  openingHoursCollection{
    items{
    	days
      openingHours
    }
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
    about{json}
  }
  principleCardCollection{
    items{
      cardTitle
      cardBody{json}
      iconTag
    }
  }
  contactText(id:"6heivoJrruZWQWDQQy3Ofd"){
    motto
    phoneText
    mailText
  }
}

`;

export default async function getDataFromContentful() {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    );

    const json = await response.json();

    // const { pageData, errors } = await data;
    const pageData = await json.data;

    return await { pageData };
  } catch (err) {
    const errors = err;
    return errors;
  }
}
