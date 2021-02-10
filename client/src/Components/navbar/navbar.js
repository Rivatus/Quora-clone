import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import quoraText from '../../Quora_text.PNG';
import { useDispatch } from 'react-redux';
function dashboard() {

}
function home() {

}
function ask() {

}
function login_logout() {

}
function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const Logout = async () => {
        try {
            await dispatch({ type: 'LOGOUT' });
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="Navbar" className="bg-danger">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <img src={quoraText} style={{ maxWidth: "150px", height: "40px", marginLeft: "5px", borderRadius: "5px" }} />
                <span className="navbar-search">
                    <input type="text"
                        className="px-3 py-1 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Search"
                        label="Search"
                        style={{ maxWidth: "150px" }}
                    />
                </span>
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
                        <Link className="navbar-link" to="/">
                            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <button className="btne">
                                    Dashboard
                            </button>
                            </li>
                        </Link>
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
                        {user ? <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                            <button className="btne" onClick={Logout}>
                                Logout
                                </button>
                        </li> : <Link className="navbar-link" to="/login">
                                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                    <button className="btne">
                                        Login
                                </button>
                                </li>
                            </Link>}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
