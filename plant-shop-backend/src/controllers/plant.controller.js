const plantModel = require("../models/plant.model");

const addPlant = async (req, res) => {
    try {
        const plantData = req.body;
        const newPlant = await plantModel.create(plantData);
        if (newPlant) {
            res.status(201).send(newPlant);
        } else {
            res.status(400).send({ message: "Failed to add plant" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getAllPlants = async (req, res) => {
    try {
        const plants = await plantModel.find();
        if (plants) {
            res.status(200).send(plants);
        } else {
            res.status(400).send({ message: "No plants found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }}

const getPlantById = async (req, res) => {
    try {
        const plants = await plantModel.findOne({ _id: req.params.id });
        if (plants) {
            res.status(200).send(plants);
        } else {
            res.status(400).send({ message: "No plants found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }}

module.exports = { addPlant, getAllPlants, getPlantById };
