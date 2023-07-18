import { NextPage } from 'next';
import { Container, Typography } from '@mui/material';

const HomePage: NextPage = () => {
  return (
    <>
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" component="div">
          Welcome to the Home Page!
        </Typography>
      </Container>

    </>
  );
};

export default HomePage;
