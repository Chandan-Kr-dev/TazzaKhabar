import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
      <div className="w-80 mx-auto mt-5 rounded p-3 bg-slate-200 text-black font-medium flex flex-col">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <nav>
            <NavLink to="/" className='text-xl font-semibold mx-3 '>
              Home
            </NavLink>
            <NavLink to="/about" className='text-xl font-semibold mx-3 '>
              About
            </NavLink>
            
          </nav>
        </div>
      </div>
    );
  }
  

export default Navbar;
