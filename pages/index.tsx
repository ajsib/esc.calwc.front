import { Button, Box, Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from 'next';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage: NextPage = () => {
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(true);
  const [versionInfoOpen, setVersionInfoOpen] = useState(false);

  const handleContinue = () => {
    router.push(isEnglish ? "/en/" : "/fr/");
  };

  const handleVersionInfoOpen = () => {
    setVersionInfoOpen(true);
  };

  const handleVersionInfoClose = () => {
    setVersionInfoOpen(false);
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

  useEffect(() => {
    // Disable scrolling on mount
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling on unmount
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Box
        component={motion.div}
        initial="english"
        animate={isEnglish ? "english" : "french"}
        variants={colorVariants}
        transition={{ duration: 2 }}
        sx={{
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        <AnimatePresence>
          {isEnglish ? (
            <Typography
              component={motion.div}
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
              component={motion.div}
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
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
          <Button onClick={toggleLanguage} variant="outlined">
            {isEnglish ? "FR" : "EN"}
          </Button>
        </Box>

        <AnimatePresence>
          {isEnglish ? (
            <Typography
              component={motion.div}
              key="english"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 2 }}
              variant="h5"
              sx={{ textAlign: 'center' }}
            >
              Welcome to the Canadian Army Land Warfare Centre&apos;s Online Service Portal
            </Typography>
          ) : (
            <Typography
              component={motion.div}
              key="french"
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 2 }}
              variant="h5"
              sx={{ textAlign: 'center' }}
            >
              Bienvenue sur le Portail de Services en ligne du Centre de Guerre Terrestre de l&apos;armée Canadienne
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
            top: '1rem',
            left: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            zIndex: 999,
          }}
        >
          <Button variant="outlined" onClick={handleVersionInfoOpen}>
            {isEnglish ? "Alpha Version" : "Version Alpha"}
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

        <Dialog open={versionInfoOpen} onClose={handleVersionInfoClose}>
          <DialogTitle>
            {isEnglish ? "Version Information" : "Informations sur la version"}
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>{isEnglish ? "Development Team:" : "Équipe de développement:"}</Typography>
            <Typography gutterBottom>- Cpl Sibley</Typography>
            <Typography gutterBottom>{isEnglish ? "Stakeholders:" : "Parties prenantes:"}</Typography>
            <Typography gutterBottom>- LCol Nalepa, Maj Bailey:</Typography>
            <Typography gutterBottom>{isEnglish ? "Last Update: July 17, 2023" : "Dernière mise à jour : 17 juillet 2023"}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleVersionInfoClose}>{isEnglish ? "Close" : "Fermer"}</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default LandingPage;
