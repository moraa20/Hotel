import React, { useState } from 'react';
import '../Styles/SearchComponent.css';


const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchComponent;
