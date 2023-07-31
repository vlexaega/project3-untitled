import Navbar from "../components/Navbar";
// eslint-disable-next-line no-unused-vars
import React from "react";

function Artists() {
  return (
    <>
      <main>
        <Navbar />
        <div className="grid grid-cols-4 gap-4 hover:grid-cols-6 box-border bg-gradient-to-r from-logo-pink via-red-400 to-blue-300">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
          <div>09</div>
          <div>10</div>
        </div>
      </main>
    </>
  );
}

export default Artists;
