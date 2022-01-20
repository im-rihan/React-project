import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href='x'>
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-md-auto gap-2">
            <li className="nav-item rounded">
              <a className="nav-link " aria-current="page" href="x">
                About
              </a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="x">
                Log In
              </a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="x">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
