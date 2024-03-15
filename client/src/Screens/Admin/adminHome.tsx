import "../../misc/adminHome.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logostart from "../../pic/logo-footer.png";
import { FaCircleUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { RiSpamFill } from "react-icons/ri";
import { IoIosHelpCircle } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { fetchAdminProfile } from "../../api/adminProfile";
import { LuView } from "react-icons/lu";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import dayjs from "dayjs";
import {
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  LineChart,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

const AdminHome: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [adminProfile, setAdminProfile] = useState<any>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [coverPic, setCoverPic] = useState<File | null>(null);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#FF8042", "#00C49F", "#FFBB28"];

  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const profileData = await fetchAdminProfile(id);
          setUsername(profileData.username);
          setAdminProfile(profileData);
          setEmail(profileData.email);
          setTel(profileData.tel);
          setFirstname(profileData.firstname);
          setLastname(profileData.lastname);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, [id]);
  const [selectedCate, setSelectedCate] = useState<string>("");

  const handleCategorySelection = (category: string) => {
    setSelectedCate(category);
  };

  return (
    <div className="adminhome d-flex" style={{ height: "100vh" }}>
      <div className="navAdmin" style={{ margin: "2rem" }}>
        <div className="head">
          <img
            src={logostart}
            alt=""
            style={{
              width: "200px",
              height: "auto",
              objectFit: "cover",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          />
          {adminProfile && (
            <div className="avatar-admin d-flex justify-content-center mt-5 align-items-center">
              <div className="avartar-pic">
                <FaCircleUser
                  style={{
                    color: "white",
                    width: "25px",
                    height: "25px",
                    marginRight: "8px",
                  }}
                />
              </div>
              <h4 style={{ color: "white", margin: "0" }}>
                {adminProfile.username}
              </h4>
            </div>
          )}

          <div className="allCate">
            <div className="option-cate">
              <div
                className={selectedCate === "dashboard" ? "select" : ""}
                onClick={() => handleCategorySelection("dashboard")}
              >
                <div className="categoriesAm">
                  <div className="icon-cate">
                    <FaHome />
                  </div>
                  <p>แดชบอร์ด</p>
                </div>
              </div>

              <div
                className={selectedCate === "average" ? "select" : ""}
                onClick={() => handleCategorySelection("average")}
              >
                <div className="categoriesAm">
                  <div className="icon-cate">
                    <TiDocumentText />
                  </div>
                  <p>ทั่วไป</p>
                </div>
              </div>

              <div
                className={selectedCate === "spam" ? "select" : ""}
                onClick={() => handleCategorySelection("spam")}
              >
                <div className="categoriesAm">
                  <div className="icon-cate">
                    <RiSpamFill />
                  </div>
                  <p>สแปม</p>
                </div>
              </div>

              <div
                className={selectedCate === "manage-Q" ? "select" : ""}
                onClick={() => handleCategorySelection("manage-Q")}
              >
                <div className="categoriesAm">
                  <div className="icon-cate">
                    <IoIosHelpCircle />
                  </div>
                  <p>จัดการคำถาม</p>
                </div>
              </div>

              <div
                className={selectedCate === "manage-User" ? "select" : ""}
                onClick={() => handleCategorySelection("manage-User")}
              >
                <div className="categoriesAm">
                  <div className="icon-cate">
                    <MdManageAccounts />
                  </div>
                  <p>จัดการบัญชีผู้ใช้</p>
                </div>
              </div>

              <div className="log-out d-flex justify-content-center align-items-center">
                <FiLogOut
                  style={{
                    color: "white",
                    paddingRight: "5px",
                    width: "25px",
                    height: "25px",
                  }}
                />
                <a href="/admin" className="link-light">
                  ออกจากระบบ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedCate === "dashboard" && (
        <div
          className="dashboard-detail"
          style={{ width: "100%", overflowY: "auto" }}
        >
          <p className="fw-bold fs-2">แดชบอร์ด</p>
          <div className="dash-categories d-flex">
            <div className="dash-op" style={{ height: "350px" }}>
              <div className="user-all w-100">
                <PieChart width={200} height={130}>
                  <Pie
                    data={data}
                    cx={110}
                    cy={70}
                    innerRadius={30}
                    outerRadius={50}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
                <div className="user-all-icon rounded-circle ">
                  <PiUsersThreeFill />
                </div>
              </div>
              <div className="detail ms-3">
                <p className="p1 m-0">ผู้ใช้ทั้งหมด</p>
                <p className="p2 m-0 fs-3" style={{ color: "#928590" }}>
                  36
                </p>
                <p className="p3 m-0">คน</p>
              </div>
            </div>
            <div className="dash-op">
              <div className="view-all w-100">
                <div className="view-all-icon rounded-circle ">
                  <LuView />
                </div>
              </div>
              <div className="detail ms-3">
                <p className="p1 m-0">ยอดเข้าชมเว็บไซต์</p>
                <p className="p2 m-0 fs-3" style={{ color: "#928590" }}>
                  102
                </p>
                <p className="p3 m-0">ครั้ง</p>
              </div>
            </div>
            <div className="dash-op">
              <div className="blog-all w-100">
                <div className="blog-all-icon rounded-circle ">
                  <IoDocumentTextOutline />
                </div>
              </div>
              <div className="detail ms-3">
                <p className="p1 m-0">การโพสต์บล็อก</p>
                <p className="p2 m-0 fs-3" style={{ color: "#928590" }}>
                  32
                </p>
                <p className="p3 m-0">ครั้ง</p>
              </div>
            </div>
          </div>
          <div className="Activity">
            <div className="act-detail ">
              <p className="fw-bold" style={{ color: "#433e49" }}>
                กิจกรรมของผู้ใช้
              </p>
              <LineChart width={500} height={300} data={data1}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
