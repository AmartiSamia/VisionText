import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import img from "../DALL-E.webp";

const Buttons = () => {
  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="buttons">
        <Link to="/generate" className="ButtonGetStarted">
          Get Started
        </Link>
        <a
          onClick={scrollToHowItWorks}
          className="ButtonWatchDemo"
          role="button"
        >
          Watch Demo
        </a>
      </div>
      <div className="image-section">
        <img src={img} alt="AI and Human Hand" />
      </div>
    </>
  );
};

export default Buttons;
