import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container-flued">
      <Routes>
        <Route exact path="/" component={Home}></Route>
      </Routes>
    </div>
  );
};

export default App;
