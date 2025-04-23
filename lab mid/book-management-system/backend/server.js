require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const booksRouter = require('./routes/books.js');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', booksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at:`);
    console.log(`- Local: http://localhost:${PORT}`);
   
  });