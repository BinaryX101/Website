/* eslint-disable no-unused-vars */
// src/pages/NotFound.jsx
import React from "react";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <img src="./404_img.webp" alt="404 Picture" className="error-img" />
      <div className="text">
            <h1>Page Not Found</h1>
            <h3>Your a long way from home.</h3>
            <a href="/Website/">Back to Home</a>
      </div>
    </div>
  );
}

export default NotFound;
