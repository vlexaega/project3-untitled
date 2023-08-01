import Navbar from "../components/Navbar";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_IMAGE } from "../utils/queries";

// import CommentForm from "../components/CommentForm";
import React, { useState } from "react";
import cartIcon from "../assets/icon-cart.svg";

const WorkofArt = () => {
  let { imageId } = useParams();
  console.log(imageId);

  const { loading, data } = useQuery(QUERY_SINGLE_IMAGE, {
    variables: { imageId: imageId },
  });

  const artinfo = data?.image;

  console.log(artinfo);

  if (loading) {
    return <div>Loading...</div>;
  }

  const largeImage = "../assets/image-product-1.jpg";
  const Price = "150";

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
                <span className="text-3xl font-[700] mr-4">${Price}</span>
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
