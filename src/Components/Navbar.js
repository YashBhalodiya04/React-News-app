import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar_com">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-4" to="/">
          IndiaNews
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse container"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item  mx-3">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/Top">
                Top
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/Business">
                Business
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/Tech">
                Science
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/Entertain">
                Entertainment
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/Sport">
                Sport
              </Link>
            </li>
          </ul>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changemode}/>
            <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">{props.mode === 'white'?'Dark Mode':'Light Mode'}</label>
        </div>
        </div>
        </div>
      </nav>
    </div>
  );
}
