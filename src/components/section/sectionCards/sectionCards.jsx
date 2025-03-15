import React from "react";
import "./sectionCard.css";
import img from "./image.png";

const sectionCard = () => {
  return (
    <div className="Card-container">
      {[...Array(6)].map((_, index) => (
        <div className="Card" key={index}>
          <div className="Card-Image">
            <img src={img} alt="AI Icon" className="imgLog" />
          </div>
          <h3>Latest AI technology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. minus fuga,
            vitae delectus deserunt quae ipsa illo illum aliquid!
          </p>
          <h4>
            <a href="#s">Explore More &gt;</a>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default sectionCard;
