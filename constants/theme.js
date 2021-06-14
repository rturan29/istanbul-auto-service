import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

theme = createMuiTheme({
  palette: {
    primary: {
      //light: '#36ced3',
      main: "#ff5207",
      dark: "#c31200",
      //contrastText: '#fff',
    },
    secondary: {
      light: "#4884c3",
      main: "#3470af",
      dark: "#0c345f",
      //contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: `"Poppins","Quicksand","Open Sans","Raleway","Raleway-semibold","Roboto", "Helvetica", "Arial", sans-serif`,
    h2: {
      fontSize: "30pt",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25pt",
      },
    },
    h3: {
      fontSize: "18pt",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14pt",
      },
    },
    body1: {
      fontSize: "12pt",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
});

const CostumThemeProvider = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CostumThemeProvider;
