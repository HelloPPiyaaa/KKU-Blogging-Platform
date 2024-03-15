import React, { useState } from "react";
import Navbar2 from "../Navbar/Navbar1";
import "../misc/wp.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { createPost } from "../api/post"; // นำเข้าฟังก์ชัน Post จากไฟล์ api/test
import "../misc/register.css"; // แนบ CSS สำหรับสไตล์

// นำเข้ารูปภาพ
import cafe from "../pic/sign.png";
import lifestyle from "../pic/lifestyle.png";
import travel from "../pic/location.png";
import beauty from "../pic/makeup-2.png";
import fashion from "../pic/clothes-hanger.png";
import news from "../pic/newspaper.png";
import other from "../pic/menu.png";
import food from "../pic/restaurant.png";

function Writepost() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handlePost = async () => {
    if (!topic || !selectedCategory || !selectedImage || !content) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("user") as string);

      const post = {
        topic,
        category: selectedCategory,
        image: selectedImage,
        content,
        user: `${user.firstname} ${user.lastname}`,
      };

      // console.log(post);

      await createPost(post);

      alert("โพสต์บล็อกสำเร็จ!");
      setSelectedImage(null);
      setTopic("");
      setContent("");
      setSelectedCategory("");
    } catch (error) {
      console.error("Post failed:", error);
      alert("เกิดข้อผิดพลาดในการโพสต์บล็อก");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };

      if (file) {
        reader.readAsDataURL(file);
        setSelectedFileName(file.name);
      } else {
        setSelectedImage(null);
        setSelectedFileName("");
      }
    }
  };

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="write-post-container">
      <div className="nav-post">
        <Navbar2 />
      </div>
      <div className="wp">
        <Row>
          <Col>
            <Form.Label htmlFor="inputTopic">หัวข้อ</Form.Label>
            <Form.Control
              type="text"
              id="inputTopic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="ใส่ได้ไม่เกิน 50 ตัวอักษร"
              maxLength={50} // จำกัดจำนวนตัวอักษรที่ป้อน
            />
          </Col>
        </Row>

        <div className="alltype">
          <p>หมวดหมู่ทั้งหมด</p>

          <div className="option-type">
            <img
              src={cafe}
              alt="cafeType"
              onClick={() => handleCategorySelection("cafe")}
              className={selectedCategory === "cafe" ? "selected" : ""}
            />
            <img
              src={food}
              alt="foodType"
              onClick={() => handleCategorySelection("food")}
              className={selectedCategory === "food" ? "selected" : ""}
            />
            <img
              src={fashion}
              alt="fashionType"
              onClick={() => handleCategorySelection("fashion")}
              className={selectedCategory === "fashion" ? "selected" : ""}
            />
            <img
              src={travel}
              alt="travelType"
              onClick={() => handleCategorySelection("travel")}
              className={selectedCategory === "travel" ? "selected" : ""}
            />
            <img
              src={beauty}
              alt="beautyType"
              onClick={() => handleCategorySelection("beauty")}
              className={selectedCategory === "beauty" ? "selected" : ""}
            />
            <img
              src={lifestyle}
              alt="lifestyleType"
              onClick={() => handleCategorySelection("lifestyle")}
              className={selectedCategory === "lifestyle" ? "selected" : ""}
            />
            <img
              src={news}
              alt="newsType"
              onClick={() => handleCategorySelection("news")}
              className={selectedCategory === "news" ? "selected" : ""}
            />
            <img
              src={other}
              alt="otherType"
              onClick={() => handleCategorySelection("other")}
              className={selectedCategory === "other" ? "selected" : ""}
            />
          </div>
          <p>หมวดหมู่ที่เลือก: {selectedCategory}</p>

          <div className="selectfile">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            )}
            {selectedFileName && <p>Selected file: {selectedFileName}</p>}
          </div>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>เนื้อหา</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <button className="post" onClick={handlePost}>
          โพสต์บล็อก
        </button>
      </div>
    </div>
  );
}

export default Writepost;