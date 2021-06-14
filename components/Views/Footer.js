import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ScheduleIcon from "@material-ui/icons/Schedule";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { PageDataContext } from "../pageDataContext";
import { Link } from "react-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    backgroundColor: "#0c345f",
    textAlign: "center",
    padding: "70px 0 50px 0",
    wordBreak: "break-word",
  },
  gridContainer: {
    color: "#fff",
  },
  workingDays: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "left",
  },
  hoursContainer: {
    marginLeft: 16,
  },

  icon: {
    marginBottom: 16,
    marginTop: 24,
    fontSize: 42,
    color: theme.palette.primary.main,
  },
  text: { fontWeight: 600, textDecoration: "none", color: "inherit" },
  muted: { color: "#9C9C9C", fontWeight: 600 },

  scroolButton: {
    position: "absolute",
    top: -15,
    color: "#fff",
    left: "50%",
    transform: "translate(-50%)",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
    height: 50,
    width: 50,
    fontSize: "30px",
    "&:hover": {
      background: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light,
    },
  },
  gridItem: { display: "flex", flexDirection: "column", alignItems: "center" },

  footNote: {
    display: "block",
    marginTop: 42,
    color: "#9C9C9C",
    textDecoration: "none",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [pageData] = React.useContext(PageDataContext);

  return (
    <footer className={classes.root}>
      <IconButton
        component={Link}
        to="home"
        spy={true}
        smooth={true}
        offset={-114}
        className={classes.scroolButton}
        aria-label="scroll to top"
      >
        <KeyboardArrowUpIcon fontSize="inherit" />
      </IconButton>
      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          spacing={2}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <LocationOnIcon className={classes.icon} />
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
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <PhoneIcon className={classes.icon} />
            <Typography
              className={classes.text}
              component="a"
              variant="body1"
              href={`tel:${pageData.companyInfo.phoneFormated}`}
            >
              {"Tel: " + pageData.companyInfo.phoneNumber}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <MailOutlineIcon className={classes.icon} />
            <Typography
              className={classes.text}
              component="a"
              href={`mailto:${pageData.companyInfo.companyEMail}`}
            >
              {pageData.companyInfo.companyEMail}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <ScheduleIcon className={classes.icon} />
            <div className={classes.workingDays}>
              <div>
                <Typography className={classes.text}>Weekdays</Typography>
                <Typography className={classes.text}>Saturday</Typography>
                <Typography className={classes.text}>Sunday</Typography>
              </div>
              <div className={classes.hoursContainer}>
                <Typography className={classes.muted}>
                  {pageData.openingHours.weekdays}
                </Typography>
                <Typography className={classes.muted}>
                  {pageData.openingHours.saturday}
                </Typography>
                <Typography className={classes.muted}>
                  {pageData.openingHours.sunday}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <a
          className={classes.footNote}
          href={"https://www.josephkalayci.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by Joseph Y. Kalayci
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
