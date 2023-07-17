import { Typography, Container } from "@mui/material";
import { NextPage } from 'next';

const EnglishPage: NextPage = () => {
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
        Welcome to the English Version of our Service Portal!
      </Typography>
    </Container>
  );
};

export default EnglishPage;
