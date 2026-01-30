const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://Muhammad_Sheharyar:jYINJw2lK77YFKJi@cluster0.gqwbzi9.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", require("./route/authRoute"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
