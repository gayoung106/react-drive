import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import Signup from "./components/pages/signup/Signup";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
