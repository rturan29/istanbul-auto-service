import React from "react";
import { Grid, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import clsx from "clsx";
import { PageDataContext } from "../pageDataContext";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    borderRadius: 2,
    color: "#000",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      background:
        "linear-gradient(rgba(250, 250, 250, 0.9), rgba(250, 250, 250, 0.9))",
    },
  },
  gridItem: {
    padding: 16,
    boxShadow: "0 0px 2px 0 rgba(0, 0, 0, 0.13)",
  },
  gridItemMiddle: {},
  workingDays: {
    display: "flex",
    flexDirection: "row",
    "& p": {
      marginBottom: 8,
    },
  },
  hoursContainer: {
    marginLeft: 16,
  },
  heading: {
    fontWeight: 600,
    paddingBottom: 8,
    marginBottom: 18,
    textTransform: "uppercase",
    display: "inline-block",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  text: { fontWeight: 500, fontSize: 12, marginBottom: 8 },
  muted: { fontWeight: 500, fontSize: 12, color: "#5E5E5E" },
  highlight: {
    color: theme.palette.secondary.main,
    fontWeight: "bolder",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    "& svg": {
      color: theme.palette.secondary.main,
      marginRight: 4,
    },
  },
}));

const ContactInfo = () => {
  const classes = useStyles();
  const [pageData] = React.useContext(PageDataContext);
  const { companyInfo } = pageData;

  return (
    <div className={classes.root}>
      <Grid container direction="row" className={classes.gridContainer}>
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          className={classes.gridItem}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Typography className={classes.heading}>Our Advantages</Typography>
          {pageData.advantagesCollection.items.map((item, id) => (
            <div className={classes.iconContainer} key={id}>
              <CheckIcon color="primary" />
              <Typography className={classes.text}>{item.advantage}</Typography>
            </div>
          ))}
        </Grid>
        <Hidden xsDown>
          <Grid
            item
            sm={4}
            md={6}
            className={clsx(classes.gridItem, classes.gridItemMiddle)}
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <Typography className={classes.heading}>OPENING HOURS</Typography>
            <div className={classes.workingDays}>
              <div>
                {pageData.openingHoursCollection.items.map((item, id) => (
                  <Typography className={classes.text} key={id}>
                    {item.days}
                  </Typography>
                ))}
              </div>
              <div className={classes.hoursContainer}>
                {pageData.openingHoursCollection.items.map((item, id) => (
                  <Typography className={classes.muted} key={id} noWrap>
                    {item.openingHours}
                  </Typography>
                ))}
              </div>
            </div>
          </Grid>

          <Hidden mdUp>
            <Grid
              item
              xs={6}
              sm={4}
              className={classes.gridItem}
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <Typography className={classes.heading}>GET IN TOUCH</Typography>
              <Typography className={classes.text}>
                {pageData.hero.contactMotto}
              </Typography>
              <Typography
                className={classes.highlight}
                component="a"
                href={`tel:${companyInfo.phoneFormated}`}
              >
                {companyInfo.phoneNumber}
              </Typography>
            </Grid>
          </Hidden>
        </Hidden>
      </Grid>
    </div>
  );
};

export default ContactInfo;
