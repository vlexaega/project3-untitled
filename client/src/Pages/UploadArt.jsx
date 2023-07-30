import React, { useState } from 'react'

function ImageUpload(){

    function convertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.file[0]);
        reader.onload = () => {
            console.log(reader.result); //this returns the base64encoded string
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
    }
    return (
        <div className="auth-wrapper" >
            <div className="auth-inner" style={{ width: "auto" }}>
                Upload your artwork
                <input
                accept="image/*"
                type="file"
                onChange={convertToBase64}
                />
            </div>
        </div>
    )
}

export default ImageUpload;