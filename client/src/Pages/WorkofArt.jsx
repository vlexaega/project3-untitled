import Navbar from "../components/Navbar";
// import CommentForm from "../components/CommentForm";
import React, { useState } from "react";
import cartIcon from "../assets/icon-cart.svg";
import closeIcon from "../assets/icon-close.svg";
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

const data = [
  {
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
  },
];

const WorkofArt = () => {
  const [price, setPrice] = useState(125.0);
  const [qty, setQty] = useState(0);
  const products = [...data];
  const [value, setValue] = useState(0);

  const [modal, setModal] = useState(true);

  const largeImage = products[value].largeImg;

  //   const fixedPrice = 99.99;
  const fixedPrice = price.toFixed(2);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-6xl text-center p-8">Work of Art</h1>
        <main>
          <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
            <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
              <div className="md:block large-image">
                <img
                  className="object-cover mx-auto rounded-xl w-[400px] h-[400px]"
                  src={largeImage}
                  alt="snekers-photo"
                />
              </div>
            </div>

            <div className="description p-6 md:basis-1/2 md:py-[40px]">
              <p className="text-orange text-[14px] tracking-widest uppercase font-[700] mb-6">
                Artist Name
              </p>
              <h1 className="text-3xl md:text-4xl capitalize font-[700]">
                Name of art piece
              </h1>
              <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
                Description of piece goes here.
              </p>
              <p className="md:hidden text-darkGrayishBlue my-6 leading-7">
                Description of piece goes here.
              </p>

              <div className="price flex items-center">
                <span className="text-3xl font-[700] mr-4">${fixedPrice}</span>
              </div>

              <div className="buttons-container flex flex-col md:flex-row mt-8">
                <button className="add-btn border-none bg-logo-pink rounded-lg text-black font-[700] py-6 px-6 mb-8 md:text-[14px] transition-all btn-shadow hover:opacity-50">
                  <img
                    className="inline-block -translate-x-2 -translate-y-[2px] h-[15px]"
                    src={cartIcon}
                    alt="cart-icon"
                  />
                  &nbsp;Add to cart
                </button>
                {/* <CommentForm /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkofArt;
