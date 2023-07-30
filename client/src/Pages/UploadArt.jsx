import React, { useState } from 'react'

function ImageUpload(){

    const[image, setImage]=useState("");

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

    function uploadImage(){
        fetch("http://localhost:3000/upload-image", {
            method: "Post",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                base64:image
            })
        }).then((res) => res.json()).then((data) => console.log(data))

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
                <button onClick={uploadImage}>Upload</button>
            </div>
        </div>
    )
}

export default ImageUpload;