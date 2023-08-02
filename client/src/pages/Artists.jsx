import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { QUERY_USERS_WITH_IMAGES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react";
import Auth from "../utils/auth";

function Artists() {
  const { loading: profileLoading, error: profileError, data: profileData, } = useQuery(QUERY_USERS_WITH_IMAGES);
  const [userName, setUserName] = useState("");
  const isLoggedIn = Auth.loggedIn();
  useEffect(() => {
    if (profileData && profileData.getUserProfile) {
      setUserName(profileData.getUserProfile.userName);
    }
  }, [profileData]);
  if (profileLoading) {
    return <div>Loading...</div>;
  }
  if (profileError) {
    console.error("Error collecting data", profileError)
    return <div>Error: {profileError.message}</div>;
  }
  if (!isLoggedIn){
    return <h2>Must be logged in to proceed!</h2>
  }
  return (
    <>

    <main>
    <Navbar />
        <section className="grid grid-cols-3 gap-4 m-5">
          {profileData.usersWithImages.map((user) => (
            <div key={user._id} className="box-border rounded-lg bg-gradient-to-r text-center from-logo-pink via-red-400 to-blue-300">
              <h2 className="text-center p-1">{user.userName}</h2>
              {user.images.length > 0 ? (
                <Link to={`/profile/${user._id}`} target="_blank" rel="noreferrer">
                  <img
                    className="p-2 rounded"
                    src={user.images[0].image} // Assuming the first image is at index 0
                    alt={user.userName}
                  />
                </Link>
              ) : (
                <p>No images uploaded yet.</p>
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Artists;
