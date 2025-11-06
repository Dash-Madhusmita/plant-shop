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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/caretips" element={<CareTips />} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
