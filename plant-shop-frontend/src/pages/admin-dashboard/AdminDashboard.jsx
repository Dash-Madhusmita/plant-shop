import "./AdminDashboard.css";
import { useState } from "react";
import axios from "axios";


export default function AdminDashboard({setUserLoggedIn}) {
  const [formValues, setFormValues] = useState({
  name:"",
  description:"",
  image:"",
  price:"",
  type: "",
  light: "",
  watering: "",
  stock: 0,
  });

  const createPlant = async (e) => {
    e.preventDefault();
    try {
      console.log(formValues, "formValues");
      const response = await axios.post(
        "http://localhost:3001/api/plant",
        formValues
      );

      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  return (
    <div className="signup-box">
      <div className="signup-form-container">
        <h2>Create New Plants</h2>
        <form className="signup-form" onSubmit={createPlant}>
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
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="description"
            id="description"
            name="description"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            placeholder="image"
            id="image"
            name="image"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="price"
            id="price"
            name="price"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="type">Type</label>
          <input
            type="text"
            placeholder="type"
            id="type"
            name="type"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="light">Light</label>
          <input
            type="text"
            placeholder="light"
            id="light"
            name="light"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="watering">Watering</label>
          <input
            type="text"
            placeholder="watering"
            id="watering"
            name="watering"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            placeholder="stock"
            id="stock"
            name="stock"
            required
            onChange={(e) => {
              setFormValues({ ...formValues, [e.target.name]: e.target.value });
            }}
          />

          <br />
          <button type="submit">
            Create New Plant
          </button>
        </form>
      </div>
    </div>
  );
}
