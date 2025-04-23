document.addEventListener('DOMContentLoaded', function() {
    const booksTable = document.getElementById('booksTable');
    const searchInput = document.getElementById('searchInput');
    
    // Load all books on page load
    fetchBooks();
    
    // Search functionality
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.trim();
      if (searchTerm.length > 0) {
        searchBooks(searchTerm);
      } else {
        fetchBooks();
      }
    });
    
    // Fetch all books
    function fetchBooks() {
      fetch('http://localhost:5000/api/books')
        .then(response => response.json())
        .then(books => {
          renderBooks(books);
        })
        .catch(error => console.error('Error:', error));
    }
    
    // Search books by author
    function searchBooks(author) {
      fetch(`http://localhost:5000/api/books/search?author=${encodeURIComponent(author)}`)
        .then(response => response.json())
        .then(books => {
          renderBooks(books);
        })
        .catch(error => console.error('Error:', error));
    }
    
    // Render books to the table
    function renderBooks(books) {
      booksTable.innerHTML = '';
      books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>$${book.price.toFixed(2)}</td>
        `;
        booksTable.appendChild(row);
      });
    }
  });