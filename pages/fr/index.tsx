import { Typography, Container } from "@mui/material";
import { NextPage } from 'next';

const FrenchPage: NextPage = () => {
  return (
    <Container 
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="h3" component="div">
        Bienvenue à la version française de notre portail de service!
      </Typography>
    </Container>
  );
};

export default FrenchPage;
