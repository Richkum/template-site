import { useState } from "react";
import Home from "./assets/components/home/Home";
import { Navbar } from "./assets/components/reuasable/Reuse";
import AboutUs from "./assets/components/about/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
