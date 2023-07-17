import { Button, Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from 'next';
import { useEffect, useState } from "react";

const LandingPage: NextPage = () => {
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnglish((prevIsEnglish) => !prevIsEnglish);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    router.push(isEnglish ? "/en/" : "/fr/");
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
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        {isEnglish
          ? "Welcome to the Canadian Army Land Warfare Centre's Online Service Portal"
          : "Bienvenue sur le Portail de Services en ligne du Centre de Guerre Terrestre de l'armée Canadienne"}
      </Typography>

      <Box 
        sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center',
          marginTop: '2rem'
        }}
      >
        <Button 
          variant="contained" 
          color={isEnglish ? "success" : "primary"} 
          onClick={handleContinue}
        >
          {isEnglish ? "Continue" : "Continuer"}
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
