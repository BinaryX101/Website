/* eslint-disable no-unused-vars */
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound"; // make sure this exists
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: "120px", padding: "1rem", textAlign: "left", backgroundColor: "white" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-us" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
