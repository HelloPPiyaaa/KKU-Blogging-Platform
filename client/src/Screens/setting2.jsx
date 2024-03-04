import { Container } from "react-bootstrap";
import "../misc/";
import Navbar1 from "../Navbar/Navbar";
// import { IoNotifications } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { FaCommentAlt } from "react-icons/fa";

function Setting2() {
  return (
    <div>
      <div>
        <Navbar1 />
      </div>

      <header className="header" role="banner">
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li id="sidebarSet">
                <a href="#">จัดการบัญชีผู้ใช้</a>
              </li>
              <li id="sidebarSet">
                <a href="#">การแจ้งเตือน</a>
              </li>
              <li id="sidebarSet">
                <a href="#">ความปลอดภัยและการเข้าสู่ระบบ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Container className="contain-setting">
        <div className="manageAcc">
          <h4>จัดการบัญชีผู้ใช้</h4>
          <div className="noti-set">
            <div className="setNiti">
              <p id="qthelp1">
                {/* <IoNotifications /> */}
                การแจ้งเตือน{" "}
                <label class="switch1">
                  <input type="checkbox" /> <div></div>
                </label>
              </p>
            </div>
            <div>
              <p id="qthelp2">
                {/* <MdEmail /> */}
                การแจ้งเตือนผ่านอีเมล
                <label class="switch2">
                  <input type="checkbox" /> <div></div>
                </label>{" "}
              </p>
            </div>
            <div>
              <p id="qthelp3">
                {/* <FaCommentAlt /> */}
                การแสดงความคิดเห็นแบบ Moderate{" "}
                <label class="switch4">
                  <input type="checkbox" /> <div></div>
                </label>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Setting2;
