import React from "react";
import { Link, NavLink } from "react-router-dom";
import SportsNews from "../SportsNews/SportsNews";
import Entertainment from "../Entertainment/Entertainment";

function Navbar() {
  return (
    <div className=" mx-auto mt-5 rounded p-3 bg-slate-200 text-black font-medium flex flex-col">
      <div className="flex  justify-center items-center gap-3">
        <nav className="flex justify-center items-center gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-xl ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-900 hover:text-orange-700 `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/SportsNews"
            className={({ isActive }) =>
              `text-xl ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-900 hover:text-orange-700 `
            }
          >
            SportNews
          </NavLink>
          <NavLink
            to="/Entertainment"
            className={({ isActive }) =>
              `text-xl ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-900 hover:text-orange-700 `
            }
          >
            Entertainment
          </NavLink>
          <NavLink
            to="/ScienceNews"
            className={({ isActive }) =>
              `text-xl ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-900 hover:text-orange-700 `
            }
          >
            Science News
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
