import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./Screens/startpage";
import LoginPage from "./Screens/login";
import RegistPage from "./Screens/register";
import TestPage from "./Screens/test";
import HomePage from "./Screens/home";
import Navbar from "./Navbar/Navbar1";
import Profile from "./Screens/profile";
import WritePost from "./Screens/post";
import EditProfile from "./Screens/edit-profille";

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
        <Route path="/writepost" element={<WritePost />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/edit-profile/:id" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
