const mongoose = require('mongoose');

const academicRecordSchema = new mongoose.Schema({
  studentName: String,
  course: String,
  grade: String,
});

module.exports = mongoose.model('AcademicRecord', academicRecordSchema);
