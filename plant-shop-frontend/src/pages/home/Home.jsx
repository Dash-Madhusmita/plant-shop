import "./Home.css";
import PlantA from "../../assets/PlantA.jpg";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { PlantCard } from "../../components/plant-card/PlantCard";
import Footer from "../../components/Footer/Footer";

export default function Home() {

// Example: src/data/mockPlants.js
const mockPlants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    description: "A tropical plant with iconic split leaves, perfect for bright indoor spaces.",
    image: "https://www.marthastewart.com/thmb/-5Nx4-_mbzpZFjOO81BfHtm-yqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/monstera-deliciosa-or-swiss-cheese-plant-in-a-white-flower-pot-stands-on-a-white-wood-table-1333227721-3ea9525b85474fdda7b6857a248c7c2b.jpg",
    price: 24.99,
    type: "Foliage",
    light: "Bright, indirect",
    watering: "Weekly",
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "Low-maintenance and air-purifying, great for beginners.",
    image: "https://mygreenscape.ca/cdn/shop/articles/image3_71ea6a70-45c4-4f0c-8369-4f18a10f4dd5.png?v=1732599548&width=1100",
    price: 18.5,
    type: "Succulent",
    light: "Low to bright, indirect",
    watering: "Every 2-3 weeks",
  },
  {
    id: 3,
    name: "Peace Lily",
    description: "Elegant white blooms and lush leaves, thrives in low light.",
    image: "https://havenplant.in/cdn/shop/files/qYNPupRnspGWPF4886Z7hB-Copy.jpg?v=1725372830&width=1946",
    price: 21.0,
    type: "Flowering",
    light: "Low to medium",
    watering: "Keep soil moist",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    description: "Trendy and bold, makes a statement in any room.",
    image: "https://www.whiteflowerfarm.com/mas_assets/cache/image/a/8/1/0/43024.Jpg",
    price: 34.99,
    type: "Foliage",
    light: "Bright, indirect",
    watering: "Weekly",
  },
  {
    id: 5,
    name: "Aloe Vera",
    description: "Healing succulent, easy to care for and drought-tolerant.",
    image: "https://assets.clevelandclinic.org/transform/8b7ea676-b615-4449-bd7a-bf7982335121/aloe-vera-plant-1475314230",
    price: 12.0,
    type: "Succulent",
    light: "Bright, direct",
    watering: "Every 3 weeks",
  },
  
];


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
          {mockPlants.map((plant)=>{
            return <PlantCard key={plant.id} plant={plant} />
          })}
      </div>
      </div>
      <Footer />
    </>
  );
}
