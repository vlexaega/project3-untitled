import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { QUERY_USERS_WITH_IMAGES } from "../utils/queries";

function Artists() {
  return (
    <>
      <main>
        <Navbar />
        <section className="grid grid-cols-3 gap-4 m-5">
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
          <div className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
            <h2 className="text-center p-1">Artist</h2>
            <Link to="/profile/:id" target="_blank" rel="noreferrer">
              <img
                className="p-2 rounded"
                src="src/assets/goldblum.png"
                alt="Goldblum"
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Artists;
