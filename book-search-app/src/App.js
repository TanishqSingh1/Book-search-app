import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails'; // New component for book details
import Loader from './components/Loader'; // Import Loader

const App = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null); // Track selected book

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://book-search-app-backend.onrender.com/books?q=${query}`);
      setBooks(response.data.docs || []);
    } catch (error) {
      setError('Failed to fetch books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleBackClick = () => {
    setSelectedBook(null);
  };

  return (
    <div className="app-container">
      <h1>Book Search</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {loading ? (
        <Loader /> // Use the Loader component here
      ) : selectedBook ? (
        <BookDetails book={selectedBook} handleBackClick={handleBackClick} />
      ) : (
        <BookList books={books} onBookClick={handleBookClick} />
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
