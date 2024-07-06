import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
      <div className="w-full bg-slate-200 text-black font-medium flex flex-col">
        <div className="flex flex-wrap justify-center items-center gap-5">
          <nav>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
            Add more links as needed
          </nav>
        </div>
      </div>
    );
  }
  

export default Navbar;
