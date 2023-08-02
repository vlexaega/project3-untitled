import Navbar from "../components/Navbar";
import CommentForm from "../components/CommentForm";
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import {
  QUERY_SINGLE_IMAGE,
  QUERY_SINGLE_IMAGE_COMMENTS,
} from "../utils/queries";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";
// import CommentForm from "../components/CommentForm";
import React, { useState } from "react";
import { useEffect } from "react";
import cartIcon from "../assets/icon-cart.svg";
import { format } from "date-fns";

const WorkofArt = () => {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;
  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise("cart", "delete", { ...currentProduct });
  };

  let { imageId } = useParams();
  // console.log(imageId);

  const { loading: imageLoading, data: imageData } = useQuery(
    QUERY_SINGLE_IMAGE,
    {
      variables: { imageId: imageId },
    }
  );

  const { loading: commentsLoading, data: commentsData } = useQuery(
    QUERY_SINGLE_IMAGE_COMMENTS,
    {
      variables: { imageId: imageId },
    }
  );

  if (imageLoading || commentsLoading) {
    return <div>Loading...</div>;
  }

  const today = format(new Date(), "dd.MM.yyyy");
  // console.log(today);
  // console.log(typeof today);

  const artinfo = imageData?.image;
  const comments = commentsData?.image?.comments;

  // console.log(loading, artinfo);
  // console.log(artinfo)
  // console.log(artinfo.critique);
  // console.log(artinfo.description);
  const artTitle = artinfo.title;
  const artDescription = artinfo.description;
  const artImgSrc = artinfo.image;
  const artUserName = artinfo.user.userName;
  const artPrice = artinfo.price;
  const critique = artinfo.critique;

  const checkPrice = (artPrice) => {
    if (artinfo.price === undefined || artinfo.price === null) {
      return <p>Piece not for sale</p>;
    }
  };

  const checkforCritique = (critique, imageId) => {
    if (artinfo && artinfo.critique === true) {
      return <CommentForm thoughtId={imageId} />;
    } else {
      return <p>Critique disabled</p>;
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-6xl text-center p-8">Work of Art</h1>
      <main>
        <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
          <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
            <div className="md:block large-image">
              <img
                className="object-cover mx-auto rounded-xl w-[400px] h-[400px]"
                src={artImgSrc}
                alt="artwork image"
              />
            </div>
          </div>

          <div className="description p-6 md:basis-1/2 md:py-[40px]">
            <p className="text-[14px] tracking-widest uppercase font-[700] mb-6">
              {artUserName}
            </p>
            <h1 className="text-3xl md:text-4xl capitalize font-[700]">
              {artTitle}
            </h1>
            <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
              {artDescription}
            </p>
            <p className="md:hidden text-darkGrayishBlue my-6 leading-7">
              {artDescription}
            </p>

            <div className="price flex items-center">
              <span className="text-3xl font-[700] mr-4">
                {checkPrice(artPrice)}
              </span>
            </div>

            <div className="buttons-container flex flex-col md:flex-row mt-8">
              <button
                className="add-btn border-none bg-logo-pink rounded-lg text-black font-[700] py-6 px-6 mb-8 md:text-[14px] transition-all btn-shadow hover:opacity-50"
                onClick={addToCart}
              >
                <img
                  className="inline-block -translate-x-2 -translate-y-[2px] h-[15px]"
                  src={cartIcon}
                  alt="cart-icon"
                />
                &nbsp;Add to cart
              </button>
            </div>

            <div className="block">
              {checkforCritique(critique, imageId)}
              {comments && (
                <>
                  <h2>Comments:</h2>
                  {comments.map((comment) => (
                    <div key={comment._id}>
                      <p>
                        <strong>{comment.user.userName}: </strong>
                        {comment.comment}
                      </p>
                      <p className="mb-3">
                        Posted on:{" "}
                        {Date(comment.createdAt * 1000)
                          .toString()
                          .slice(0, 15)}
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkofArt;
