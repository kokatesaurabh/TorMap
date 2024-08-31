// src/services/api.js
import axios from 'axios';

// Create an Axios instance for API requests
const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your actual backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to start a vulnerability scan
export const scanForVulnerabilities = async () => {
  try {
    const response = await api.post('/scan/start');
    return response.data;
  } catch (error) {
    console.error('Error starting vulnerability scan:', error);
    throw error;
  }
};

// Function to get scan results
export const getScanResults = async () => {
  try {
    const response = await api.get('/scan/results');
    return response.data;
  } catch (error) {
    console.error('Error fetching scan results:', error);
    throw error;
  }
};

// Function to get dashboard data
export const getDashboardData = async () => {
  try {
    const response = await api.get('/dashboard');
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};

// Function to get traffic data
export const getTrafficData = async () => {
  try {
    const response = await api.get('/traffic');
    return response.data;
  } catch (error) {
    console.error('Error fetching traffic data:', error);
    throw error;
  }
};

// Function to start traffic capture
export const startCapture = async () => {
  try {
    const response = await api.post('/traffic/start');
    return response.data;
  } catch (error) {
    console.error('Error starting traffic capture:', error);
    throw error;
  }
};

// Function to get capture data
export const getCaptureData = async () => {
  try {
    const response = await api.get('/traffic/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching capture data:', error);
    throw error;
  }
};

// Function to generate a report
export const generateReport = async (reportData) => {
  try {
    const response = await api.post('/reports/generate', reportData);
    return response.data;
  } catch (error) {
    console.error('Error generating report:', error);
    throw error;
  }
};

// Function to get reports
export const getReports = async () => {
  try {
    const response = await api.get('/reports');
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (username, password) => {
  try {
    const response = await api.post('/login', { username, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Function to register a new user
export const registerUser = async (username, password) => {
  try {
    const response = await api.post('/register', { username, password });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
