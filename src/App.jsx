// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./pages/home";
import Activities from "./pages/activities";
import AboutUs from "./pages/AboutUs";
import Map from "./pages/Map";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      {/* Add margin-top to prevent text from hiding under the header */}
      <main style={{ marginTop: "120px", padding: "1rem", textAlign: "left", backgroundColor: "white" }}>
        <Routes>
          <Route path="/Website/" element={<Home />} />
          <Route path="/Website/activities" element={<Activities />} />
          <Route path="/Website/about-us" element={<AboutUs />} />
          <Route path="/Website/map" element={<Map />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
