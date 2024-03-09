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
      <div className="button">
        <Link to="/login" className="btn2 btn-light">
          เริ่มต้นใช้งาน{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default StartPage;
