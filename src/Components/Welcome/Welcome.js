import React from "react";
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Welcome = () => {
  return (
    <div className="welcome-container text-light">
      <h1>
        <span>WELCOME TO</span>

        <span>THE COMIC CORNER</span>
      </h1>
      <h2>Where Imagination Knows No Bounds</h2>
    </div>
  );
};
