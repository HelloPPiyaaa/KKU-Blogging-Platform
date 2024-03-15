import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../misc/setting1.css";
import Navbar2 from "../Navbar/Navbar1";
import { changePassword, deleteUserProfile } from "../api/profile";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Screens/sidebar";

const user = JSON.parse(localStorage.getItem("user") as string);

function Setting() {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const handleChangePassword = async () => {
    if (password1 !== password2) {
      console.error("password is mismatch");
      return;
    }
    try {
      await changePassword({ _id: user._id, password: password1 });
      navigate(`/home`);
    } catch (error) {
      //
    }
  };

  const handleDeleteAccount = async () => {
    console.log("delete");
    try {
      await deleteUserProfile(user._id);
      navigate(`/home`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <Navbar2 />
        <Sidebar />
      </div>

      <Container className="contain-setting">
        <div className="manageAcc">
          <h4>จัดการบัญชีผู้ใช้</h4>
          <div className="form-outline mb-4">
            <label className="form-label">อีเมล</label>
            <input
              type="email"
              id="set1-input1"
              className="form-control"
              value={user.email}
              disabled
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">รหัสผ่าน</label>
            <input
              type="password"
              id="password1"
              className="form-control"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              style={{ width: '350px' }}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label">ยืนยันรหัสผ่าน</label>
            <input
              type="password"
              id="password2"
              className="form-control"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              style={{ width: '350px' }}
            />
          </div>
          <button className="btnDeleteAcc" onClick={handleChangePassword}>
            เปลี่ยนรหัสผ่าน
          </button>

          <div className="deleteAcc">
            <h4>ลบบัญชีผู้ใช้</h4>
            <p>ลบบัญชีของคุณและข้อมูลบัญชีของคุณ</p>
            <button className="btnDeleteAcc" onClick={handleDeleteAccount}>
              ลบบัญชีผู้ใช้
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Setting;
