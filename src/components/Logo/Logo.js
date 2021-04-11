import React from "react";
import "./Logo.css";
import brain from "./Logo.png";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className=" container ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 40 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner pa3">
          <img alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
