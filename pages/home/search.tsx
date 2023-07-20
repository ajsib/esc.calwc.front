import React, { useState } from 'react';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { locale } = router;

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Search for: ${searchQuery}`);
    // Here you can implement the logic to execute the search
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const getPlaceholderText = () => {
    return locale === 'en' ? 'Search...' : 'Rechercher...';
  };

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <InputBase
        value={searchQuery}
        onChange={handleChange}
        placeholder={getPlaceholderText()}
        inputProps={{ 'aria-label': 'search' }}
        style={{ flex: 1 }} // Make the input base expand to fill the available space
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;
