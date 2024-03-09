import "../Navbar/navbar1.css";
import logoKKU from "../pic/logo-head.jpg";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { BsChatHeart } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import Dropdown from "react-bootstrap/Dropdown";
import { IoMdSettings } from "react-icons/io";
import { ImStatsBars } from "react-icons/im";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const Navbar2 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownChange = (eventKey: string | null) => {
    if (eventKey !== null) {
      setSelectedOption(eventKey);
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
          <img className="navbar-logo" src={logoKKU} alt="logo" />
        </div>

        <div className="navbar-center"></div>

        <div className="navbar-end">
          <button className="icon-button">
            <IoIosSearch />
          </button>
          <button className="icon-button">
            <BsChatHeart />
          </button>

          <button className="icon-button">
            <IoMdNotifications />
          </button>

          <button className="icon-button " onClick={toggleDropdown}>
            <FaUser />
          </button>
          <Dropdown
            show={showDropdown}
            onSelect={handleDropdownChange}
            className="position-absolute p-4 z-3"
          >
            <Dropdown.Menu>
              <Dropdown.Item eventKey="option1">
                <FaUser />
                โปรไฟล์
              </Dropdown.Item>
              <Dropdown.Item eventKey="option2">
                <IoMdSettings />
                ตั้งค่า
              </Dropdown.Item>
              <Dropdown.Item eventKey="option3">
                <ImStatsBars />
                สถิติ
              </Dropdown.Item>
              <Dropdown.Item eventKey="option4" href="/help">
                <IoIosHelpCircle />
                ช่วยเหลือ
              </Dropdown.Item>
              <Dropdown.Item eventKey="option5">
                <IoIosLogOut />
                ออกจากระบบ
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
            <Nav.Link className="link-dark" href="/tag">
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
