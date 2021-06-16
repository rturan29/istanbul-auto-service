import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ContactInfo from "./ContactInfo";
import { PageDataContext } from "../pageDataContext";

const outerFunc = URL => {
  const useStyles = makeStyles(theme => ({
    root: {
      position: "relative",
      minHeight: "calc(70vh - 110px)",
      width: "100%",
      background: `url(${URL})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
    },
    overlay: {
      backgroundColor: "rgb(0,0,0,0.1)",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    gradient: {
      background:
        "linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))",
      minHeight: "calc(70vh - 110px)",
      width: "50%",
      marginLeft: "auto",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        background: "rgb(0,0,0,0.65)",
      },
    },
    textContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      flexGrow: 1,
      color: "black",
      width: "100%",
      height: "100%",
      padding: 16,
      [theme.breakpoints.down("sm")]: {
        color: "#fefefe",
      },
    },
    heading: {
      lineHeight: 1.16667,
      letterSpacing: "0.1em",
      fontSize: 36,
      textTransform: "uppercase",
      fontWeight: 600,
      [theme.breakpoints.down("xs")]: {
        fontSize: 24,
      },
    },
    boldHeading: {
      letterSpacing: "0em",
      lineHeight: 1.12,
      fontSize: 50,
      fontWeight: 800,
      textTransform: "uppercase",
      marginBottom: 22,
      [theme.breakpoints.down("xs")]: {
        fontSize: 26,
        marginTop: 8,
      },
    },
    text: {
      textDecoration: "none",
      color: "inherit",
      lineHeight: "26px",
      fontSize: 28,
      fontWeight: 500,
      marginTop: 16,
      marginBottom: 8,
      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
      },
    },
    heightLight: {
      fontSize: 30,
      color: "#1A27C9",
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.primary.light,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 24,
      },
    },

    gridItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    row: {
      display: "flex",
      alignItems: "center",
    },

    animatedArrow: {
      color: "#1A27C9",
      fontSize: 42,
      animation: "$moveX 5s infinite ease-in-out",
      [theme.breakpoints.down("sm")]: {
        color: theme.palette.primary.light,
      },
    },
    "@keyframes moveX": {
      "0%": {
        transform: "translateX(0)",
      },
      "5%": {
        transform: "translateX(12px)",
      },
      "10%": {
        transform: "translateX(-6px)",
      },
      "15%": {
        transform: "translateX(4px)",
      },
      "20%": {
        transform: "translateX(0)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
  }));

  return useStyles;
};

const Home = () => {
  const [pageData] = React.useContext(PageDataContext);
  const heroBackgroundUrl = pageData.hero.heroImage.url;
  const outer = outerFunc(heroBackgroundUrl);
  const classes = outer();

  return (
    <section className={classes.root} id="home">
      <div className={classes.overlay} />
      <div className={classes.gradient}>
        <div className={classes.textContainer}>
          <Typography className={classes.heading} component="h1">
            {pageData.hero.motto}
            <Typography
              component="span"
              display="block"
              className={classes.boldHeading}
            >
              {pageData.hero.title}
            </Typography>
          </Typography>
          <Typography className={classes.text}>{pageData.hero.body}</Typography>
          <a
            className={classes.text}
            href={`tel:${pageData.companyInfo.phoneFormated}`}
          >
            <div className={classes.row}>
              <Typography
                component="span"
                className={clsx(classes.text, classes.heightLight)}
                display="inline"
              >
                {"Get in touch "}
              </Typography>
              <NavigateNextIcon className={classes.animatedArrow} />
            </div>

            <Typography
              className={clsx(classes.text, classes.heightLight)}
              color="secondary"
              style={{ marginLeft: -16 }}
            >
              {pageData.companyInfo.phoneNumber}
            </Typography>
          </a>
          <Grid container>
            <Grid item xs={12} className={classes.gridItem}></Grid>
            <Grid item xs={12} className={classes.gridItem}></Grid>
          </Grid>
        </div>

        <ContactInfo />
      </div>
    </section>
  );
};

export default Home;
