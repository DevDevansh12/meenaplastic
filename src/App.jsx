import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comp/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/About" element={<About />}>
            About
          </Route>
          <Route path="/Products" element={<Products />}>
            Products
          </Route>
          <Route path="/Contact" element={<Contact />}>
            Contact
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
