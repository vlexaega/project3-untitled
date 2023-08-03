import Navbar from "../components/Navbar";
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_IMAGES } from "../utils/queries";
import React, { useState, useEffect } from "react";


const Medium = () => {
    const { loading, error, data } = useQuery(QUERY_ALL_IMAGES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    const images = data?.images || [];

    let whatMedium = images.map(image => image.selectedMedium)
    console.log(whatMedium)

    return (
        <h1>Hello World</h1>
    )
}

export default Medium;