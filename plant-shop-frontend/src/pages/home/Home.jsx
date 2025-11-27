import "./Home.css";
import { useEffect, useState } from "react";
import PlantA from "../../assets/PlantA.jpg";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { PlantCard } from "../../components/plant-card/PlantCard";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

export default function Home() {

const [plantsData, setPlantsData] = useState([]);

const getAllPlants = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/plant');
    setPlantsData(response.data);
    console.log('Plants data:', response);
  } catch (error) {
    console.error('Error fetching plants:', error);
  }
};


useEffect(() => {
  getAllPlants();
}, []);



  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="left-home">
            <h1>Bring Nature Home</h1>
            <p>
              Discover our curated collection of beautiful houseplants, pefect
              for any space and skill level.
            </p>
            <div className="home-buttons">
              <button className="explore-button">Explore Plants</button>
              <button className="learn-button">Learn More</button>
            </div>
          </div>
          <div className="right-home">
            <img src={PlantA} alt="Plant A" className="home-image" />
          </div>
        </div>
      </div>
      <div className="home-features-section">
        <h2 className="home-subtitle">Why Choose PlantShop?</h2>
        <p className="home-subdescription">
          we're committed to bringing you healthy, beautiful plant with expert
          care guidance.
        </p>
        <div className="home-features">
          <div className="feature-item">
            <div className="feature-icon">
              <Heart />
            </div>
            <h3 className="feature-title">Expert Care</h3>
            <p className="feature-description">
              Each plant comes with detailed care instructions and ongoing
              support.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <ShoppingCart />
            </div>
            <h3 className="feature-title">Fast Delivery</h3>
            <p className="feature-description">
              Safe,fast shipping to ensure your plants arrive healthy and happy.{" "}
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <Star />
            </div>
            <h3 className="feature-title">Quality Guarantee</h3>
            <p className="feature-description">
              30-day Guarantee on all plant. We're here if you need help.
            </p>
          </div>
        </div>
      </div>
      <div className="home-plant-section">
        <h2 className="home-subtitle">Featured Plants</h2>
        <div className="home-plant-list">
          {plantsData.map((plant)=>{
            return <PlantCard key={plant.id} plant={plant} />
          })}
      </div>
      </div>
      <Footer />
    </>
  );
}
