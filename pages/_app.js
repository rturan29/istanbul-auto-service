import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import CostumThemeProvider from "../constants/theme";
import "../styles/globals.css";
import * as favicon from "../public/favicon.ico";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href={favicon} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="title" content="Joseph Kalayci" />
        <meta
          name="description"
          content="Istanbul Auto Services.Your trusted one-stop-shop for all your vehicle needs."
        />
        <meta
          name="keywords"
          content="auto,service,istanbul,trusted,inspection,oil change,family"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Joseph Y. Kalayci" />
        <link rel="manifest" href="../public/manifest.json" />
        <title>Istanbul Auto Services</title>
      </Head>

      <CostumThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </CostumThemeProvider>
    </React.Fragment>
  );
}
