import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// import NavBar from "./components/NavBar/NavBar"; // Adjust the import path based on your file structure
// import Generate from "./components/Generate/Generate"; // Import the Generate component
import MainPage from "./components/MainPage"; // Optionally, a Home page or default route
import MainPage2 from "./components/MainPage2"; // Optionally, a Home page or default route
// import ImageGenerator from "./components/Test/ImageGenerator";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage title="VisionText" />} />
          <Route
            path="/generate"
            element={<MainPage2 title="VisionText Generate" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
