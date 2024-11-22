const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

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

// Home page
app.get("/home", async (req, res) => {
  try {
    const page = await Pages.findOne({ title: "home" });
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ message: "Page not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error querying home page", error });
  }
});

// Engineering page
app.get("/engineering", async (req, res) => {
  try {
    const page = await Pages.findOne({ title: "engineering" });
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ message: "Page not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error querying engineering page", error });
  }
});

// DAV page
app.get("/dav", async (req, res) => {
  try {
    const page = await Pages.findOne({ title: "dav" });
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ message: "Page not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error querying dav page", error });
  }
});

// FRED page
app.get("/fred", async (req, res) => {
  try {
    const page = await Pages.findOne({ title: "fred" });
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ message: "Page not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error querying fred page", error });
  }
});

// Quill page
app.get("/quill", async (req, res) => {
  try {
    const page = await Pages.findOne({ title: "quill" });
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ message: "Page not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error querying quill page", error });
  }
});

// Allegro page
app.get("/allegro", async (req, res) => {
  try {
    const page = await Pages.findOne({ title: "allegro" });
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ message: "Page not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error querying allegro page", error });
  }
});

// Music page
app.get("/music", async (req, res) => {
  try {
    const page = await Pages.findOne({ title: "music" });
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ message: "Page not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error querying music page", error });
  }
});

// Adventures page
app.get("/adventures", async (req, res) => {
  try {
    const page = await Pages.findOne({ title: "adventures" });
    if (page) {
      res.json(page);
    } else {
      res.status(404).json({ message: "Page not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error querying adventures page", error });
  }
});

// About page
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
