import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PageDataContext } from "../pageDataContext";
//Custom components
import ContactForm from "../ContactForm";
import {
  HomeOutlined,
  MailOutlineOutlined,
  PhoneOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",

    padding: "70px 8px 460px 8px",
  },
  contentContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontWeight: 300,
  },
  headerBar: {
    backgroundColor: "#444649",
    height: 2,
    width: 70,
    margin: "25px 0 40px 0",
  },
  iconContainer: {
    display: "flex",
    textAlign: "left",
  },
  subHeading: { fontSize: 18, marginBottom: 40 },
  text: {
    marginLeft: 8,
    marginBottom: 24,
    fontWeight: 500,
    textDecoration: "none",
    color: "inherit",
  },
  muted: {
    color: "#737373",
    marginTop: 4,
  },
  map: { position: "absolute", left: 0, right: 0, bottom: 0 },
}));

const ContactUs = () => {
  const classes = useStyles();
  const [pageData] = React.useContext(PageDataContext);

  return (
    <section className={classes.root} id="contact">
      <Container maxWidth="md" className={classes.contentContainer}>
        <Typography component="div" variant="h2" className={classes.header}>
          CONTACT US
        </Typography>
        <div
          className={classes.headerBar}
          data-aos="fade-right"
          data-aos-delay="500"
        />

        <Typography
          component="div"
          className={classes.subHeading}
          data-aos="fade-in"
          data-aos-delay="500"
        >
          {pageData.contactText.motto}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <div className={classes.iconContainer} data-aos="fade-right">
              <HomeOutlined color="primary" />
              <Typography
                className={classes.text}
                component="a"
                variant="body1"
                href={`https://g.page/istanbul-auto-services?share`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pageData.companyInfo.companyAdress}
              </Typography>
            </div>

            <div
              className={classes.iconContainer}
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <PhoneOutlined color="primary" />
              <Typography
                className={classes.text}
                component="a"
                variant="body1"
                href={`tel:${pageData.companyInfo.phoneFormated}`}
              >
                {pageData.companyInfo.phoneNumber}
                <br />
                <Typography className={classes.muted}>
                  {"Mon to Sat 9am to 6 pm"}
                </Typography>
              </Typography>
            </div>
            <div
              className={classes.iconContainer}
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <MailOutlineOutlined color="primary" />
              <Typography
                className={classes.text}
                component="a"
                href={`mailto:${pageData.companyInfo.companyEMail}`}
              >
                {pageData.companyInfo.companyEMail}
                <br />
                <Typography className={classes.muted}>
                  {"Send us your query anytime!"}
                </Typography>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContactForm
              data-aos="fade-left"
              email={pageData.companyInfo.companyEMail}
            />
          </Grid>
        </Grid>
      </Container>
      <iframe
        data-aos="zoom-in"
        className={classes.map}
        width="100%"
        height="400"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.6238147631666!2d-79.48965364854608!3d43.780667179014664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f2b496bb5bf%3A0xf6acaa69ed95ca06!2sIstanbul%20Auto%20Services!5e0!3m2!1sen!2sca!4v1609035189929!5m2!1sen!2sca"
        tabIndex="0"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        aria-label="Google map shows store address"
        title="Google map shows store address"
      />
    </section>
  );
};

export default ContactUs;
