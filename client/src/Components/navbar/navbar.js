import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
function dashboard() {

}
function home() {

}
function ask() {

}
function login_logout() {

}
function navbar() {
    return (
      <div id="Navbar" className="bg-danger">
          <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="dashBoard-icon">
                <button className="btne">
                  Dashboard
                </button>
              </div>
              <button
                  className="navbar-toggler btne"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon bt"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto ds">                      
                      <li className="navbar-search">
                        <input type="text"
                            className="px-3 py-1 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Search"
                            label="Search"
                        />
                      </li>                      
                      <Link className="navbar-link" to="/">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <button className="btne">
                                Home
                            </button>
                        </li>
                      </Link>
                      <Link className="navbar-link" to="/ask">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <button className="btne">
                                Ask?
                            </button>
                        </li>
                      </Link>
                      <Link className="navbar-link" to="/login">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <button className="btne">
                                Login
                            </button>
                        </li>
                      </Link>
                  </ul>
              </div>
          </nav>
      </div>
    )
}

export default navbar;
