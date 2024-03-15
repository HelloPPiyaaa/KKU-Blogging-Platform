import "../Navbar/navbar1.css";
import logoKKU from "../pic/logo-head.jpg";
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import Dropdown from "react-bootstrap/Dropdown";
import { IoMdSettings } from "react-icons/io";
import { ImStatsBars } from "react-icons/im";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Form } from "react-bootstrap";
import { fetchUserProfile } from "../api/profile";

const Navbar2 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleDropdownChange = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedOption(eventKey);
      if (eventKey === "option1") {
        window.location.href = `/profile/${userId}`;
      }
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbarreal">
      <div className="navbarhead">
        <div className="navbar-badge">20+</div>
        <div className="navbar-end">
          <a href="/home"><img className="navbar-logo" src={logoKKU} alt="logo" /></a>
          
        </div>

        <div className="navbar-center"></div>

        <div className="navbar-end">
          <span>
            <IoIosSearch className="icon-search" />
            Search...
          </span>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className="searchbox"
            style={{
              width: "200px",
              height: "40px",
              borderRadius: "15px",
              border: "2px solid #808995",
            }}
          />
          <button className="icon-button">
            <IoMdNotifications />
          </button>

          <button className="icon-button " onClick={toggleDropdown}>
            <PiUserCircleFill />
            <Dropdown
              show={showDropdown}
              onSelect={handleDropdownChange}
              className="position-absolute z-3 top-0 translate-middle-x"
              style={{
                paddingTop: "3.8rem",
                marginLeft: "3rem",
              }}
            >
              <Dropdown.Menu
                className="position-relative"
                style={{
                  background: "#433E49",
                }}
              >
                <Dropdown.Item eventKey="option1" href="/profile/:id">
                  <PiUserCircleFill />
                  โปรไฟล์
                </Dropdown.Item>
                <Dropdown.Item eventKey="option2" href="/setting1">
                  <IoMdSettings />
                  ตั้งค่า
                </Dropdown.Item>
                <Dropdown.Item eventKey="option3">
                  <ImStatsBars />
                  สถิติ
                </Dropdown.Item>
                <Dropdown.Item eventKey="option4" href="/test">
                  <IoIosHelpCircle />
                  ช่วยเหลือ
                </Dropdown.Item>
                <Dropdown.Item eventKey="option5" href="/">
                  <IoIosLogOut />
                  ออกจากระบบ
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </button>
        </div>
      </div>

      <div className="navtwo">
        <Nav
          className="justify-content-center"
          variant="underline"
          defaultActiveKey="/home"
        >
          <Nav.Item>
            <Nav.Link className="link-dark" href="/home">
              หน้าหลัก
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link-dark " href="/popular">
              เป็นที่นิยม
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link-dark" href="/category">
              หมวดหมู่
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link-dark" href="/about">
              เกี่ยวกับเรา
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default Navbar2;
