import React from 'react';
import './BookDetails.css';

const BookDetails = ({ book, handleBackClick }) => {
  return (
    <div className="book-details">
      <button onClick={handleBackClick} className="back-button">Back</button>
      <div className="book-details-content">
        <div className="book-details-image">
          {book.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              alt={book.title}
              className="book-details-cover"
            />
          ) : (
            <div className="no-image">No Image Available</div>
          )}
        </div>
        <div className="book-details-info">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
          <p><strong>First Published:</strong> {book.first_publish_year}</p>
          <p><strong>Publisher:</strong> {book.publisher ? book.publisher.join(', ') : 'Unknown Publisher'}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
