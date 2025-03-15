import React from "react";
import "./Footer.css";
import imgLogo from "./logooo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="ColumnLogo">
          <div className="Logocolumn">
            <div
              className="logo-section"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/logooo.png`}
                alt="Logo"
                className="logo"
              />

              <span className="app-name2">VisionText</span>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#affiliate">Affiliate</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Learn & Get Help</h4>
          <ul>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#developers">Developers</a>
            </li>
            <li>
              <a href="#marketing">Marketing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#developers">Developers</a>
            </li>
            <li>
              <a href="#marketing">Marketing</a>
            </li>
          </ul>
        </div>
        <div
          className="footer-column"
          style={{
            display: "flex",
            justifySelf: "flex-start",
            alignSelf: "flex-start",
          }}
        >
          <h4>Terms & Policies</h4>
          <ul>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#cookies">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p
        style={{
          marginTop: 40,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        © Copyright VisionText 2025
      </p>
    </footer>
  );
};

export default Footer;
