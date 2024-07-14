import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import AppDownload from "./components/AppDownload/AppDownload";
import Menu from "./pages/menu/Menu";
import { ToastContainer } from "react-toastify";
import SignUp from "./components/SignUp/SignUp";

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  return (
    <>

    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">

      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/login" element={<LoginPopup/>} />
        <Route path="/signup" element={<SignUp/>} />

        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/mobile-app" element={<AppDownload />} />
      </Routes>
      <Footer />

    </div>
    </>
  );
};

export default App;
