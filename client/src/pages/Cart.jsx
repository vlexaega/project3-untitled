import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";

const ProductDisplay = () => (
  <section>
    <Navbar />
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
  </section>
);
const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);
function Cart() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage(
        "Order Confirmed! You will receive an email confirmation shortly."
      );
    }
    if (query.get("canceled")) {
      setMessage("Order canceled. Proceed to checkout when ready.");
    }
  }, []);
  return message ? <Message message={message} /> : <ProductDisplay />;
}
export default Cart;