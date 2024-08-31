import React from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
      <h1>TorMap Dashboard</h1>
      <div className="topbar-controls">
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <IconButton>
          <AccountCircle />
        </IconButton>
      </div>
    </div>
  );
}

export default TopBar;
