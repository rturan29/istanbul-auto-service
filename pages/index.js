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
import getData from "../contentful/getData";
import { pageQuery } from "../contentful/query";
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
  const pageData = await getData(pageQuery(preview), preview);
  // const items = await getContentfulData();

  return {
    props: { pageData, preview },
    revalidate: 1,
  };
}
