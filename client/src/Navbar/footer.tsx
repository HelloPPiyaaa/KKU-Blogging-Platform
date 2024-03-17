import "../Navbar/footer.css";
import logoKKU from "../pic/logowhite.png";
import { FaFacebookSquare, FaInstagramSquare, FaLine } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
        <div className="footer-col">
            <h4>KKU Blogging Platform</h4>
            <ul>
                <li><a href="/home">หน้าหลัก</a></li>
                <li><a href="/">เป็นที่นิยม</a></li>
                <li><a href="/category">หมวดหมู่</a></li>
                <li><a href="/">เกี่ยวกับเรา</a></li>
            </ul>
        </div>
        <div className="footer-col">
            <h4>network</h4>
            <ul>
                <li><a href="#">technology</a></li>
                <li><a href="#">science</a></li>
                <li><a href="#">business</a></li>
                <li><a href="#">professional</a></li>
                <li><a href="#">API</a></li>
            </ul>
        </div>
        <div className="footer-col">
            <h4>company</h4>
            <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">legal</a></li>
                <li><a href="#">contact us</a></li>
            </ul>
        </div>
        <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><FaFacebookSquare /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaLine /></a>
              <a href="#"><MdEmail /></a>
            </div>
          </div>
    </footer>
  );
};

export default Footer;
