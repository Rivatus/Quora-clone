import React from 'react';
import './navbar.css';
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
            <nav className="navbar navbar-expand-lg">
                <span className="dashBoard-icon">
                    Dashboard
                </span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto ds">
                        <li className="navbar-search">
                            <input type="text"
                                className="px-3 py-1 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                placeholder="Search"
                                label="Search"
                            />
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            Home
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            Ask?
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            Login
                        </li>
                    </ul>
                </div>
                <nav class="navbar navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </nav>
        </div>
    )
}

export default navbar;
