import { useEffect, useState } from "react";
import { getPosts } from "../api/post";
import { Post } from "../types/post";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import dayjs from "dayjs";
import { LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import "../misc/feeds.css";
import { TfiMoreAlt } from "react-icons/tfi";
import { Dropdown, Button } from "react-bootstrap";

const Feeds = () => {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState<Post[] | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getPosts();
        setFeeds(res);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const handleClickCard = (id: string) => {
    console.log(id);
    navigate(`/content/${id}`);
  };

  return (
    <div className="container">
      <Row xs={1} md={4} className="g-4">
        {feeds &&
          feeds.map((feed, idx) => (
            <Col key={idx}>
              <div
                style={{ width: "18rem", height: "100%" }}
                className="col m-2 d-flex justify-content-center align-items-stretch"
              >
                <Card
                  style={{ width: "100%", position: "relative" }}
                  onClick={() => handleClickCard(feed._id)}
                >
                  <Card.Img
                    variant="top"
                    src={feed.image}
                    style={{ objectFit: "cover", height: "200px" }} // ตั้งค่าขนาดของรูปและการปรับเนื้อหา
                  />
                  <TfiMoreAlt
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{ fontWeight: "bold" }}
                      className="text-truncate"
                    >
                      {feed.topic}
                    </Card.Title>
                    <div style={{ marginBottom: "10px" }}>
                      {feed.category === "cafe" && (
                        <Badge bg="info">{feed.category}</Badge>
                      )}
                      {feed.category === "food" && (
                        <Badge bg="primary">{feed.category}</Badge>
                      )}
                      {feed.category === "travel" && (
                        <Badge bg="warning">{feed.category}</Badge>
                      )}
                      {feed.category === "beauty" && (
                        <Badge bg="light">{feed.category}</Badge>
                      )}
                      {feed.category === "lifestyle" && (
                        <Badge bg="success">{feed.category}</Badge>
                      )}
                      {feed.category === "news" && (
                        <Badge bg="danger">{feed.category}</Badge>
                      )}
                      {feed.category === "other" && (
                        <Badge bg="secondary">{feed.category}</Badge>
                      )}
                      {/* เพิ่มเงื่อนไขสำหรับหมวดหมู่อื่น ๆ ตามต้องการ */}
                    </div>

                    <Card.Subtitle
                      className="mb-2 text-muted b"
                      style={{
                        display: "flex",
                      }}
                    >
                      <div style={{ fontWeight: "bold", marginRight: "7px" }}>
                        {feed.user}
                      </div>
                      <div style={{ color: "grey" }}>
                        {dayjs(feed.createAt).format("DD/MM/YYYY")}
                      </div>
                    </Card.Subtitle>

                    <Card.Text className="text-truncate">
                      {feed.content}
                    </Card.Text>
                    {/* Like */}
                    <div className="btn-action">
                      <div className="icon-like">
                        <LuHeart />
                      </div>
                      <p className="likecount">254</p>
                      <div className="icon-cm">
                        <FaRegComment />
                      </div>
                      <p className="commentcount">42</p>

                      <div className="save">
                        <div className="icon-save">
                          <MdOutlineBookmarkBorder />
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
      </Row>
      {showDropdown && (
        <Dropdown
          style={{
            position: "absolute",
            top: "50px",
            right: "10px",
          }}
          show={showDropdown}
          onClick={(e) => e.stopPropagation()}
        >
          <Dropdown.Menu>
            <Dropdown.Item >แก้ไขโพสต์</Dropdown.Item>
            <Dropdown.Item >ลบโพสต์</Dropdown.Item>
            <Dropdown.Item >
              ตั้งค่าความเป็นส่วนตัว
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
};

export default Feeds;
