import { Button, Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from 'next';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage: NextPage = () => {
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(true);

  const handleContinue = () => {
    router.push(isEnglish ? "/en/" : "/fr/");
  };

  const sentenceVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0 }
  };

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const colorVariants = {
    english: { backgroundColor: "success.main" },
    french: { backgroundColor: "primary.main" },
  };

  const toggleLanguage = () => setIsEnglish(!isEnglish);

  return (
    <>
      <Box
        as={motion.div}
        initial="english"
        animate={isEnglish ? "english" : "french"}
        variants={colorVariants}
        transition={{ duration: 2 }}
        sx={{
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
               <AnimatePresence mode='wait'>
          {isEnglish ? (
            <Typography
              as={motion.div}
              key="english"
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 2 }}
              sx={{ color: "white" }}
            >
              Alpha Release
            </Typography>
          ) : (
            <Typography
              as={motion.div}
              key="french"
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 2 }}
              sx={{ color: "white" }}
            >
              Version Alpha
            </Typography>
          )}
        </AnimatePresence>
      </Box>

      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
          <Button onClick={toggleLanguage} variant="outlined">
            {isEnglish ? "FR" : "EN"}
          </Button>
        </Box>

          <AnimatePresence mode='wait'>
          {isEnglish ? (
            <Typography
              as={motion.div}
              key="english"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 2 }}
              variant="h5"
              sx={{ textAlign: 'center' }}
            >
              Welcome to the Canadian Army Land Warfare Centre's Online Service Portal
            </Typography>
          ) : (
            <Typography
              as={motion.div}
              key="french"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 2 }}
              variant="h5"
              sx={{ textAlign: 'center' }}
            >
              Bienvenue sur le Portail de Services en ligne du Centre de Guerre Terrestre de l'armée Canadienne
            </Typography>
          )}
        </AnimatePresence>

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

        <Box
          sx={{
            position: 'fixed',
            bottom: '1rem',
            left: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <Image src="/images/cahq.png" alt="CAHQ" width={110} height={70} />
        </Box>
        <Box
          sx={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <Image src="/images/cafi.png" alt="CAFI" width={80} height={70} />
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
