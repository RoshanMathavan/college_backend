const mongoose = require('mongoose');

const companyDatabaseSchema = new mongoose.Schema({
  companyName: String,
  contactInfo: String,
  industry: String,
});

module.exports = mongoose.model('CompanyDatabase', companyDatabaseSchema);
