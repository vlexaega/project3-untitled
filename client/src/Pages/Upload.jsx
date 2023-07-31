import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_IMAGE } from "../utils/mutations";
import Auth from "../utils/auth";

function ImageUpload() {
  const [image, setImage] = useState("");
  const [uploadImageMutation] = useMutation(UPLOAD_IMAGE);

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

  async function handleUploadImage() {
    try {
      const token = Auth.getToken();

      if (!isLoggedIn || !token) {
        console.error("Must be logged in!");
        return;
      }

      const { data } = await uploadImageMutation({
        variables: { userId: Auth.getProfile().data._id, image },
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
      const uploadedImage = data.uploadImage.image;
      console.log("Image Uploaded: ", uploadedImage);
    } catch (error) {
      console.error("Error uploading image: ", error.message);
    }
  }
  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{ width: "auto" }}>
        Upload your artwork
        <br />
        <input accept="image/*" type="file" onChange={convertToBase64} />
        {image === "" || image === null ? (
          ""
        ) : (
          <img width={100} height={100} src={image} />
        )}
        <button onClick={handleUploadImage}>Upload</button>
      </div>
    </div>
  );
}

export default ImageUpload;
