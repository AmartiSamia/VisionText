import React from "react";
import "./HowItWorks.css";
import imgSignIn from "./LogIn.png";
import imgGenerate from "./generate.png";
import imgsGenerate from "./ImagesGenrators.png";

const HowItWorks = () => {
  return (
    <>
      <div className="sectionWork">
        <h2>
          Get Started with{" "}
          <span>
            VisionText
            <svg
              className="curved-line"
              viewBox="0 0 300 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#023bf8", stopOpacity: 1 }}
                  />
                  <stop
                    offset="45%"
                    style={{ stopColor: "#fb09e7", stopOpacity: 1 }}
                  />
                  <stop
                    offset="70%"
                    style={{ stopColor: "#fa6305", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#fae505", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M2,24 Q150,1 300,24"
                stroke="url(#gradient)"
                strokeWidth="10"
                fill="none"
              />
            </svg>
          </span>
        </h2>
        <p>
          Welcome to VisionText, where your words come to life. Follow these
          three simple steps to start creating AI-powered visuals effortlessly.
        </p>
        <div className="divPicture">
          <div className="sectionLogin">
            <div className="SignIn">
              <img className="imgLog" src={imgSignIn} alt="Login" />
            </div>
          </div>
          <div className="formBox">
            <div
              className="blueLine1"
              style={{ left: "-30%", top: "50%" }}
            ></div>
            <div
              className="blueLine1"
              style={{ left: "-15%", top: "50%" }}
            ></div>
            <div className="blueLine1" style={{ left: "0%", top: "50%" }}></div>
            <div
              className="blueLine1"
              style={{ left: "15%", top: "50%" }}
            ></div>
            <div
              className="blueLine1"
              style={{ left: "30%", top: "50%" }}
            ></div>
            <div style={{ position: "absolute", left: "45%", top: "43%" }}>
              <svg width="32" height="28" viewBox="0 0 22 2">
                <path
                  d="M0 1 Q 11 0, 22 10"
                  stroke="#5023d0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="blueLine2"></div>
            <div className="blueLine3"></div>
            <div className="blueLine4"></div>
            <div className="blueLine5"></div>

            <div className="elementformBox">
              <h2 style={{ textAlign: "left" }}>Sign In</h2>
              <p style={{ textAlign: "left" }}>
                Create an account or log in to VisionText. It’s quick and
                easy—just provide your name, email, and password to get started.
              </p>
            </div>
          </div>
        </div>
        <div className="divPicture">
          <div className="section2">
            <div className="formBox2">
              <div
                className="blueLine1"
                style={{ left: "125%", top: "50%" }}
              ></div>
              <div
                className="blueLine1"
                style={{ left: "110%", top: "50%" }}
              ></div>
              <div
                className="blueLine1"
                style={{ left: "95%", top: "50%" }}
              ></div>
              <div
                className="blueLine1"
                style={{ left: "80%", top: "50%" }}
              ></div>
              <div
                className="blueLine1"
                style={{ left: "65%", top: "50%" }}
              ></div>
              <div className="line">
                <svg width="32" height="38" viewBox="0 0 22 2">
                  <path
                    d="M13 8 Q 40 -33, 300 140"
                    stroke="#5023d0"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="blueLine2"></div>
              <div className="blueLine3"></div>
              <div className="blueLine4"></div>
              <div className="blueLine5"></div>

              <div className="elementformBox">
                <h2 style={{ textAlign: "left" }}>Enter Your Text</h2>
                <p style={{ textAlign: "left" }}>
                  Type your idea into VisionText’s intuitive text box. Let our
                  AI do the work and transform your input into a beautiful
                  image.
                </p>
              </div>
            </div>
            <div></div>
            <div className="sectionGenerate">
              <div className="sectionLogin">
                <div className="SignIn">
                  <img className="imgLog" src={imgGenerate} alt="Generate" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="sectionImages">
          <div className="sectionGenerate">
            <div className="sectionLogin">
              <div className="SignIn">
                <img
                  className="imgLog"
                  src={imgsGenerate}
                  alt="Generated Images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
