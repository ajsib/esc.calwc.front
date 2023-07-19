import React from 'react';
import { Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import ServiceCard from './ServiceCard';

const services = [
  {
    name: 'Profile',
    description: 'Manage your profile information...',
    icon: '/icons/profile.svg',
    path: '/profile'
  },
  {
    name: 'Ticket Request',
    description: 'Submit a request for assistance...',
    icon: '/icons/ticket-request.svg',
    path: '/ticket-request'
  },
  {
    name: 'Calendar',
    description: 'View and manage your schedule...',
    icon: '/icons/calendar.svg',
    path: '/calendar'
  },
  // Add more service objects here
];

const HomePaper = () => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMedium = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  let gridColumns: number; // Assigning a type to gridColumns
  if (isExtraSmall) {
    gridColumns = 12; // 1 card per row on extra small screens
  } else if (isSmall) {
    gridColumns = 6; // 2 cards per row on small screens
  } else if (isMedium) {
    gridColumns = 4; // 3 cards per row on medium screens
  } else if (isLarge) {
    gridColumns = 3; // 4 cards per row on large screens
  }


  return (
    <Paper 
      sx={{ 
        padding: '1rem', 
        marginTop: '1rem', 
        marginBottom: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem', // This ensures there's a consistent gap around each card
        justifyContent: 'center' // This centers the cards in the Paper
      }} 
      elevation={3}
    >
      {services.map((service, index) => (
        <Grid item xs={gridColumns} key={index}>
          <ServiceCard
            name={service.name}
            description={service.description}
            icon={service.icon}
            path={service.path}
          />
        </Grid>
      ))}
    </Paper>
  );
};

export default HomePaper;
