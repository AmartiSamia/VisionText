import React, { useEffect } from "react";
import FAQ from "./FAQ/FAQ";
// import Features from "./components/Features/Features";
import Feedback from "./Feedback/Feedback";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
// import HowItWorks from "./How_it_works/HowItWorks";
import NavBar from "./NavBar/NavBar";
import Pricing from "./Pricing/Pricing";
import Section from "./section/Section";
import Generate from "./Generate/Generate";
const MainPage2 = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <NavBar />
      <Header />
      <Generate />
      <Section />
      <Pricing />
      <FAQ />
      <Feedback />
      <Footer />
    </>
  );
};

export default MainPage2;
