import React from "react";
import HeroNavBar from "../hero-nav-bar/HeroNavBar";
import LandingPage from "../landing-page/LandingPage";
import "./Home.css";
import HeroFooter from "../hero-footer/HeroFooter";

const Home = () => {
  return (
    <div id="main-div-hero-section">
      <HeroNavBar />
      <LandingPage />
      <HeroFooter />
    </div>
  );
};

export default Home;
