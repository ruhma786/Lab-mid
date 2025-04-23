const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchBooksByAuthor = async (req, res) => {
  try {
    const books = await Book.find({
      author: { $regex: req.query.author, $options: 'i' }
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    price: req.body.price
  });

  try {
    const newBook = await book.save();
    res.status(201).json({ 
      success: true,
      message: "Book successfully added",
      bookId: newBook._id // Optional: include the book ID if needed
    });
  } catch (err) {
    res.status(400).json({ 
      success: false,
      message: err.message 
    });
  }
};