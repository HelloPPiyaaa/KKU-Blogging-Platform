import React, { useState } from "react";
import "../misc/home.css";
import Navbar2 from "../Navbar/Navbar1";
import thaifood from "../pic/thaifood.jpeg";
import excercise from "../pic/excercise.jpeg";
import social from "../pic/social.jpg";
import Carousel from "react-bootstrap/Carousel";
import "../misc/home.css";
import Feeds from "../Screens/Feeds";
import Footer from "../Navbar/footer";
import { TbPlus } from "react-icons/tb";

function HomePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowing2, setIsFollowing2] = useState(false);

  const handleFollowButtonClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleFollowButtonClick2 = () => {
    setIsFollowing2(!isFollowing2);
  };

  return (
    <div className="home">
      <Navbar2 />
      <div className="homepage mb-4 p-0">
        <div className="Carousel">
          <Carousel fade data-bs-theme="white">
            <Carousel.Item style={{ height: "70vh" }}>
              <img className="d-block w-100" src={social} alt="First slide" />
              <h1 className="text-white right">
                แลกเปลี่ยนประสบการณ์กับเพื่อนๆ
              </h1>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                className="d-block w-100"
                src={thaifood}
                alt="Second slide"
              />
              <h1 className="text-white right">วันนี้มีอะไรทานบ้างนะ</h1>
            </Carousel.Item>
            <Carousel.Item style={{ height: "70vh" }}>
              <img
                className="d-block w-100"
                src={excercise}
                alt="Third slide"
              />
              <h1 className="text-white right">หรือจะชวนเพื่อนไปออกกำลังกาย</h1>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="other">
        <a href="#header" className="btn btn-dark rounded-circle">
          <TbPlus />
        </a>
      </div>
      <div className="categ-home">
        <h4>หมวดหมู่เป็นที่นิยม</h4>

        <div className="categ-popular">
          <div className="content-wrapper">
            <div className="text-button-wrapper">
              <div className="left-con">
                <h4 className="count-categ">1</h4>
                <p className="topic-categ-home">ข่าวสาร</p>
                <p className="left-text">
                  ผู้ติดตามจำนวน 684 คน จำนวน 356 โพสต์
                </p>
              </div>
              <button className="right-button" onClick={handleFollowButtonClick}>
                  {isFollowing ? "กำลังติดตาม" : "ติดตาม"}
                </button>
            </div>
          </div>
        </div>
        <div className="categ-popular">
          <div className="content-wrapper">
            <div className="text-button-wrapper">
              <div className="left-con">
                <h4>2</h4>
                <p className="topic-categ-home">คาเฟ่</p>
                <p className="left-text">
                  ผู้ติดตามจำนวน 564 คน จำนวน 349 โพสต์
                </p>
              </div>
              <div className="right-con">
                <button className="right-button" onClick={handleFollowButtonClick2}>
                  {isFollowing2 ? "กำลังติดตาม" : "ติดตาม"}
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="feeds-home">
        {" "}
        <p className="allpost-home">โพสต์ทั้งหมด</p>
        <Feeds />
      </div>
    </div>
  );
}

export default HomePage;
