import React, { useState } from 'react';
import { InputBase, IconButton, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const StyledSearchBar = styled('form')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const StyledInputBase = styled(InputBase)({
  flex: 1,
  backgroundColor: 'FAF9F6', // Set the background color to white
  borderRadius: '10px', // Make the input base circular
  padding: '0px', // Add padding to give some space around the input
});

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
    <StyledSearchBar onSubmit={handleSearch}>
      <StyledInputBase
        value={searchQuery}
        onChange={handleChange}
        placeholder={getPlaceholderText()}
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
