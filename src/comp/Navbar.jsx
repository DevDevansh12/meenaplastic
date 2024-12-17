import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="container_wrapper flex items-center justify-between py-5 px-10">
          <div className="nav_logo">
            <h1 className="text-4xl font-bold">MEENA PLASTIC</h1>
          </div>
          <div className="nav_links">
            <ul className="flex text-lg gap-10">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
