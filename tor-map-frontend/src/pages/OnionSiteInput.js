import React, { useState } from 'react';
import { Button, TextField, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const OnionSiteInput = ({ onSubmit }) => {
  const [onionUrl, setOnionUrl] = useState('');
  const [scanMethod, setScanMethod] = useState('automated');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(onionUrl, scanMethod);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: 2 }}>
      <Typography variant="h5">Enter .onion Site</Typography>
      <TextField
        fullWidth
        label="Enter .onion URL"
        variant="outlined"
        value={onionUrl}
        onChange={(e) => setOnionUrl(e.target.value)}
        required
        sx={{ marginBottom: 2 }}
      />
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
        <InputLabel>Scan Method</InputLabel>
        <Select
          value={scanMethod}
          onChange={(e) => setScanMethod(e.target.value)}
          label="Scan Method"
        >
          <MenuItem value="automated">Automated Scan</MenuItem>
          <MenuItem value="manual">Manual Exploration</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default OnionSiteInput;
