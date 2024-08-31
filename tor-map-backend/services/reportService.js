// services/reportService.js
const Report = require('../models/Report'); // Adjust path as needed

// Create a new report
const createReport = async (reportData) => {
  const newReport = new Report(reportData);
  return newReport.save();
};

// Get all reports
const getReports = async () => {
  return Report.find();
};

// Get a specific report by ID
const getReportById = async (id) => {
  return Report.findById(id);
};

module.exports = { createReport, getReports, getReportById };
