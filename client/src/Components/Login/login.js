import React, { useState } from 'react';
import { render } from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import './login.css';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../actions';

const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [accessToken, setAccessToken] = useState("");
    const componentClicked = data => {
        console.log("data", data);
    };
    const responseFacebook = response => {

        setAccessToken(response.accessToken);
    };
    const GoogleSuccess = async (user) => {
        try {
            await dispatch(login(user));
            history.goBack();
        } catch (error) {
            console.log(error);
        }
    }
    const GoogleFailure = (error) => {
        console.log(error);
    }
    return <div class="container mt-10">
        <h1 className="LoginHeading">Login</h1>
        <div className="row">
            <div className="col-md-4 Authentication">
                <div className="card social-block">
                    <div className="card-body">
                        <GoogleLogin
                            clientId={'906545430357-01pm9l26rold7vjrpdpte8992pbtm7ep.apps.googleusercontent.com'}  // Try to create-your-own clientId, while working on a feature. 
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className="btn btn-block btn-google">
                                    &nbsp;Sign In with Google</button>
                            )}
                            onSuccess={GoogleSuccess}
                            onFailure={GoogleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
                <div className="card social-block">
                    <div className="card-body">
                        <FacebookLogin
                            appId="1614986128621487" //AppID will not work provide your own app id for Implementation
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook}
                        />
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
render(<ReactFacebookLogin />, document.querySelector("#root"));
export default Login;