import { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import Header from '../../components/Header'

const HomePage: NextPage = () => {
  return (
    <>
      <Header></Header>
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
