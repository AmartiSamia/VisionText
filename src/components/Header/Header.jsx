import React from "react";
import "./Header.css";
// import img from "./DALL-E.webp";

const Header = () => {
  return (
    <>
      <header>
        <h1>
          Transforming{" "}
          <span>
            {" "}
            Words{" "}
            <svg
              className="curved-line"
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
                    style={{ stopColor: "#FFCA8B", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M10,34 Q150,10 290,41"
                stroke="url(#gradient)"
                strokeWidth="10"
                fill="none"
              />
            </svg>
          </span>
          into{" "}
          <span>
            Visuals
            <svg
              className="curved-line"
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
                    style={{ stopColor: "#FFCA8B", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M10,34 Q150,10 290,41"
                stroke="url(#gradient)"
                strokeWidth="10"
                fill="none"
              />
            </svg>
          </span>
        </h1>
        <br />
        <p>
          Discover the future of creativity. Transform your words into
          breathtaking AI-generated visuals.
        </p>
        <br />
        <blockquote style={{ color: "#3e06f5" }}>
          "Your ideas, AI’s creativity—let’s make magic."
        </blockquote>
      </header>
    </>
  );
};

export default Header;
