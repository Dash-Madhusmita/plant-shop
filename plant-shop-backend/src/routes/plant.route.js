const express = require("express");
const { addPlant, getAllPlants, getPlantById } = require("../controllers/plant.controller");
const router = express.Router();

router.get("/plant", getAllPlants);
router.get("/plant/:id", getPlantById);
router.post("/plant", addPlant);

module.exports = router;
