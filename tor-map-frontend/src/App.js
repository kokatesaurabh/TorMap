import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import TrafficCapture from './pages/TrafficCapture';
import VulnerabilityScan from './pages/VulnerabilityScan';
import Reporting from './pages/Reporting';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        {isAuthenticated && <Sidebar />}
        <div className="main-content">
          {isAuthenticated && <TopBar toggleDarkMode={toggleDarkMode} />}
          <div className="content-area">
            <Routes>
              <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login handleLogin={handleLogin} />} />
              <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup handleSignup={handleSignup} />} />
              <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
              <Route path="/traffic" element={isAuthenticated ? <TrafficCapture /> : <Navigate to="/" />} />
              <Route path="/vulnerability" element={isAuthenticated ? <VulnerabilityScan /> : <Navigate to="/" />} />
              <Route path="/reporting" element={isAuthenticated ? <Reporting /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
