import "./SignUp.css";
import { useState } from "react";
import axios from "axios";

export default function SignUp({setUserLoggedIn}) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      console.log(formValues, "formValues");
      const response = await axios.post(
        "http://localhost:3001/api/user",
        formValues
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data));
        setUserLoggedIn(true);
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  return (
    <div className="signup-box">
      <div className="signup-form-container">
        <h2>Create an Account</h2>
        <p>Join PlantShop today and start your green journey!</p>
        <form className="signup-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />
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
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirm_password"
            name="confirm_password"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />

          <br />
          <button type="submit" onClick={registerUser}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
