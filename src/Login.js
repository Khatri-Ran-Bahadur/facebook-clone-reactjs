import React from "react";
import Button from "@material-ui/core/Button";
import "./Login.css";
import { auth, provider } from "./firebase";
const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
        <Button className="btn" type="submit" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
