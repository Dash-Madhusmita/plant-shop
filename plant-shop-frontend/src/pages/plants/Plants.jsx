import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PlantCard } from "../../components/plant-card/PlantCard";
import "./plants.css";
export default function Plants() {

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
    <div>
      <div className="home-plant-section">
        <h2 className="home-subtitle">Our Plants</h2>
        <p className="home-subdescription">Discover beautiful plants perfect for your home and office.</p>
        <div className="plant-filters">
          <button className="filter-button">All Categories</button>
          <button className="filter-button">feature</button>
        </div>
        <div className="home-plant-list">
          {plantsData.map((plant) => {
            return <PlantCard key={plant.id} plant={plant} />;
          })}
        </div>
      </div>
    </div>
  );
}
