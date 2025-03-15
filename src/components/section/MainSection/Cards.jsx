import React from "react";
import "./Cards.css";
import img1 from "./Images/Picture1.jpg";
import img2 from "./Images/Picture2.jpeg";
import img3 from "./Images/Picture3.jpeg";
import img4 from "./Images/Picture4.jpg";
import img5 from "./Images/Picture5.jpg";
// import img6 from "./Images/Picture6.jpg";

const Cards = () => {
  const cardData = [
    {
      img: img1,
      title: "Text-to-Image Generation",
      description:
        "Transform any text into stunning visuals using our AI engine.",
      link: "#text-to-image",
    },
    {
      img: img2,
      title: "Customizable Styles",
      description:
        "Choose from a variety of styles like abstract, realistic, or modern art.",
      link: "#customizable-styles",
    },
    {
      img: img3,
      title: "High-Resolution Outputs",
      description:
        "Generate high-quality images that are perfect for personal or professional use.",
      link: "#high-resolution",
    },
    {
      img: img4,
      title: "Seamless Sharing",
      description:
        "Share your creations directly to social media or download them instantly.",
      link: "#seamless-sharing",
    },
    {
      img: img5,
      title: "User-Friendly Interface",
      description:
        "Enjoy an intuitive platform designed for effortless creativity and ease of use.",
      link: "#user-friendly",
    },
  ];

  return (
    <div className="Card-container">
      {cardData.map((card, index) => (
        <div className="Card" key={index}>
          <div className="Card-Image">
            <img src={card.img} alt={card.title} className="imgLog" />
          </div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <h4>
            <a href={card.link}>Explore More &gt;</a>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Cards;
