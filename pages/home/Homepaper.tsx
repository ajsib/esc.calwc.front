import React from "react";
import { Grid, Paper } from "@mui/material";
import ServiceCard from './ServiceCard'; // Make sure the path is correct

const HomePaper = () => {
  return (
    <Grid 
      container 
      spacing={2} 
      justifyContent="center" 
      style={{ maxWidth: "85%", margin: "auto" }}
    >
      <Grid item xs={12}>
        <Paper sx={{ padding: '1rem', marginTop: '1rem', marginBottom: '1rem' }} elevation={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ServiceCard
                name='Profile'
                description='Manage your profile information...'
                icon='/icons/profile.svg'
                path='/profile'
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ServiceCard
                name='Ticket Request'
                description='Submit a request for assistance...'
                icon='/icons/ticket-request.svg'
                path='/ticket-request'
              />
            </Grid>

            {/* Add additional Grid items here as shown above */}

          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePaper;
