import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comp/Navbar";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/">Home</Route>
          <Route path="/About">About</Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
