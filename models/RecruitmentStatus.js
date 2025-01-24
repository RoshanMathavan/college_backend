const mongoose = require('mongoose');

const recruitmentStatusSchema = new mongoose.Schema({
  studentName: String,
  companyName: String,
  status: String,
});

module.exports = mongoose.model('RecruitmentStatus', recruitmentStatusSchema);
