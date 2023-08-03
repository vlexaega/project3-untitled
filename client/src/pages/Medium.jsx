import Navbar from "../components/Navbar";
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_IMAGES } from "../utils/queries";
import React, { useState } from "react";
import { useEffect } from "react";