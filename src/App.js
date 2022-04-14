import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default App;
