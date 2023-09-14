import React from "react";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";

let App = () => {
  return (
    <Routes>
      <Route exact path="/" component={Auth} />
      <Route path="/home" component={Home} />
    </Routes>
  );
};

export default App;
