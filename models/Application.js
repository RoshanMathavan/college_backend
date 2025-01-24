const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  studentName: String,
  position: String,
  status: String,
  dateApplied: Date,
});

module.exports = mongoose.model('Application', applicationSchema);
