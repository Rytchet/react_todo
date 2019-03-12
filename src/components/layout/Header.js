import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1 className="display-4 text-center my-4">Todo List</h1>
      <ul className="nav justify-content-center mb-4">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
