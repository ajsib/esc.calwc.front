import { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import HomePaper from './Homepaper';

const HomePage: NextPage = () => {
  return (
    <>
      <HomePaper />
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        
      </Container>

    </>
  );
};

export default HomePage;
