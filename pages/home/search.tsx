import React, { useState } from 'react';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(`Search for: ${searchQuery}`);
    // Here you can implement the logic to execute the search
  };

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
      <InputBase
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;
