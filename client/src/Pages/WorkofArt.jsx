import Navbar from "../components/Navbar";
import React, { useState } from "react";
import cartIcon from "../assets/icon-cart-white.svg";
import closeIcon from "../assets/icon-close-white.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";

import large1 from "../assets/image-product-1.jpg";
import large2 from "../assets/image-product-2.jpg";
import large3 from "../assets/image-product-3.jpg";
import large4 from "../assets/image-product-4.jpg";

import small1 from "../assets/image-product-1-thumbnail.jpg";
import small2 from "../assets/image-product-2-thumbnail.jpg";
import small3 from "../assets/image-product-3-thumbnail.jpg";
import small4 from "../assets/image-product-4-thumbnail.jpg";


const data = [  {
    id: 1,
    largeImg: large1,
    smallImg: small1,
  },
  {
    id: 2,
    largeImg: large2,
    smallImg: small2,
  },
  {
    id: 3,
    largeImg: large3,
    smallImg: small3,
  },
  {
    id: 4,
    largeImg: large4,
    smallImg: small4,
  },];

const WorkofArt = ({ price, qty, setQty }) => {
  return (
    <div className="container">
      <Navbar />
      <h1 className="text-6xl text-center p-8">Work of Art</h1>
    </div>
  );
};

export default WorkofArt;
