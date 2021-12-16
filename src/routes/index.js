import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";

export default function Routess() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contactus' element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}
