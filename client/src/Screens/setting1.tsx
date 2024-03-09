import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../misc/setting1.css";
import Navbar2 from "../Navbar/Navbar1";

function Setting() {
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleToggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
  };

  const handleCancelChangePassword = () => {
    setShowChangePassword(false);
  };

  return (
    <div>
      <Navbar2 />
      <header className="header" role="banner">
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li id="sidebarSet">
                <a href="/setting1">จัดการบัญชีผู้ใช้</a>
              </li>
              <li id="sidebarSet">
                <a href="/setting2">การแจ้งเตือน</a>
              </li>
              <li id="sidebarSet">
                <a href="/setting3">ความปลอดภัยและการเข้าสู่ระบบ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Container className="contain-setting">
        <div className="manageAcc">
          <h4>จัดการบัญชีผู้ใช้</h4>
          <div className="form-outline mb-4">
            <label className="form-label">อีเมล</label>
            <input type="email" id="set1-input1" className="form-control" />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">รหัสผ่าน</label>
            <input type="password" id="set1-input2" className="form-control" />
            <button
              className="btnChangpass"
              onClick={handleToggleChangePassword}
            >
              เปลี่ยนรหัสผ่าน
            </button>
          </div>
          <div className="deleteAcc">
            <h4>ลบบัญชีผู้ใช้</h4>
            <p>ลบบัญชีของคุณและข้อมูลบัญชีของคุณ</p>
            <button className="btnDeleteAcc">ลบบัญชีผู้ใช้</button>
          </div>
        </div>
      </Container>
      {showChangePassword && (
        <div className="change-password-modal">
          <h4>เปลี่ยนรหัสผ่าน</h4>
          <div>
          <input type="password" placeholder="รหัสผ่านเก่า"  />
            <input type="password" placeholder="รหัสผ่านใหม่" />
            <input type="password" placeholder="ยืนยันรหัสผ่านใหม่" />
            <div className="button-container">
              <button className="newpassmodal">ยืนยันการเปลี่ยนรหัสผ่าน</button>
              <button
                onClick={handleCancelChangePassword}
                className="confirmnewpassmodal"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
