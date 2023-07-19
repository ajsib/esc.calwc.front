import { Grid, Paper } from "@mui/material";
import ServiceCard from './ServiceCard'; // Make sure the path is correct

const services = [ 
    { name: 'Service 1', description: 'This is service 1', logo: '/path/to/logo1.png', link: '/service1', type: 'Profile' },
    { name: 'Service 2', description: 'This is service 2', logo: '/path/to/logo2.png', link: '/service2', type: 'Services' },
    // more services...
  ];
  

const HomePaper = () => {
  return (
    <Paper sx={{ padding: '1rem', marginTop: '1rem', marginBottom: '1rem' }} elevation={3}>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default HomePaper;
