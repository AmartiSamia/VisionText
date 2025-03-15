import React from "react";
import "./Feedback.css";
import imgIcon from "./ImgIcon.jpg";

const feedbacks = [
  {
    name: "Cody Fisher",
    title: "CEO of AAA Agency",
    feedback:
      "VisionText has completely revolutionized the way we create content. The AI-powered image generation is seamless and delivers incredible quality.",
    image: imgIcon,
  },
  {
    name: "Jenny Wilson",
    title: "Founder of AAA Agency",
    feedback:
      "Using VisionText has saved us countless hours. The intuitive interface and quick results make it a must-have for any creative team.",
    image: imgIcon,
  },
  {
    name: "Robert Fox",
    title: "Creative Director at AAA Studios",
    feedback:
      "VisionText consistently exceeds our expectations. The ability to bring ideas to life through AI-generated visuals is unparalleled.",
    image: imgIcon,
  },
];

const Feedback = () => {
  return (
    <div className="testimonialsSection">
      <div className="testimonialsHeader">
        <h1>Trusted by thousands of Customers</h1>
        <p>
          Thousands of marketers, agencies, and entrepreneurs trust VisionText
          to simplify and elevate their content creation.
        </p>
      </div>
      <div className="testimonialsList">
        {feedbacks.map((feedback, index) => (
          <div className="testimonialCard" key={index}>
            <div className="stars">★★★★★</div>
            <p className="feedback">{feedback.feedback}</p>
            <div className="profile">
              <img src={imgIcon} alt={feedback.name} />
              <div>
                <h4>{feedback.name}</h4>
                <p>{feedback.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
