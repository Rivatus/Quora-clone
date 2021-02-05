import React from 'react';
import './login.css';

const Login = () => {
    return <div class="container mt-10">
        <h1 style={{ marginTop: "60px" }} >Login</h1>

        <div class="row">

            <div class="col-sm-4">
                <div class="card social-block">
                    <div class="card-body">
                        <a class="btn btn-block btn-google" href="/auth/google" role="button">
                            <i class="fab fa-google"></i>
                            &nbsp;Sign Up with Google
          </a>
                    </div>
                </div>
                <div class="card social-block">
                    <div class="card-body">
                        <a class="btn btn-block btn-facebook" href="/auth/facebook" role="button">
                            <i class="fab fa-facebook"></i>
            &nbsp;Sign Up with Facebook
          </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Login;