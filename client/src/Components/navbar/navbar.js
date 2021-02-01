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
        <div id="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
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
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#Subsidiaries" className="nm">
                               DashBoard
                            </a> 
                        </li>  
                        <li>
                            <input type="text"
                                className="px-3 py-1 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                placeholder="Subject" 
                                label="Subject"
                            />
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">                     
                            <a href="#About" className="nm">
                                Home
                            </a>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <a href="#Products" className="nm">
                                Ask?
                            </a>
                        </li>  
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"> 
                            <a href="#Testimonials" className="nm">
                                Login
                            </a>
                        </li>                                             
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbar;
