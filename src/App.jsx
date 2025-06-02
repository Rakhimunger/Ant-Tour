import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Chardham from "./Components/Pages/Chardham";
import Dodham from "./Components/Pages/Dodham";
import { Route, Routes } from "react-router-dom";
import Badrinath from "./Components/Pages/Badrinath";
import KedharNath from "./Components/Pages/Kedarnath";
import Booknow from "./Components/Pages/Booknow";
import Sliders from "./Components/Pages/Sliders";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sliders />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/char-dham" element={<Chardham />} />
        <Route path="/do-dham" element={<Dodham />} />
        <Route path="/badri-nath" element={<Badrinath />} />
        <Route path="/kedar-nath" element={<KedharNath />} />
        <Route path="/book-now" element={<Booknow />} />
      </Routes>
    </div>
  );
};

export default App;
