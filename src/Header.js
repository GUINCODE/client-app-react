import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex  ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex mx-auto">
              <NavLink to="/" className="nav-item nav-link ">
                Home <span className="sr-only">(current)</span>
              </NavLink>
              <NavLink to="/ajout" className="nav-item nav-link">
                New
              </NavLink>
              <NavLink to="/help" className="nav-item nav-link ">
                Help ?
              </NavLink>
              
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;