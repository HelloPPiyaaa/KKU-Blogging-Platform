import "./Navbar/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdOutlinePostAdd } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { MdCircleNotifications } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { TbHelpCircleFilled } from "react-icons/tb";
import { IoLogIn } from "react-icons/io5";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="logo">
          <Navbar.Brand href="#home" id="logo1">
            K K U
          </Navbar.Brand>
          <Navbar.Brand href="#home" id="logo2">
            Blogging Platform
          </Navbar.Brand>
        </div>

        <div className="search">
          <Form.Control type="text" placeholder="ค้นหา" className=" mr-sm-2" />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="icon">
              <a href="/Post" id="iconPost">
                {" "}
                <MdOutlinePostAdd />
                <a href="/Post" id="txtPost">
                  โพสต์บล็อก
                </a>
              </a>
              <a href="/chat" id="iconChat">
                <AiOutlineComment />
              </a>
              <a href="/Noti" id="iconNoti">
                <MdCircleNotifications />
              </a>
            </div>
            <NavDropdown title="User245" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" id="acc">
                {" "}
                <MdAccountCircle />
                <a href="/Profile"> บัญชีผู้ใช้</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" id="setting">
                {" "}
                <IoSettingsSharp /> <a href="/setting">ตั้งค่า</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" id="stat">
                {" "}
                <VscGraph /> <a href="/stat">สถิติ</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" id="help">
                {" "}
                <TbHelpCircleFilled />
                <a href="/help">ช่วยเหลือ</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" id="logout">
                <IoLogIn />
                <a href="/logout">ออกจากระบบ</a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
