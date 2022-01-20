import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container-flued">
      {/* <Routes path="/home" exact component={Home} /> */}
      <Home />
    </div>
  );
};

export default App;
