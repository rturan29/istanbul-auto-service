import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ServiceCard from "../ServiceCard";
import Icon from "../Icons/Icon";
import { PageDataContext } from "../pageDataContext";

const outerFunc = URL => {
  const useStyles = makeStyles(theme => ({
    root: {
      color: "#616161",
      padding: "70px 0 140px 0",
      backgroundColor: "#fff",
      textAlign: "center",
    },

    contentContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontWeight: 300,
      color: "#444649",
    },
    headerBar: {
      fontWeight: 700,
      backgroundColor: "#444649",
      height: 2,
      width: 70,
      margin: "25px 0 25px 0",
    },
    subHeading: { marginBottom: 75 },
    image: {
      backgroundImage: `url(${URL})`,
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.secondary.main,
      fontSize: 44,
      height: 92,
      width: 92,
      border: "1px solid",
      borderRadius: "50%",
      borderColor: theme.palette.secondary.main,

      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: "0 0 0 8px #c5d5e6",
      },
      "&:hover svg": {
        color: "#fff",
      },
    },
  }));

  return useStyles;
};

const Services = () => {
  const [pageData] = React.useContext(PageDataContext);
  const imageURL = pageData.services.serviceImage.url;
  const closureFunc = outerFunc(imageURL);
  const classes = closureFunc();

  return (
    <section id="services" className={classes.root}>
      <Container maxWidth="md" className={classes.contentContainer}>
        <Typography component="div" variant="h2" className={classes.header}>
          {pageData.services.title.toUpperCase()}
        </Typography>
        <div
          className={classes.headerBar}
          data-aos="fade-in"
          data-aos-delay="300"
        />

        <Typography
          className={classes.subHeading}
          data-aos="zoom-in"
          data-aos-anchor="#service"
        >
          {pageData.services.body}
        </Typography>
        <Grid container spacing={2}>
          <Grid item container xs={12} sm={7} md={6}>
            {pageData.serviceTypesCollection.items.map((service, id) => (
              <Grid item xs={4} sm={4} key={id}>
                <ServiceCard
                  title={service.serviceTitle}
                  icon={
                    <div className={classes.iconContainer}>
                      <Icon iconName={service.serviceIcon} />
                    </div>
                  }
                  data-aos="zoom-in"
                  data-aos-delay={id * 200 + 300}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item sm={5} md={6} data-aos="zoom-in-left">
            <div className={classes.image} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
