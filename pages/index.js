import getDataFromContentful from "../components/getData";
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

export async function getStaticProps() {
  const { pageData } = await getDataFromContentful();

  return {
    props: { pageData },
    revalidate: 1,
  };
}

export default function appHome({ pageData }) {
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
    <React.Fragment>
      <PageDataContext.Provider value={[pageDataState, setpageDataState]}>
        <Navbar sticky={isSticky} />
        <main ref={stickyRef}>
          <Home />
          <Services />
          <About />
          <ContactUs />
        </main>
        <Footer />
      </PageDataContext.Provider>

      {console.log(pageData)}
    </React.Fragment>
  );
}
