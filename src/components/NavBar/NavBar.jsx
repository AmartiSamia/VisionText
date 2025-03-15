import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Import correctly as named export
import "./SignInSignUp.css";
import "./NavBar.css";
import eyeOpen from "./eye_open.png"; // Add the path to the eye open image
import eyeClosed from "./eye_closed.png"; // Add the path to the eye closed image
import { Link } from "react-scroll";
import imgLogo from "./logooo.png";

const NavBar = () => {
  const [user, setUser] = useState(null); // State for logged-in user
  const navigate = useNavigate();
  const signInLinkRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const signInContainerRef = useRef(null);
  const flipContainerRef = useRef(null);
  const showSignUpRef = useRef(null);
  const showSignInRef = useRef(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signUpPasswordVisible, setSignUpPasswordVisible] = useState(false);
  const [signInMessage, setSignInMessage] = useState(null);
  const [signUpMessage, setSignUpMessage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      try {
        const decoded = jwtDecode(token); // Correct usage
        setUser({ name: decoded.name, email: decoded.email });
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const signInLink = signInLinkRef.current;
    const signInContainer = signInContainerRef.current;
    const flipContainer = flipContainerRef.current;
    const showSignUp = showSignUpRef.current;
    const showSignIn = showSignInRef.current;

    const showContainer = (event) => {
      event.preventDefault();
      if (signInContainer) {
        signInContainer.style.display = "flex";
        setTimeout(() => (signInContainer.style.opacity = "1"), 0);
      }
    };

    const hideContainer = (event) => {
      if (event.target === signInContainer) {
        signInContainer.style.opacity = "0";
        setTimeout(() => (signInContainer.style.display = "none"), 500);
      }
    };

    const flipToSignUp = (event) => {
      event.preventDefault();
      if (flipContainer) {
        flipContainer.classList.add("flip");
      }
    };

    const flipToSignIn = (event) => {
      event.preventDefault();
      if (flipContainer) {
        flipContainer.classList.remove("flip");
      }
    };

    signInLink?.addEventListener("click", showContainer);
    signInContainer?.addEventListener("click", hideContainer);
    showSignUp?.addEventListener("click", flipToSignUp);
    showSignIn?.addEventListener("click", flipToSignIn);

    return () => {
      signInLink?.removeEventListener("click", showContainer);
      signInContainer?.removeEventListener("click", hideContainer);
      showSignUp?.removeEventListener("click", flipToSignUp);
      showSignIn?.removeEventListener("click", flipToSignIn);
    };
  }, []);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;

    if (!name || !email || !password) {
      setSignUpMessage({ type: "error", text: "All fields are required." });
      return;
    }

   
      // Vérifier et formater les erreurs provenant du backend
      const errors = error.response?.data;
      let errorMessage = "Signup failed. Please try again.";
      if (errors) {
        errorMessage = Object.entries(errors)
          .map(([field, messages]) => {
            // Vérifier si 'messages' est une liste ou une chaîne
            if (Array.isArray(messages)) {
              return `${field}: ${messages.join(", ")}`;
            } else if (typeof messages === "string") {
              return `${field}: ${messages}`;
            } else {
              return `${field}: Invalid data`;
            }
          })
          .join(" ");
      }

      setSignUpMessage({ type: "error", text: errorMessage });
    }
  };
  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      setSignInMessage({
        type: "error",
        text: "Email and password are required.",
      });
      return;
    }

    

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleSignUpPasswordVisibility = () => {
    setSignUpPasswordVisible(!signUpPasswordVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
  };

  return (
    <>
      <nav>
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

          <span className="app-name">VisionText</span>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="features" smooth={true} duration={500}>
              Features
            </Link>
          </li>
          <li>
            <Link to="pricing" smooth={true} duration={500}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={500}>
              FAQ
            </Link>
          </li>
          <li>
            {user ? (
              <a href="#" onClick={handleLogout} className="link-button2">
                Logout
              </a>
            ) : (
              <a href="#" ref={signInLinkRef} className="link-button2">
                Sign In
              </a>
            )}
          </li>
        </ul>
      </nav>
      <div
        id="signInContainer"
        ref={signInContainerRef}
        style={{ display: "none", opacity: 0 }}
      >
        <div className="flip-container" ref={flipContainerRef}>
          <div className="flipper">
            {/* Sign In Form */}
            <div className="front">
              <form id="signInForm" onSubmit={handleSignIn}>
                <label htmlFor="email">Enter E-mail address:</label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="E-mail..."
                />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password..."
                  />
                  <img
                    src={passwordVisible ? eyeOpen : eyeClosed}
                    alt="Toggle Password Visibility"
                    onClick={togglePasswordVisibility}
                    className="toggle-password"
                  />
                </div>
                {signInMessage && (
                  <p className={`message ${signInMessage.type}`}>
                    {signInMessage.text}
                  </p>
                )}
                <br />
                <input type="submit" value="Log In" className="buttonLogin" />
                <p>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    ref={showSignUpRef}
                    className="link-button"
                  >
                    Sign Up
                  </button>
                </p>
              </form>
            </div>
            {/* Sign Up Form */}
            <div className="back">
              <form id="signUpForm" onSubmit={handleSignUp}>
                <label htmlFor="name">Enter Name:</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name..."
                />
                <br />
                <label htmlFor="newEmail">Enter E-mail address:</label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="newEmail"
                  placeholder="E-mail..."
                />
                <br />
                <label htmlFor="newPassword">Enter Password:</label>
                <br />
                <div className="password-container">
                  <input
                    type={signUpPasswordVisible ? "text" : "password"}
                    name="password1"
                    id="newPassword"
                    placeholder="Password..."
                  />
                  <img
                    src={signUpPasswordVisible ? eyeOpen : eyeClosed}
                    alt="Toggle Password Visibility"
                    onClick={toggleSignUpPasswordVisibility}
                    className="toggle-password"
                  />
                </div>
                {signUpMessage && (
                  <p className={`message ${signUpMessage.type}`}>
                    {signUpMessage.text}
                  </p>
                )}
                <br />
                <input type="submit" value="Sign Up" className="buttonLogin" />
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    ref={showSignInRef}
                    className="link-button"
                  >
                    Sign In
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
