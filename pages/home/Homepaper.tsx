import React from "react";
import { Grid, Paper } from "@mui/material";
import ServiceCard from './ServiceCard'; // Make sure the path is correct


  const HomePaper = () => {
    return (
      <Paper sx={{ padding: '1rem', marginTop: '1rem', marginBottom: '1rem' }} elevation={3}>
        <Grid container spacing={2}>
            <ServiceCard 
            name='Profile' 
            description='Manage your profile information, including personal details, contact information, and preferences. Update your profile picture, update your bio, and customize your account settings.' 
            icon='/icons/profile.png' 
            path='/profile' 
        />
        </Grid>
      </Paper>
    );
  };
  
  export default HomePaper;
