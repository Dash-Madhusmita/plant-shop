import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./PlantDetails.css";

export function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/plant/${id}`)
      .then((res) => setPlant(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!plant) return <p className="loading">Loading...</p>;

  return (
    <div className="detail-container">
      {/* LEFT SIDE IMAGES */}
      <div className="image-section">
        <img src={plant.image} alt={plant.name} className="main-image" />
      </div>

      {/* RIGHT SIDE INFO */}
      <div className="info-section">
        <h1 className="plant-title">{plant.name}</h1>

        <div className="rating">
          ⭐ {plant.rating || 4.8} <span className="reviews">(124 reviews)</span>
        </div>

        <div className="price-box">
          <span className="price">₹{plant.price}</span>
          <span className="old-price">₹{plant.oldPrice || plant.price + 500}</span>
          <span className="discount">
            Save ₹{(plant.oldPrice || plant.price + 500) - plant.price}
          </span>
        </div>

        <div className="section">
          <h3>Description</h3>
          <p>{plant.description}</p>
        </div>

        <div className="section-flex">
          <div>
            <h3>Care Level</h3>
            <p>{plant.watering}</p>
          </div>
          <div>
            <h3>Size</h3>
            <p>{plant.size || "Medium (6–8 inches)"}</p>
          </div>
        </div>

        <div className="quantity-row">
          <span>Quantity:</span>
          <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <div className="btn-row">
          <button className="add-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
