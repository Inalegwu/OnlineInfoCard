import React from "react";
import Button from "../Button/Button";
import "./Left.css";

function Left() {
  return (
    <div className="left">
      <div className="titleBox">
        <h1 className="heading">My Name Is Ikwue Inalegwu</h1>
        <p className="description">
          And I am a Full-Stack Javascript Developer
        </p>
        <Button>
          <p>Download CV</p>
        </Button>
      </div>
    </div>
  );
}

export default Left;
