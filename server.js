const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect To Data Base 
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (request, response) => response.json({ msg: 'Welcome to the E-marketplace' }));

// Define Routes
app.use('/api/users', require('./routes/users')); // use route info from routes/users when request is /api/users
app.use('/api/products', require('./routes/products')); // use route info from routes/products when request is /api/products
app.use('/api/auth', require('./routes/auth')); // use route info from routes/auth when request is /api/auth

app.use('/uploads', express.static('uploads')); 
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));