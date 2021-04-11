import React from "react";
import Logo from "../Logo/Logo";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container">
      <Logo />
      <h1>Face Detect App</h1>
      <Link exact to="/">
        <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
      </Link>
    </div>
  );
};

export default Navigation;
