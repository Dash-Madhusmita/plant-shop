import React from "react";
import "./PlantCard.css";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PlantCard = ({ plant }) => {
    const navigate = useNavigate();

  const viewDetails = (product) => {
    navigate(`/plants/${product._id}`);
  };

  return (
    <div className="plant-card">
      <div className="plant-image-container">
        <img src={plant.image} alt={plant.name} className="plant-image" />
        <div className="favorite-icon">
          <Heart />
        </div>
        <div className="plant-badge">Sale</div>
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <p className="plant-watering">watering: {plant.watering}</p>
    
        <span className="plant-price">${plant.price}</span>
      </div>
      <div className="plant-card-actions">
        <button className="view-details-button" onClick={()=>{viewDetails(plant)}}>View Details</button>
                <button className="add-to-cart-button">Add to Cart</button>

      </div>
    </div>
  );
};
