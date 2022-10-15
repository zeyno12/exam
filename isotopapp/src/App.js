import React from "react";
import Isotop from "./components/Isotop";
import "../src/scss/style.css";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/home" element={<Home />}></Route>
          <Route path="/isotop" element={<Isotop />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
