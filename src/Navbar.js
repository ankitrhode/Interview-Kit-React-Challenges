import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Codebyte - React Challenges</h2>
      <nav>
        <ul>
          <li>
            <Link to="/counter">React Simple Counter</Link>
          </li>
          <li>
            <Link to="/list">React List</Link>
          </li>

          <li>
            <Link to="/toggle">React Button Toggle</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
