import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import AppDownload from "./components/AppDownload/AppDownload";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
import Menu from "./pages/menu/Menu";

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
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/mobile-app" element={<AppDownload />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
};

export default App;
