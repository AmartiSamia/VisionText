import React from "react";
import "./MainSection/Cards.css";
import "./Section.css";
import Cards from "./MainSection/Cards";

const Section = () => {
  return (
    <>
      <div className="section">
        <h2>
          Empower Y
          <span>
            our Imagination
            <svg
              className="curved-line2"
              viewBox="0 0 300 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#3D1DFF", stopOpacity: 1 }}
                  />
                  <stop
                    offset="22%"
                    style={{ stopColor: "#6147FF", stopOpacity: 1 }}
                  />
                  <stop
                    offset="46%"
                    style={{ stopColor: "#D451FF", stopOpacity: 1 }}
                  />
                  <stop
                    offset="75%"
                    style={{ stopColor: "#EC458D", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#fae505", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M19,20 Q150,10 290,19"
                stroke="url(#gradient)"
                strokeWidth="10"
                fill="none"
              />
            </svg>
          </span>
        </h2>
        <div>
          <p>
            Step into a world where technology and creativity unite. Explore the
            endless possibilities of AI-driven visuals and innovation.
          </p>
        </div>
        <Cards />
      </div>
    </>
  );
};

export default Section;
