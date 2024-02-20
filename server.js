const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 5000;

app.use(cors());
app.use(express.json());
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Create a MongoDB schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNo: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// API endpoint to handle form data submission
app.post("/api/contact", async (req, res) => {
  const { name, email, contactNo, message } = req.body;

  // Save the form data to the database
  const contact = new Contact({ name, email, contactNo, message });
  try {
    await contact.save();
    res.json({ message: "Data saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while saving the data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
