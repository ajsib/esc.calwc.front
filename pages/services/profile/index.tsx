import React from 'react';
import { Typography, Box } from '@mui/material';

const Profile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
    <Typography 
      sx={{
        fontSize: '2rem',
        fontWeight: 'bold',
      }}
    >
      Profile Page
    </Typography>
    </Box>

  );
};

export default Profile;
