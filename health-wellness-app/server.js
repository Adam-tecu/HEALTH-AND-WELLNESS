const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const womensHealthRoutes = require('./routes/womensHealthRoutes');
const symptomRoutes = require('./routes/symptomRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const encryptionMiddleware = require('./middlewares/encryptionMiddleware');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(encryptionMiddleware);

// Routes
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/womens-health', authMiddleware, womensHealthRoutes);
app.use('/api/symptoms', authMiddleware, symptomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));