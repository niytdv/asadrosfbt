const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    busNumber: String,
    route: [String], // Array of stops
    startTime: String,
    endTime: String
});

module.exports = mongoose.model("Bus", busSchema);
