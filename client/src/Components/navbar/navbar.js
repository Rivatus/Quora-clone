import React, { useContext, useEffect, useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import quoraText from '../../Quora_text.PNG';
import { useDispatch } from 'react-redux';
import { authContext } from '../../App';
// function dashboard() {

// }
// function home() {

// }
// function ask() {

// }
// function login_logout() {

// }
function Navbar() {
    const [user, setUser] = useContext(authContext); ///useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    // console.log(useContext(authContext));
    // useEffect(() => {
    //     async function login_user() {
    //         try {
    //             await dispatch(login_refresh(user));
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     login_user();
    // });
    // async function login_user() {
    //     try {
    //         await dispatch(login_refresh(user));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // login_user();

    const Logout = async () => {
        try {
            await dispatch({ type: 'LOGOUT' });
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    // return (
    //     <div id="Navbar" className="bg-danger">
    //         <nav className="navbar navbar-expand-lg navbar-dark">
    //             <img src={quoraText} className="navbar-logo" />
    //             <span className="navbar-search">
    //                 <input type="text"
    //                     className="px-3 py-1 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
    //                     placeholder="Search"
    //                     label="Search"
    //                     style={{ maxWidth: "200px" }}
    //                 />
    //             </span>
    //             <button
    //                 className="navbar-toggler btne"
    //                 type="button"
    //                 data-toggle="collapse"
    //                 data-target="#navbarNav"
    //                 aria-controls="navbarNav"
    //                 aria-expanded="false"
    //                 aria-label="Toggle navigation"
    //             >
    //                 <span className="navbar-toggler-icon bt"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarNav">
    //                 <ul className="navbar-nav ml-auto ds">
    //                     <Link className="navbar-link" to="/">
    //                         <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
    //                             <button className="btne">
    //                                 Dashboard
    //                         </button>
    //                         </li>
    //                     </Link>
    //                     <Link className="navbar-link" to="/">
    //                         <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
    //                             <button className="btne">
    //                                 Home
    //                         </button>
    //                         </li>
    //                     </Link>
    //                     <Link className="navbar-link" to="/ask">
    //                         <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
    //                             <button className="btne">
    //                                 ASK
    //                         </button>
    //                         </li>
    //                     </Link>
    //                     {user ? <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
    //                         <button className="btne" onClick={Logout}>
    //                             Logout
    //                             </button>
    //                     </li> : <Link className="navbar-link" to="/login">
    //                         <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
    //                             <button className="btne">
    //                                 Login
    //                             </button>
    //                         </li>
    //                     </Link>}
    //                 </ul>
    //             </div>
    //         </nav>
    //     </div>
    // )

    function toogleState(e) {
        document.querySelector('.offcanvas-collapse').classList.toggle('open');
    }

    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Quora-Clone</a>
                <button class="navbar-toggler p-0 border-0" type="button" onClick={toogleState} id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link" >Dashboard </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link" > Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/ask" class="nav-link" >Ask</Link>
                        </li>

                        <li className="nav-item">
                            {user ? <Link className="nav-link" onClick={Logout}> Logout </Link> : <Link className="nav-link" to="/login">  Login  </Link>}
                        </li>
                    </ul>
                    <form class="d-flex navbar-nav me-auto mb-2">
                        <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
