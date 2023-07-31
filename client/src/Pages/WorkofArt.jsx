import Navbar from "../components/Navbar";
import React, { useState } from "react";
import cartIcon from "../assets/icon-cart-white.svg";
import closeIcon from "../assets/icon-close-white.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { data } from "../constants/images";

const WorkofArt = () => {
  return (
    <div className="container">
      <Navbar />
      <h1 className="text-6xl text-center p-8">Work of Art</h1>
    </div>
  );
};

export default WorkofArt;
