import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Reporting = ({ onionSite }) => {
  const [reports, setReports] = useState(null);

  const fetchReports = () => {
    fetch(`/api/get-reports?url=${encodeURIComponent(onionSite)}`)
      .then(response => response.json())
      .then(data => setReports(data));
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={fetchReports}>
        Load Reports
      </Button>
      <Box>
        {reports ? <pre>{JSON.stringify(reports, null, 2)}</pre> : 'No reports'}
      </Box>
    </Box>
  );
};

export default Reporting;
