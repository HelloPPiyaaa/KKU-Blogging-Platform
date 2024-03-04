import "../Navbar/footer.css";
import logoKKU from "../pic/logo-footer.png";
import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <img src={logoKKU} alt="blogging-logo" />

        <div className="links">
          <div className="links-column">
            <h2>ข้อมูล</h2>
            <a href="#">เกี่ยวกับเรา</a>
            <a href="#">เป็นที่นิยม</a>
            <a href="#">แท็ก</a>
            <a href="#">เกี่ยวกับเรา</a>
          </div>
          <div className="links-column">
            <h2>ช่วยเหลือ</h2>
            <a href="https://github.com/HelloPPiyaaa?tab=repositories">
              GitHub
            </a>
            <a href="#">FAQ</a>
            <a href="#">ติดต่อเรา</a>
          </div>

          <div className="links-column socials-column">
            <h2>Socials media</h2>
            <p>Follow me on socials media to... </p>
            <div className="socials">
              <a href="https://www.instagram.com/3.6.5pimpiya23/">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100025305242986">
                <AiFillFacebook />
              </a>
              <a href="https://github.com/HelloPPiyaaa?tab=repositories">
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p className="coppyright">2024 All right reserve</p>
        <div className="legal"></div>
      </div>
    </div>
  );
};

export default Footer;
