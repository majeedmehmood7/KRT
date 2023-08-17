import React, { useState } from 'react';
import './SearchBar.css'; // Make sure to create this CSS file

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform your search logic here using the searchTerm state
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-bar-container">
      <img
        src="search-icon.png"  // Replace with your search logo image path
        alt="Search Icon"
        className="search-icon"
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
