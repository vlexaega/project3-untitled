import React, { useState } from 'react';
import { useMutation  } from '@apollo/client';
import { UPLOAD_IMAGE } from '../utils/mutations';

function ImageUpload(){

    const[image, setImage] = useState("");
    const[uploadImageMutation] = useMutation(UPLOAD_IMAGE);

    function convertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result); //this returns the base64encoded string
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
    }
    
    async function handleUploadImage(){
        try {
            const { data } = await uploadImageMutation({
                variables: { image },
            });
            const uploadedImage = data.singleUpload.image;
            console.log('Image Uploaded: ', uploadedImage);
        } catch (error) {
            console.error('Error uploading image: ', error);
        }

    }
    return (
        <div className="auth-wrapper" >
            <div className="auth-inner" style={{ width: "auto" }}>
                Upload your artwork<br/>
                <input
                accept="image/*"
                type="file"
                onChange={convertToBase64}
                />
                {image=="" || image==null ? "" : <img width={100} height={100} src={image}/>}
                <button onClick={handleUploadImage}>Upload</button>
            </div>
        </div>
    )
}

export default ImageUpload;