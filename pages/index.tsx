import { Button, Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from 'next';

const LandingPage: NextPage = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/en/index");
  };

  const handleContinuer = () => {
    router.push("/fr/index");
  };

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
      <Box 
        sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center' 
        }}
      >
        <Button variant="contained" color="success" onClick={handleContinue}>
          Continue
        </Button>
        <Button variant="contained" color="primary" onClick={handleContinuer}>
          Continuer
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
