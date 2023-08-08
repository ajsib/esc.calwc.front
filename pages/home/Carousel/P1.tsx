// Page1.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Search from '../search';
import { useRouter } from 'next/router';

const P1: React.FC = () => {
    const router = useRouter();
    const { locale } = router;

  return (
    <div style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <h2>Page 1</h2>
      <p>This is the content for Page 1. Thinking of having the welcome message here, and a search bar!</p>
      <p> NOTE all the pages on the carousel be the same height, this is just a development-ism.</p>
      {/* Any other content or components you'd like to add */}

      <Box sx={{
  padding: '1rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}}>
    <Search/>
</Box>


    </div>
  );
}

export default P1;
