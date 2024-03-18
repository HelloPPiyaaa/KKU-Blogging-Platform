import "../Navbar/footer.css";
import logoKKU from "../pic/logowhite.png";
import { FaFacebookSquare, FaInstagramSquare, FaLine } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <a href="/">
          <img
            src={logoKKU}
            alt="Logo KKU"
            style={{ width: "250px", height: "auto" }}
          />
        </a>
        <ul>
          <li>
            <a href="/home">หน้าหลัก</a>
          </li>
          <li>
            <a href="/popular">เป็นที่นิยม</a>
          </li>
          <li>
            <a href="/category">หมวดหมู่</a>
          </li>
          <li>
            <a href="/aboutus">เกี่ยวกับเรา</a>
          </li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>เมนู</h4>
        <ul>
          <li>
            <a href="#">โปรไฟล์</a>
          </li>
          <li>
            <a href="/setting1">ตั้งค่า</a>
          </li>
          <li>
            <a href="#">สถิติ</a>
          </li>
          <li>
            <a href="/test">ช่วยเหลือ</a>
          </li>
          <li>
            <a href="#">ออกจากระบบ</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>ติดต่อเรา</h4>
        <div className="social-links">
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <FaInstagramSquare />
          </a>
          <a href="#">
            <FaLine />
          </a>
          <a href="#">
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
