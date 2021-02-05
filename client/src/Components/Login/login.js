import React from 'react';
import './login.css';

const Login = () => {
    return <div class="container mt-10">
        <h1 className="LoginHeading">Login</h1>

        <div className="row">

            <div className="col-md-4 Authentication">
                <div className="card social-block">
                    <div className="card-body">
                        <a className="btn btn-block btn-google" href="/auth/google" role="button">
                            <i className="fab fa-google"></i>
                            &nbsp;Sign Up with Google
                        </a>
                    </div>
                </div>
                <div className="card social-block">
                    <div className="card-body">
                        <a className="btn btn-block btn-facebook" href="/auth/facebook" role="button">
                            <i className="fab fa-facebook"></i>
                            &nbsp;Sign Up with Facebook
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Login;