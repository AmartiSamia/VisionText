import React, { useEffect } from "react";
import FAQ from "./FAQ/FAQ";
// import Features from "./components/Features/Features";
import Feedback from "./Feedback/Feedback";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HowItWorks from "./How_it_works/HowItWorks";
import NavBar from "./NavBar/NavBar";
import Pricing from "./Pricing/Pricing";
import Section from "./section/Section";
import Buttons from "./Header/Buttons/Buttons";
const MainPage = ({ title }) => {
  // Mettre à jour le titre du document
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <NavBar />
      <Header />
      <Buttons />
      <section id="features">
        <Section />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Feedback />
      <footer id="contact">
        <Footer />
      </footer>
    </>
  );
};

export default MainPage;
