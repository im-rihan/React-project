import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link exact to={"/"}>
        <Navbar />
        <Slider />
      </Link>
    </>
  );
};

export default Home;
