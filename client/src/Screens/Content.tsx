import { useEffect, useState } from "react";
import { Post } from "../types/post";
import { getPostById } from "../api/post";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Badge, Image } from "react-bootstrap";
import "../misc/content.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Navbar2 from "../Navbar/Navbar1";
import { LuHeart } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineBookmarkBorder } from "react-icons/md";

const Content = () => {
  let { id } = useParams();

  const [post, setPost] = useState<Post | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getPostById(id as string);
        setPost(res);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div>
        <Navbar2 />
      </div>
      <div className="container-con">
        {post && !loading && (
          <div className="post-container">
            <div className="head-user">
              <div className="user-info" style={{ fontWeight: "bold" }}>
                {post.user}
              </div>
              <div className="datePost">
                {dayjs(post.createAt).format("DD/MM/YYYY HH:mm:ss")}
              </div>
            </div>

            <Row>
              <Col>
                <div className="image-container">
                  <Image src={post.image} rounded />
                </div>
              </Col>
              <Col>
                <div className="topic-con">
                  <h2>{post.topic}</h2>
                </div>
                <div className="category-con">
                  {post.category === "คาเฟ่" && (
                    <Badge bg="info">{post.category}</Badge>
                  )}
                  {post.category === "ร้านอาหาร" && (
                    <Badge bg="primary">{post.category}</Badge>
                  )}
                  {post.category === "ท่องเที่ยว" && (
                    <Badge bg="warning">{post.category}</Badge>
                  )}
                  {post.category === "บิวตี้" && (
                    <Badge bg="light">{post.category}</Badge>
                  )}
                  {post.category === "ไลฟ์สไตล์" && (
                    <Badge bg="success">{post.category}</Badge>
                  )}
                  {post.category === "ข่าวสาร" && (
                    <Badge bg="danger">{post.category}</Badge>
                  )}
                  {post.category === "อื่นๆ" && (
                    <Badge bg="secondary">{post.category}</Badge>
                  )}
                </div>

                <div className="post-con">{post.content}</div>

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

               
                    <div className="icon-save">
                      <MdOutlineBookmarkBorder />
                    </div>
             
                </div>

                {/* Comment */}
                <div className="comment-con">
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="แสดงความคิดเห็น"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
