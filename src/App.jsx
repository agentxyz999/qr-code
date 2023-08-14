import React from "react";
import "./app.css";
import qr from "./qr.png";

const App = () => {
  return (
    <div className="container">
      <div className="image__container">
        <img src={qr} alt="qr code" />
      </div>
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Front-end Mentor and take your coding skills to the next level
      </p>

      <div>
        <h2>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            Frontend Mentor💖
          </a>
        </h2>
        <h2>
          Coded by{" "}
          <a href="https://rconde-portfolio.netlify.app/" target="_blank" rel="noreferrer">
            Rolie Conde 😁
          </a>
          .
        </h2>
      </div>
    </div>
  );
};

export default App;
