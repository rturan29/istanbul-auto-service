import React from "react";
import Navbar from "../components/Views/Header";
import Home from "../components/Views/Home";
import About from "../components/Views/About";
import ContactUs from "../components/Views/ContactUs";
import Footer from "../components/Views/Footer";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Services from "../components/Views/Services";
import { PageDataContext } from "../components/pageDataContext";
import getData from "../lib/getData";
import { pageQuery } from "../lib/query";
import PreviewBar from "../components/Views/PreviewBar";

export default function appHome({ pageData, preview }) {
  const [pageDataState, setpageDataState] = React.useState(pageData);
  const [isSticky, setSticky] = React.useState(false);
  const stickyRef = React.useRef(null);

  React.useEffect(() => {
    AOS.init();
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    stickyRef.current.getBoundingClientRect().y < 0
      ? setSticky(true)
      : setSticky(false);
  };

  return (
    <PageDataContext.Provider value={[pageDataState, setpageDataState]}>
      {preview ? <PreviewBar preview={preview} /> : ""}

      <Navbar sticky={isSticky} />
      <main ref={stickyRef}>
        <Home />
        <Services />
        <About />
        <ContactUs />
      </main>
      <Footer />
    </PageDataContext.Provider>
  );
}

export async function getStaticProps({ preview = false }) {
  const json = await getData(pageQuery(preview), preview);
  const pageData = await json.data;

  return {
    props: { pageData, preview },
    revalidate: 1,
  };
}
