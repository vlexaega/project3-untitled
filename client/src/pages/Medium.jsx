import Navbar from "../components/Navbar";
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_IMAGES } from "../utils/queries";
import React, { useState, useEffect } from "react";
import { min } from "date-fns";


const Medium = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_IMAGES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const images = data?.images || [];
    console.log(images)
    let whatMedium = images.map((image) => image.selectedMedium);
    console.log(whatMedium);

    const digitalArr = []
    const paintArr = []
    const fabricArr = []
    const drawArr = []
    const mixedArr = []

    for (let i = 0; i < images.length; i++) {
        if (whatMedium[i] === "Digital") {
            digitalArr.push(images[i])
        } else if (whatMedium[i] === "Painting") {
            paintArr.push(images[i])
        } else if (whatMedium[i] === "Fabric") {
            fabricArr.push(images[i])
        } else if (whatMedium[i] === "Drawing") {
            drawArr.push(images[i])
        } else if (whatMedium[i] === "Mixed Media") {
            mixedArr.push(images[i])
        }
    }

    const mediumArray = [digitalArr, paintArr, fabricArr, drawArr, mixedArr]

    console.log(mediumArray)

    return (
        <div>
            <h1>{}</h1>
        </div>
    )
}

export default Medium;