import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);
  const {userDetails,userLogOut} = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to={'/'}>
      <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to={'/'}
          onClick={() => setMenu("home")}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
        to={'/menu'}
          onClick={() => setMenu("menu")}
          className={menu == "menu" ? "active" : ""}
        >
          Menu
        </Link>
        <Link
        to={'/mobile-app'}
          onClick={() => setMenu("mobile-app")}
          className={menu == "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </Link>
        {/* <Link
          onClick={() => setMenu("contact-us")}
          className={menu == "contact-us" ? "active" : ""}
        >
          Contact-us
        </Link> */}
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt=""  /> */}
        <div className="navbar-search-icon">
         <Link to={'/cart'}> <img src={assets.basket_icon} alt="" /></Link> 
          <h1 className={getTotalCartAmount()===0 ? '' : 'dot'}>{getTotalCartAmount()===0? '   ' :''} </h1>
        </div>
        <div>
         {userDetails===null?" ":(userDetails.name)}
        </div>
        <button>
        {userDetails===null?
        
        <Link to={'/login'}>Login </Link>
        :
        
        <div onClick={userLogOut}>Log out</div>
        }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
