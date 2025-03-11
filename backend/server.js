const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Bus = require("./models/bus"); // Ensure this file exists

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/bus_scheduler", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Routes
app.get("/", (req, res) => {
    res.send("Bus Scheduler API is running...");
});

// Create a new bus schedule
app.post("/addBus", async (req, res) => {
    const { busNumber, route, startTime, endTime } = req.body;
    const newBus = new Bus({ busNumber, route, startTime, endTime });
    await newBus.save();
    res.json({ message: "Bus added successfully!" });
});

// Fetch all bus schedules
app.get("/getBuses", async (req, res) => {
    const buses = await Bus.find();
    res.json(buses);
});

// Dummy Data for Testing
let buses = [
  { id: 1, route: "Delhi - Mumbai", time: "10:00 AM" },
  { id: 2, route: "Chennai - Kolkata", time: "1:00 PM" },
];

// Get all buses
app.get("/buses", (req, res) => {
    res.json(buses);
});

// Add a new bus
app.post("/buses", (req, res) => {
    const { route, time } = req.body;
    const newBus = { id: buses.length + 1, route, time };
    buses.push(newBus);
    res.status(201).json(newBus);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
