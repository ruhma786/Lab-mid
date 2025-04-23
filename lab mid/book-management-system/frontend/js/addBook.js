document.addEventListener('DOMContentLoaded', function() {
  const addBookForm = document.getElementById('addBookForm');
  
  addBookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = parseFloat(document.getElementById('price').value);
    
    const bookData = {
      title,
      author,
      price
    };

    fetch('http://localhost:5000/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        alert(data.message || 'Book added successfully!');
        window.location.href = 'index.html';
      } else {
        throw new Error(data.message || 'Failed to add book');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error.message || 'Error adding book');
    });
  });
});