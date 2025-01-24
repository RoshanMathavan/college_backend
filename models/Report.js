const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: String,
  content: String,
  dateGenerated: Date,
});

module.exports = mongoose.model('Report', reportSchema);
