import "../misc/home.css";
import Navbar2 from "../Navbar/Navbar1";
import thaifood from "../pic/thaifood.jpeg";
import excercise from "../pic/excercise.jpeg";
import social from "../pic/social.jpg";
import Carousel from "react-bootstrap/Carousel";
import "../misc/home.css";
import { TbPlus } from "react-icons/tb";

function HomePage() {
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
    </div>
  );
}

export default HomePage;
