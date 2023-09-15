import React from "react";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

let App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
