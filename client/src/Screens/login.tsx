import { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import "../misc/login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import FacebookLogin, {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse,
} from "react-facebook-login";
import { loginUser } from "../api/login";
import { registerUser } from "../api/register";
import { Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav id="navbar2">
      <div className="head1">
        <h1>K K U</h1>
        <h2>BLOGGING PLATFORM</h2>
      </div>
      <div className="linka">
        <Link to="/login">เข้าสู่ระบบ</Link>
        <a href="/register">สมัครใช้งาน</a>
      </div>
      <label
        htmlFor="burger-checkbox"
        className="burger-menu"
        onClick={toggleMenu}
      >
        <div className="burger-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <input
          type="checkbox"
          id="burger-checkbox"
          className="burger-checkbox"
        />
        <div className={`menu-links ${isActive ? "active" : ""}`}>
          <Link to="login">เข้าสู่ระบบ</Link>
          <a href="/register">สมัครใช้งาน</a>
        </div>
      </label>
    </nav>
  );
}

const Login: React.FC = () => {
  const [tel] = useState("");
  const [firstname] = useState("");
  const [lastname] = useState("");
  const [date_of_birth] = useState("");
  const [gender] = useState("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [facebookData, setFacebookData] =
    useState<ReactFacebookLoginInfo | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAlertClose = () => {
    setAlertMessage(null);
  };

  const displayAlert = (message: string) => {
    setAlertMessage(message);
  };

  const responseGoogle = async (response: any) => {
    try {
      const googleAuth = gapi.auth2.getAuthInstance();
      const googleUser = await googleAuth.signIn();

      if (googleUser && googleUser.getBasicProfile()) {
        const profile = googleUser.getBasicProfile();

        const user = {
          username: profile.getName(),
          email: profile.getEmail(),
          password: profile.getId(), // ใช้ Google ID เป็น password ชั่วคราว
          tel,
          firstname,
          lastname,
          gender,
          date_of_birth,
        };

        const registerResponse = await registerUser(user);
        console.log(registerResponse);

        displayAlert("ลงทะเบียนสำเร็จ!");
      } else {
        console.error("Google registration failed: Invalid response", response);
        displayAlert("ลงทะเบียนผ่าน Google ไม่สำเร็จ");
      }
    } catch (error) {
      console.error("Google registration failed:", error);
      displayAlert("ลงทะเบียนผ่าน Google ไม่สำเร็จ");
    }
  };

  const responseFacebook = async (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse
  ) => {
    try {
      if ("name" in response) {
        const { name, email, id } = response;

        const user = {
          username: name || "",
          email: email || "",
          password: id || "",
          tel,
          firstname,
          lastname,
          gender,
          date_of_birth,
        };

        const registerResponse = await registerUser(user);
        console.log(registerResponse);

        displayAlert("เข้าสู่ระบบ!");
      } else {
        console.error("Facebook registration failed:", response);
        displayAlert("เข้าสู่ระบบผ่าน Facebook ไม่สำเร็จ");
      }
    } catch (error) {
      console.error("Error during Facebook registration:", error);
      displayAlert("มีข้อผิดพลาดในระหว่างการเข้าสู่ระบบผ่าน Facebook");
    }
  };

  useEffect(() => {
    if (facebookData) {
      const { name, email, id } = facebookData;
      const user = {
        username: name || "",
        email: email || "",
        password: id || "",
        tel,
        firstname,
        lastname,
        gender,
        date_of_birth,
      };
      registerUser(user)
        .then((registerResponse) => {
          console.log(registerResponse);
          displayAlert("เข้าสู่ระบบสำเร็จ!");
        })
        .catch((error) => {
          console.error("Registration failed:", error);
          displayAlert("คุณมีบัญชีอยู่แล้ว โปรดเข้าสู่ระบบ");
        });
    }
  }, [
    facebookData,
    tel,
    firstname,
    lastname,
    gender,
    date_of_birth,
    setFacebookData,
  ]);

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const loginResponse = await loginUser(email, password);

      if (loginResponse.success) {
        displayAlert("เข้าสู่ระบบสำเร็จ!");
        window.location.href = "/home";
      } else {
        displayAlert("Invalid email or password.");
      }
    } catch (error) {
      console.error("มีปัญหาในการเข้าสู่ระบบ:", error);
      displayAlert("โปรดลองอีกครั้ง");
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="login-content">
        <div className="user-details">
          <Image
            src="https://atozenlife.com/wp-content/uploads/2021/02/minimalist-apartment-ideas-1.jpg"
            alt="Apartment"
            fluid
          />
        </div>
        <div className="login-form">
          <Form>
            <div className="form-fields">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{
                    maxWidth: "280px",
                    padding: "0.8em 1.2em",
                    borderRadius: "15px",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{
                    maxWidth: "280px",
                    padding: "0.8em 1.2em",
                    borderRadius: "15px",
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                className="submit-button"
                type="submit"
                style={{
                  backgroundColor: "#433E49",
                  borderRadius: "15px",
                  padding: "0.8em 1.2em",
                }}
                onClick={handleLogin}
              >
                Submit
              </Button>
            </div>
          </Form>

          <div className="or2">
            <div className="line1"></div>
            <p className="lineor1">or</p>
            <div className="line1"></div>
          </div>

          <Row>
            <Col>
              <FacebookLogin
                appId="1049007683071855"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="facebook-login"
                textButton="สมัครใช้งานโดยบัญชี Facebook"
                icon={<BiLogoFacebookSquare className="facebook-icon" />}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <GoogleLogin
                clientId="482979769066-iih3sviotimp52c5e7se1maifspaot0g.apps.googleusercontent.com"
                buttonText="สมัครใช้งานโดยบัญชี Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
                className="google-bt "
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="google-bt"
                  >
                    <FcGoogle className="google-icon" />
                    เข้าสู่ระบบผ่านบัญชี Google
                  </button>
                )}
              />
            </Col>
          </Row>
        </div>
      </div>
      {alertMessage && (
        <div className="alert-overlay">
          <div className="alertbox">
            {alertMessage.includes("สำเร็จ") ? (
              <FaCheckCircle style={{ color: "#28a745", fontSize: "32px" }} />
            ) : (
              <IoCloseCircle style={{ color: "#dc3545", fontSize: "32px" }} />
            )}
            <p>{alertMessage}</p>
            <button className="btnClose" onClick={handleAlertClose}>
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
