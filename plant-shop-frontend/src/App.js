import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar.component.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Plants from "./pages/plants/Plants.jsx";
import CareTips from "./pages/care-tips/CareTips.jsx";
import About from "./pages/about/About.jsx";
import Home from "./pages/home/Home.jsx";
import { useEffect, useState } from "react";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard.jsx";
import { PlantDetails } from "./pages/plant-details/PlantDetails.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setIsLoggedIn(true);
      setUserInfo(JSON.parse(userInfo));
    } else {
      setIsLoggedIn(false);
    }
  }, [userLoggedIn]);
  // const userInfo = localStorage.getItem("userInfo");
  // console.log("userInfo from localStorage:", userInfo);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} userInfo={userInfo} />
      <Routes>
        {!isLoggedIn && (
          <Route
            path="/login"
            element={<Login setUserLoggedIn={setUserLoggedIn} />}
          />
        )}
        {!isLoggedIn && (
          <Route
            path="/signup"
            element={<SignUp setUserLoggedIn={setUserLoggedIn} />}
          />
        )}
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:id" element={<PlantDetails />} />
        <Route path="/caretips" element={<CareTips />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
