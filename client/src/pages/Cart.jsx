import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";

function Cart(){
    return(
        <>
        <main>
            <Navbar />
        <section>
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
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>

        </main>
        </>

    )
}

export default Cart 

