const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const adminRoutes = require('./routes/admin');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.log('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/auth',  authRoutes);
app.use('/api/projects',  projectRoutes);
app.use('/api/contact',  contactRoutes);
app.use('/api/admin',  adminRoutes);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ message: '🚀 Server is running successfully!' });
});

app.listen(PORT || 5000, () => {
  console.log(`Server running on port ${PORT}`);
});
