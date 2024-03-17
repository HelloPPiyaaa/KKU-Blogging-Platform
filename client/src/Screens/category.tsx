import React from "react";
import "../misc/category.css";
import Navbar2 from "../Navbar/Navbar1";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Category = () => {

    
  return (
    <div>
      <Navbar2 />

      <div className="categoryPage">
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/dd/04/c3/dd04c3d302a647b9d077d31ef5f0a2ee.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px",fontWeight:"bold" }}>คาเฟ่</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/70/c7/b4/70c7b45850fb057509baa13557c6378b.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px",fontWeight:"bold" }}>ร้านอาหาร</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/49/37/4b/49374b0ff961f155d6c3c4beb41db662.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px",fontWeight:"bold" }}>แฟชั่น</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/77/b4/21/77b421686d6088e6527cf57d68c69e96.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px",fontWeight:"bold" }}>
                  ท่องเที่ยว
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/736x/6e/72/c2/6e72c22c4a1fdcd53f6b53b01e414002.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px",fontWeight:"bold" }}>บิวตี้</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/0f/da/83/0fda83dc72103e37993994d252015659.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px",fontWeight:"bold" }}>ไลฟ์สไตล์</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/ca/a0/20/caa020ed3d43299c77b235c72e828d8b.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px",fontWeight:"bold" }}>ข่าวสาร</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/96/8d/2c/968d2cd8e5801a2c0b9d2866ef7472b0.jpg"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "14px",fontWeight:"bold" }}>อื่นๆ</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Category;
