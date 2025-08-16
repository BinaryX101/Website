/* eslint-disable no-unused-vars */
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound"; 
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: "120px", padding: "1rem", textAlign: "left", backgroundColor: "white" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
