import React from 'react';
import './navbar.css';
function dashboard()
{

}
function home()
{

}
function ask()
{

}
function login_logout()
{
    
}
function navbar() {
    return (
        <div id="Navbar" className="bg-danger">
            <nav className="navbar navbar-expand-lg">
                <span className="dashBoard-icon">
                    Dashboard
                </span>
                <button
                    className="navbar-toggler btn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon btn"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto ds">                           
                        <li>
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
            </nav>
        </div>
    )
}

export default navbar;
