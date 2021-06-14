import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import CostumThemeProvider from "../constants/theme";
import "../styles/globals.css";

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
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="preload"
          href="../public/fonts/CarRepair-Regular.woff"
          as="font"
          crossOrigin=""
        />
      </Head>

      <CostumThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </CostumThemeProvider>
    </React.Fragment>
  );
}
