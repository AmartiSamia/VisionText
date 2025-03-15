import React, { useState } from "react";
import "./Generate.css";
import imgDefault from "./generated_image.png"; // Importer l'image par défaut

const Generate = () => {
  const [prompt, setPrompt] = useState(""); // Pour stocker le prompt saisi par l'utilisateur
  const [image, setImage] = useState(null); // Pour stocker l'URL de l'image générée
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter a prompt!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/generate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }), // Envoyer le prompt en JSON
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl); // Stocker l'URL de l'image générée
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false); // Indiquer que la génération est terminée
    }
  };

  return (
    <div className="MainContainer">
      <div className="ContainerGenerate">
        {/* Section pour entrer le prompt */}
        <div className="Container">
          <h2>Let’s Create</h2>
          <textarea
            name="text"
            placeholder="Type Something..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)} // Mettre à jour le prompt en temps réel
          ></textarea>
          <br />
          <br />
          <button
            onClick={handleGenerate}
            className="buttonGenerate"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"} {/* Afficher le statut */}
          </button>
        </div>
      </div>
      <div className="ContainerPicture">
        <div className="Container">
          <h2>Your Generated Image</h2>
          <img
            src={image || `${process.env.PUBLIC_URL}/generated_image.png`} // Afficher l'image générée ou l'image par défaut
            alt="Generated result"
            className="GeneratedImage"
          />

          <br />
          <button
            className="buttonGenerate"
            onClick={() => {
              const link = document.createElement("a");
              link.href = image || imgDefault;
              link.download = "generated_image.png";
              link.click();
            }}
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generate;
