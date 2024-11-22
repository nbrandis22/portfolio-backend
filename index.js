const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

const uri = process.env.MONGO_URI;

console.log("mongo uri", uri);

// MongoDB Atlas connection
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a schema for the movies collection
const pagesSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  content: { type: String, required: true },
});

// Create a model for the pages collection
const Pages = mongoose.model("Pages", pagesSchema);

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/about", async (req, res) => {
  try {
    const page = await Pages.findOne({ title: "about" });
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ message: "Page not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error querying about page", error });
  }
}); 

// Export the Express API
module.exports = app;
