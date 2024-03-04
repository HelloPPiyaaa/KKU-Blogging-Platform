import "../Navbar/Navbar.css";
import { useState } from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
import { MdCircleNotifications } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white">
      <nav className="container">
        <figure className="d-none d-lg-flex justify-content-between align-items-center pt-4 pb-2 p-lg-4">
          <h2 className="mb-0">
            K K U <br />
            BLOGGING PLATFORM
          </h2>
          <form action="/search" className="searchform ml-lg-auto" method="get">
            <input className="searchbutton" placeholder="ค้นหา..." />
          </form>
          <ul className="nav nav-menu mt-2 ml-lg-auto d-flex align-items-center">
            <li>
              <a href="#" className="iconPost">
                <MdOutlinePostAdd className="iconPosta mr-1" />
                โพสต์บล็อก
              </a>
            </li>
            <li>
              <a href="#" className="iconChat1">
                <AiOutlineComment className="iconChat" />
              </a>
            </li>
            <li>
              <a href="#" className="iconNoti1">
                <MdCircleNotifications className="iconNoti" />
              </a>
            </li>
            <li className="user">
              <div className="dropdownnav">
                <MdAccountCircle onClick={toggleDropdown} className="iconAcc" />

                {isOpen && (
                  <div className="dropdown-content">
                    <a href="#home">
                      <FaUserLarge className="user-icon1" />
                      โปรไฟล์
                    </a>
                    <a href="#about">
                      <IoIosSettings className="setting-icon1" />
                      ตั้งค่า
                    </a>
                    <a href="#contact">
                      <IoIosStats className="stat-icon1" />
                      สถิติ
                    </a>
                    <a href="#contact">
                      <IoIosHelpCircle className="help-icon1" />
                      ช่วยเหลือ
                    </a>
                    <a href="#contact">
                      <IoLogOut className="logout-icon1" />
                      ออกจากระบบ
                    </a>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </figure>
        <div className="d-flex d-lg-none p-2 flex-wrap justify-content-between">
          <a href="#">
            <h2>
              K K U <br />
              BLOGGING PLATFORM
            </h2>
          </a>

          <div className="btn btn-outline" onClick={toggleDropdown}>
            <RxHamburgerMenu />
            {isOpen && (
              <div className="dropdown-content">
                <a href="#home">หน้าหลัก</a>
                <a href="#about">เป็นที่นิยม</a>
                <a href="#contact">แท็ก</a>
                <a href="#contact">เกี่ยวกับเรา</a>
                <a href="#contact">ออกจากระบบ</a>
              </div>
            )}
          </div>
        </div>
      </nav>
      <nav className="nav bg-white  sticky-top pt-2" id="navbar">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-lg-center">
            <ul className="d-lg-flex flex-row flex-wrap list-unstyled ">
              <li>
                <a className="nav-link link-dark" href="#">
                  หน้าหลัก
                </a>
              </li>
              <li>
                <a className="nav-link link-dark" href="#">
                  เป็นที่นิยม
                </a>
              </li>
              <li>
                <a className="nav-link link-dark" href="#">
                  แท็ก
                </a>
              </li>
              <li>
                <a className="nav-link link-dark" href="#">
                  เกี่ยวกับเรา
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar1;
