import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../utils/mutations";
import Auth from "../utils/auth";
import Navbar from "../components/Navbar";

import { PhotoIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom";

function ImageUpload() {
  const [image, setImage] = useState("");
  const [uploadImageMutation] = useMutation(UPLOAD_IMAGE);
  const navigate = useNavigate();

  const isLoggedIn = Auth.loggedIn();

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //this returns the base64encoded string
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  async function handleUploadImage(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const declaration = document.getElementById("declaration").checked;
    const critique = document.getElementById("critique").checked;
    const price = parseFloat(document.getElementById("price").value.replace("$", ""));
    const medium = document.querySelector('#medium')
    const selectedMedium = medium.options[medium.selectedIndex].text
    console.log(typeof image );
    console.log(description);
    console.log(declaration);
    console.log(critique);
    console.log(price);
    console.log(selectedMedium)
    try {
      const token = Auth.getToken();

      if (!isLoggedIn || !token) {
        console.error("Must be logged in!");
        return;
      }

      const { data } = await uploadImageMutation({
        variables: { 
            userId: Auth.getProfile().data._id,
            image,
            title,
            description,
            declaration: declaration,
            critique: critique,
            price,
            selectedMedium: selectedMedium,
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
      const uploadedImage = data.uploadImage.image;
      console.log("Image Uploaded: ", uploadedImage);
      navigate("/profile");
    } catch (error) {
      console.error("Error uploading image: ", error.message);
    }
  }

return (
    <div>
        <Navbar />
        {/* Sets the background styling and header of the form section */}
        <section className="flex block" style={{ height: "300px" }}>
          <div className="top-0 w-full h-full bg-center bg-cover bg-gradient-to-r from-indigo-300 via-logo-pink to-red-200">
            <h1 className="text-6xl text-center p-8">Add New Artwork</h1>
          </div>
        </section>

        {/* This is the main form section of the page */}
        <section className=" py-16 bg-gradient-to-r from-indigo-300 via-logo-pink to-red-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="w-full flex justify-center items-center py-6">
                <div className="mx-5">
                  <form>   
                    {/* This div contains the declaration checkbox */}
                    <div className="my-5">
                      <h2 className="text-3x1 font-semibold leading-6 text-gray-900">Declaration</h2>
                      <div className="relative flex gap-x-3">
                        <input
                          id="declaration"
                          name="declaration"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div className="text-sm leading-6">
                          <label htmlFor="comments" className="font-medium text-gray-900">
                            I confirm that this is my own artwork and I have the right to distribute this work
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* This div contains the artwork upload box */}
                    <div className="col-span-full">
                      <h2 className="text-3x1 font-semibold leading-6 text-gray-900">
                        Artwork Image
                      </h2>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                          <div className="items-center text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="text-center cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <input accept="image/*" type="file" className="flex justify-center" onChange={convertToBase64} />
                                {image === '' || image === null ? (
                                ''
                                ) : (
                              <img width={100} height={100} src={image} />
                              )}
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                          </div>
                          <p className="text-xs leading-5 mt-4 text-gray-600">PNG or JPG up to 10MB</p>
                        </div>
                      </div>
                    </div>

      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Arwork Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3>Medium</h3>
              {/* This form is adapted from the Tailwind CSS docs, please see the README for the link */}
              <select data-te-select-init id="medium">
                <option value="1">Painting</option>
                <option value="2">Drawing</option>
                <option value="3">Mixed Media</option>
                <option value="4">Digital</option>
                <option value="5">Fabric</option>
                <option value="6">Photography</option>
              </select>
            </div>                  

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Artwork Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Artwork Price
              </label>
              <div className="mt-2">
                <textarea
                  id="price"
                  name="price"
                  rows={1}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={"$" + ''}
                />
              </div>
            </div>

            <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="critique"
                      name="critique"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Allow Critique
                    </label>
                    <p className="text-gray-500">Check this box allow critique on this work from other artists</p>
                  </div>
                </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Sale Options</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
          Would you like to sell your work as a digital download or physical artwork? Choose any, all, or none of the options below:
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Digital Download
                    </label>
                    <p className="text-gray-500">Check this box to sell your work as a digital download</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Physical Artwork
                    </label>
                    <p className="text-gray-500">Check this box to sell your work as a physical product</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button 
        type="submit"
        className="rounded-md bg-logo-pink px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleUploadImage}>
          Upload
        </button>
      </div>
    </form>
    </div>
                          </div>
                        </div>
                      </div>
        </section>


    </div>
  )
}

export default ImageUpload;
