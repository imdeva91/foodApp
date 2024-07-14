import React from "react";
import { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Menu from "../menu/Menu";

const Home = () => {
  return (
    <div>
      <Header />
     <Menu/>
      <AppDownload />
    </div>
  );
};

export default Home;
