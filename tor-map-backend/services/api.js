// src/services/api.js

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
  
  // Function to generate a new report
  export const generateReport = async () => {
    try {
      await api.post('/report/generate');
    } catch (error) {
      console.error('Error generating report:', error);
      throw error;
    }
  };
  
  // Function to get a list of reports
  export const getReports = async () => {
    try {
      const response = await api.get('/reports');
      return response.data;
    } catch (error) {
      console.error('Error fetching reports:', error);
      throw error;
    }
  };
  
  // Function to start a vulnerability scan
  export const scanForVulnerabilities = async () => {
    try {
      await api.post('/scan/start');
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
  