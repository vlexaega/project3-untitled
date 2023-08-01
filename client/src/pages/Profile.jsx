// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/LogoBackdrop.png";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_USER_PROFILE } from "../utils/mutations";
import { GET_USER_IMAGES } from "../utils/mutations";
import { useQuery } from "@apollo/client";

// minor updates
function Profile() {
  const { loading: profileLoading, error: profileError, data: profileData } = useQuery(GET_USER_PROFILE);
  const { loading: imagesLoading, error: imagesError, data: imagesData } = useQuery(GET_USER_IMAGES);

  const [userName, setUserName] = useState("");
  const [bio, setUserBio] = useState("");
  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    if (profileData && profileData.getUserProfile) {
      setUserName(profileData.getUserProfile.userName);
      setUserBio(profileData.getUserProfile.bio);
    }
    }, [profileData]);

  useEffect(() => {
    if (imagesData && imagesData.getUserImages) {
      setUserImages(imagesData.getUserImages);
    }
    }, [imagesData]);

    if (profileLoading || imagesLoading){
      return <div>Loading..</div>
    }
    if (profileError || imagesError){
      console.error("Error collecting data", profileError || imagesError);
      return <div>Error collecting data</div>;
    }

  // const [userName, setUserName] = useState("");
  // const [bio, setUserBio] = useState("");
  // // retrieve username from local storage and set it
  // useEffect(() => {
  //   const storedUserName = localStorage.getItem("userName");
  //   if (storedUserName) {
  //     setUserName(storedUserName);
  //   }
  // }, []);
  // // retrieve bio form localstorage and set it
  // useEffect(() => {
  //   const storedBio = localStorage.getItem("bio");
  //   if (storedBio) {
  //     setUserBio(storedBio);
  //   }
  // }, []);
  return (
    <>
      <main className="profile-page">
        <Navbar />
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${Logo})`,
            }}
          >
            <span
              id="LogoPinkOverlay"
              className="w-full h-full absolute opacity-10 bg-logo-pink"
            ></span>
          </div>
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
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
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
                  <div className="w-full flex justify-center items-center">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8 flex-wrap items-center text-center">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-logo-black">Uploads</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-logo-black">
                          Purchases
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-logo-black">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2"></h3>
                  <div className="mb-2 text-logo-black mt-10">
                    <h3 className="mb-2 mt-10 text-center">Username:</h3>
                    <i className="fas fa-briefcase mr-2 text-lg text-logo-black"></i>
                    {userName}
                  </div>
                  <div className="mb-2 text-logo-black mt-10">
                    <button className="bg-logo-pink hover:bg-red-200 text-logo-black font-bold py-2 px-4 rounded">
                      <Link to="/upload">Upload Your Art!</Link>
                    </button>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-logo-black">
                        {bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 py-10 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Uploaded Images</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {userImages.map((image) => (
                    <div key={image._id} className="rounded-lg overflow-hidden shadow-md">
                      <img src={image.image} alt={image.title} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
                        <p className="text-gray-600">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
