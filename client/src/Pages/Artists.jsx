import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from "react";

function Artists() {
  return (
    <>
      <main>
        <Navbar />
        <section className="grid grid-cols-5 gap-4 m-5">
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
          <div className="box-border bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2>Artist</h2>
            <Link to="/home" target="_blank" rel="noreferrer">
              <img src="./assets/goldblum.png"></img>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Artists;
