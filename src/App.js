import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Elevator1 from "./pages/elevator1";
import Elevator2 from "./pages/elevator2";
import Elevator3 from "./pages/elevator3";
import Elevator4 from "./pages/elevator4";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elevator1" element={<Elevator1 />} />
        <Route path="/elevator2" element={<Elevator2 />} />
        <Route path="/elevator3" element={<Elevator3 />} />
        <Route path="/elevator4" element={<Elevator4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
