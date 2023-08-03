import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function Checkout() {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [orderID, success]);

  return (
    <main>
      <Navbar />

      <section className="relative block" style={{ height: "500px" }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-gradient-to-r from-indigo-300 via-logo-pink to-red-200">
          <span
            id="LogoPinkOverlay"
            className="w-full h-full absolute opacity-10 bg-logo-pink"
          ></span>
        </div>
        <Cart />
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          ></svg>
        </div>
      </section>
      <section className="relative py-16 bg-gradient-to-r from-indigo-300 via-logo-pink to-red-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative"></div>
                </div>
                <div className="w-full lg:w-4/12 xl:w-1/6 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                </div>
                <PayPalScriptProvider>
                  <div>
                    <div className="wrapper">
                      <div className="product-info">
                        <div className="product-text">
                          <h1>{}</h1>
                        </div>
                        <div className="product-price-btn">
                          <p>$20</p>
                          <br></br>
                          <button
                            className="add-btn border-none bg-logo-pink rounded-lg text-black font-[700] py-6 px-6 mb-8 md:text-[14px] transition-all btn-shadow hover:opacity-50"
                            type="submit"
                            onClick={() => setShow(true)}
                          >
                            Buy now
                          </button>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    {show ? (
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                      />
                    ) : null}
                  </div>
                </PayPalScriptProvider>

                <div className="w-full flex justify-center text-center items-center">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8 flex-wrap items-center text-center">
                    <div className="mr-4 p-3 text-center">
                      <div className="flex  justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <div className="text-center mt-12">
                            <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2"></h3>

                            <div className="mb-2 text-logo-black mt-10"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
