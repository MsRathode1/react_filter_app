import React from 'react';

const Search = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h3>Search</h3>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by name..."
      />
    </div>
  );
};

export default Search;
