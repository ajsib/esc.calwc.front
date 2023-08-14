import React from 'react';
import { Container, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', paddingTop: '10rem' }}>
      <Typography variant="h1">404 - Not Found</Typography>
      <Typography variant="h5">Sorry, the page you are looking for does not exist.</Typography>
    </Container>
  );
};

export default NotFound;
