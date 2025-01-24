const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  candidateName: String,
  companyName: String,
  interviewDate: Date,
  status: String,
});

module.exports = mongoose.model('Interview', interviewSchema);
