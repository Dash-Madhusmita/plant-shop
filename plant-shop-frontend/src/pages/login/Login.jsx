import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({setUserLoggedIn}) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      console.log(formValues, "formValues");
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        formValues
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data));
        setUserLoggedIn(true);
      console.log("User login successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  return (
    <div className="signup-box">
      <div className="signup-form-container">
        <h2>Welcome Back</h2>
        <p>Sign in to your account</p>
        <form className="signup-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />

          <br />
          <button type="submit" onClick={loginUser}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
