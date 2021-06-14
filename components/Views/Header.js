import React from "react";
import {
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { Link } from "react-scroll";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { animateScroll as scroll } from "react-scroll";
import { PageDataContext } from "../pageDataContext";

const useStyles = makeStyles(theme => ({
  firsRowContainer: { zIndex: 99, backgroundColor: "#f8f8f8" },
  firsRowContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 46,
    color: "#707070",
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
    "& svg": {
      marginRight: 8,
    },
    "& div": {
      display: "flex",
      transition: "all 0.5s ease",
      cursor: "pointer",
    },
    "& div:hover": {
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("xs")]: {
      "& svg": {
        display: "none",
      },
    },
  },
  address: {
    marginRight: 8,
    paddingRight: 8,
    borderRight: "1px solid #d7d7d7",
  },
  secondRowContainer: {
    zIndex: 99,
    backgroundColor: "#fff",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    height: 64,
    boxShadow: "0px 15px 55px 0px rgba(0, 0, 0, 0.13)",
    "& $secondRowPhone": {
      display: "none",
    },
  },
  secondRowContent: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "#000",
    fontWeight: 400,
    height: 64,
    "& a": {
      textDecoration: "none",
      color: "inherit",
      transition: "all 0.5s ease",
    },
  },
  applyPadding: { paddingTop: 64 },
  sticky: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    animationName: "$moveDown",
    animationDuration: "0.5s",
    animationTimingFunction: "ease-in-out",
    "& img": {
      height: 62,
    },
    "& $secondRowPhone": {
      marginLeft: 110,
      display: "unset",
    },
  },
  linkWrapper: {
    zIndex: 99,
    display: "flex",
    overflow: "hidden",
    left: 0,
    right: 0,

    [theme.breakpoints.down("sm")]: {
      boxShadow: "0px 15px 55px 0px rgba(0, 0, 0, 0.13)",
      position: "absolute",
      visibility: "hidden",
      top: 64,
      height: 0,
      flexDirection: "column",
      alignItems: "baseline",
      backgroundColor: "rgb(255,255,255,0.96)",
      transition: "visibility 0.3s, height 0.3s ease-out",
      "& a": {
        margin: 0,
        padding: "10px 20px 10px 20px",
      },
    },
  },
  linkWrapperVisible: {
    visibility: "visible",
    height: 180,
  },
  logo: {
    position: "absolute",
    left: 16,
    bottom: 0,
    height: 108,
    cursor: "pointer",
    transition: "all 0.5s ease",
    [theme.breakpoints.down("sm")]: {
      height: 62,
    },
  },
  menuButton: {
    color: "#000",
    fontSize: 28,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: -16,
    },
  },
  link: {
    margin: "0 0 0 20px",
    fontSize: 18,
    transition: "color 0.5s",
    color: "#000",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
      outline: "none",
    },
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontWeight: 500,
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  },
  activeLink: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      color: theme.palette.primary.dark,
    },
  },
  secondRowPhone: {
    marginRight: "auto",
    marginLeft: 110,
    transition: "all 0.5s ease",

    "& a:hover": {
      color: theme.palette.primary.dark,
    },
  },

  "@keyframes moveDown": {
    from: {
      transform: "translateY(-5rem)",
    },
    to: {
      transform: "translateY(0rem)",
    },
  },
}));

const Navbar = ({ sticky }) => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = React.useState(false);
  const [{ companyInfo }] = React.useContext(PageDataContext);

  return (
    <nav>
      <div
        className={clsx(
          classes.firsRowContainer,
          sticky && classes.applyPadding
        )}
      >
        <Container maxWidth="lg" className={classes.firsRowContent}>
          <div className={classes.address}>
            <LocationOnIcon />
            <Typography
              component="a"
              variant="body1"
              href={`https://g.page/istanbul-auto-services?share`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {companyInfo.companyAdress}
            </Typography>
          </div>
          <div className={classes.phone}>
            <PhoneIcon />
            <Typography
              noWrap
              component="a"
              variant="body1"
              href={`tel:${companyInfo.phoneFormated}`}
            >
              {companyInfo.phoneNumber}
            </Typography>
          </div>
        </Container>
      </div>
      <div
        className={clsx(classes.secondRowContainer, sticky && classes.sticky)}
      >
        <Container maxWidth="lg" className={classes.secondRowContent}>
          <img
            src={companyInfo.logo.url}
            className={classes.logo}
            alt="istanbul auto service logo"
            onClick={() => scroll.scrollToTop()}
          />
          <div className={classes.secondRowPhone}>
            <Typography
              noWrap
              component="a"
              variant="body1"
              href={`tel:${companyInfo.phoneFormated}`}
            >
              {`Tel: ${companyInfo.phoneNumber}`}
            </Typography>
          </div>
          <div
            className={clsx(
              classes.linkWrapper,
              isVisible && classes.linkWrapperVisible
            )}
          >
            <Link
              activeClass={classes.activeLink}
              className={classes.link}
              offset={-114}
              to="home"
              spy={true}
              smooth={true}
              tabIndex="0"
              onClick={() => setIsVisible(false)}
            >
              Home
            </Link>
            <Link
              activeClass={classes.activeLink}
              className={classes.link}
              to="services"
              offset={-50}
              spy={true}
              smooth={true}
              tabIndex="0"
              onClick={() => setIsVisible(false)}
            >
              Services
            </Link>
            <Link
              activeClass={classes.activeLink}
              className={classes.link}
              to="about"
              spy={true}
              offset={-50}
              smooth={true}
              tabIndex="0"
              onClick={() => setIsVisible(false)}
            >
              About Us
            </Link>
            <Link
              activeClass={classes.activeLink}
              className={classes.link}
              to="contact"
              spy={true}
              offset={-50}
              smooth={true}
              tabIndex="0"
              onClick={() => setIsVisible(false)}
            >
              Contact
            </Link>
          </div>

          <IconButton
            className={classes.menuButton}
            aria-label="menu"
            onClick={() => setIsVisible(!isVisible)}
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
