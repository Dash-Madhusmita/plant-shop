const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./src/routes/user.route");
const plantRoutes = require("./src/routes/plant.route");
const app = express();

require("dotenv").config({ path: "./.env" });

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_STRING)
  .then(() => console.log("mongodb running and connected"))
  .catch((err) => console.log(err));

app.use("/api", userRoutes);
app.use("/api", plantRoutes);

app.listen(3001, () => {
  console.log("Plant Shop Backend is running on port 3001");
});
