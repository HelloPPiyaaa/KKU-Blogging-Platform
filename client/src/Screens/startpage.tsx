import { useState } from "react";
import "../misc/start.css";
import cafeImage from "../pic/start1.jpg";
import foodImage from "../pic/start2.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function StartPage() {
  return (
    <div className="st">
      <Navbar />
      <div className="container">
        <h1>
          เริ่มต้นใช้งานง่ายๆ <br />
          เพื่อแบ่งปันความคิดของคุณ
        </h1>
      </div>
      <div className="imagestart">
        <img src={cafeImage} alt="cafe" className="start1" />
        <img src={foodImage} alt="food" className="start2" />
      </div>
      
    </div>
  );
}

export default StartPage;
