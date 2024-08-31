import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrafficIcon from '@mui/icons-material/Traffic';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Example alternative
import ReportIcon from '@mui/icons-material/Report';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>TorMap</h2>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/traffic">
          <ListItemIcon><TrafficIcon /></ListItemIcon>
          <ListItemText primary="Traffic Capture" />
        </ListItem>
        <ListItem button component={Link} to="/vulnerability">
          <ListItemIcon><VisibilityIcon /></ListItemIcon> {/* Updated icon */}
          <ListItemText primary="Vulnerability Scan" />
        </ListItem>
        <ListItem button component={Link} to="/reporting">
          <ListItemIcon><ReportIcon /></ListItemIcon>
          <ListItemText primary="Reporting" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
