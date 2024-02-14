import React, { useEffect, useState } from "react";
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Welcome = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-container">
      {showText && (
        <>
          <h1>
            <span>WELCOME TO</span>
            <span>THE COMIC CORNER</span>
          </h1>
          <h2>Where Imagination Knows No Bounds</h2>
        </>
      )}
    </div>
  );
};
