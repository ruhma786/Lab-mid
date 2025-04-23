const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// Get all books
router.get('/', booksController.getAllBooks);

// Search books by author
router.get('/search', booksController.searchBooksByAuthor);

// Add a new book
router.post('/', booksController.addBook);

module.exports = router;