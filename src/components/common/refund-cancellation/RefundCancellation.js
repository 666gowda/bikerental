import React from "react";
import { useNavigate } from "react-router-dom";
import HeroNavBar from "../hero-nav-bar/HeroNavBar";
import HeroFooter from "../hero-footer/HeroFooter";

export default function RefundCancellation() {
  const navigate = useNavigate();
  return (
    <div>
      <HeroNavBar />
      <h1>Refund & Cancellation Page</h1>
      <button onClick={() => navigate("/home")}>Home</button>
      <HeroFooter />
    </div>
  );
}
