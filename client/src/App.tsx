import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./Screens/startpage";
import LoginPage from "./Screens/login";
import RegistPage from "./Screens/register";
import TestPage from "./Screens/test";
import HomePage from "./Screens/home";
import Navbar from "./Navbar/Navbar1";
import Profile from "./Screens/profile";
import EditProfile from "./Screens/edit-profille";
import StartAdmin from "./Screens/Admin/startAdmin";
import RegisterAdmin from "./Screens/Admin/adminRegister";
import Writepost from "./Screens/post";
import Content from "./Screens/Content";
import LoginAdmin from "./Screens/Admin/adminLogin";
import AdminHome from "./Screens/Admin/adminHome";
import Feeds from "./Screens/Feeds";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/edit-profile/:id" element={<EditProfile />} />
        <Route path="/writepost" element={<Writepost />} />
        <Route path="/content/:id" element={<Content />} />
        <Route path="/feeds" element={<Feeds />} />

        <Route path="/admin" element={<StartAdmin />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin/:id" element={<AdminHome />} />
      </Routes>
    </Router>
  );
}

export default App;
