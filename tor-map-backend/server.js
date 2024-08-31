const express = require('express');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const { connectDB } = require('./config/db');
const { setupSocketIO } = require('./config/socket');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

connectDB();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Import routes
const authRoutes = require('./routes/authRoutes');
const trafficRoutes = require('./routes/trafficRoutes');
const scanRoutes = require('./routes/scanRoutes');
const reportRoutes = require('./routes/reportRoutes');
const deAnonymizationRoutes = require('./routes/deAnonymizationRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/traffic', trafficRoutes);
app.use('/api/scan', scanRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/de-anonymize', deAnonymizationRoutes); // New route for de-anonymization

// Setup WebSocket
setupSocketIO(server);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
