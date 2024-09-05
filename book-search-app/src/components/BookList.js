import React from 'react';
import './BookList.css';

const BookList = ({ books, onBookClick }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => {
          const coverUrl = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : null;

          return (
            <div key={book.key} className="book-block" onClick={() => onBookClick(book)}>
              {coverUrl ? (
                <img src={coverUrl} alt={book.title} className="book-cover" />
              ) : (
                <div className="no-image">No Image Available</div>
              )}
              <h3>{book.title}</h3>
              <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            </div>
          );
        })
      ) : (
        <p className='no-book'>No Book Found<div className="not_found_img"></div></p>
        
      )}
    </div>
  );
};

export default BookList;
