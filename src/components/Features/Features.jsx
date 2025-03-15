import React, { useState } from "react";
import "./Features.css";
import NavBar from "../NavBar/NavBar";
import AiPictureGenerate from "./image.png";
import bgPicture from "./hero-bg.png";
import ThirdPicture from "./ThirdPicture.jpg";
import Footer from "../Footer/Footer";
import FAQ from "../FAQ/FAQ";

const texts = [
  {
    question: "What It Takes to Create an Image?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    question: "What's the Standard Image Size?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    question: "Can I Create Multiple Images at Once?",
    answer:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleTexts = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <NavBar />
      <div className="features">
        {/* Section Image */}
        <div className="divPicture">
          <div className="SignIn">
            <img src={AiPictureGenerate} alt="AI Generated Examples" />
          </div>
        </div>

        {/* Section FAQ */}
        <div className="formBox">
          <h2>AI Image Generator</h2>
          <div className="faqList">
            {texts.map((faq, index) => (
              <div
                className={`faqItem ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <div className="faqQuestion" onClick={() => toggleTexts(index)}>
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className="faqAnswer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="features">
        <div className="formBox">
          <h2>Real time data</h2>
          <div className="faqList">
            {texts.map((faq, index) => (
              <div
                className={`faqItem ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <div className="faqQuestion" onClick={() => toggleTexts(index)}>
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className="faqAnswer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="divPicture">
          <div className="SignIn2">
            <img src={bgPicture} alt="AI Generated Examples" />
          </div>
        </div>
      </div>
      <div className="features">
        {/* Section Image */}
        <div className="divPicture">
          <div className="SignIn3">
            <img src={ThirdPicture} alt="AI Generated Examples" />
          </div>
        </div>

        {/* Section FAQ */}
        <div className="formBox">
          <h2>AI Image Generator</h2>
          <div className="faqList">
            {texts.map((faq, index) => (
              <div
                className={`faqItem ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <div className="faqQuestion" onClick={() => toggleTexts(index)}>
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className="faqAnswer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default Features;
