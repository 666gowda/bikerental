import React from "react";
import { useNavigate } from "react-router-dom";
import HeroNavBar from "../hero-nav-bar/HeroNavBar";
import HeroFooter from "../hero-footer/HeroFooter";

export default function BookingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <HeroNavBar />
      <h1>Book Your Bike Now</h1>
      <div>
        <button onClick={() => navigate("/home")}>Home</button>
      </div>
      <HeroFooter />
    </div>
  );
}
