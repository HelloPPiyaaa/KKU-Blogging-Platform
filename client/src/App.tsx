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

        <Route path="/admin" element={<StartAdmin />} />
        <Route path="/admin/register" element={<RegisterAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
