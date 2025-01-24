const mongoose = require('mongoose');

const placementDriveSchema = new mongoose.Schema({
  companyName: String,
  date: Date,
  location: String,
});

module.exports = mongoose.model('PlacementDrive', placementDriveSchema);
