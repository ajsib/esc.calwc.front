import { Button, Box, Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from 'next';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LangToggle from '../components/LangToggle';

const LandingPage: NextPage = () => {
  const router = useRouter();
  const [versionInfoOpen, setVersionInfoOpen] = useState(false);

  const handleContinue = () => {
    router.push(router.locale === 'en' ? "/en/home" : "/fr/home");
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
    exit: { opacity: 0, transition: { duration: 0.001 } } // exit immediately
  };

  const headerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const colorVariants = {
    english: { backgroundColor: "success.main" },
    french: { backgroundColor: "primary.main" },
  };

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
        animate={router.locale === 'en' ? "english" : "french"}
        variants={colorVariants}
        transition={{ duration: 2 }}
        sx={{
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        <AnimatePresence>
          {router.locale === 'en' ? (
            <Typography
              component={motion.div}
              key="english"
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              sx={{ color: "white" }}
            >
            </Typography>
          ) : (
            <Typography
              component={motion.div}
              key="french"
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              sx={{ color: "white" }}
            >
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
        <AnimatePresence>
          {router.locale === 'en' ? (
          <Typography
            component={motion.div}
            key="english"
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 2 }}
            variant="h5"
            sx={{
              textAlign: 'center',
              '&:last-child': { fontSize: '1.5rem' }, // Add this line to style the last child (Experimentation Services Centre Portal)
            }}
          >
            Welcome to the Canadian Army Land Warfare Centre&apos;s<br /> Experimentation Services Centre Portal
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
              Bienvenue au portail du Centre des services d&apos;expérimentation<br />du Centre de guerre terrestre de l&apos;Armée canadienne
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
              color={router.locale === 'en' ? "success" : "primary"}
              onClick={handleContinue}
            >
              {router.locale === 'en' ? "Continue" : "Continuer"}
            </Button>
          </Box>

        <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
          <LangToggle />
        </Box>

        <Box
          sx={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Button onClick={handleVersionInfoOpen}>
            {router.locale === 'en' ? "Version Information" : "Informations sur la Version"}
          </Button>
        </Box>

        <Dialog open={versionInfoOpen} onClose={handleVersionInfoClose}>
          <DialogTitle>
            {router.locale === 'en' ? "Version Information" : "Informations sur la Version"}
          </DialogTitle>

          <DialogContent>
            {router.locale === 'en' ? "This is version 1.0.0 of the Land Warfare Centre's Online Service Portal." : "Il s'agit de la version 1.0.0 du portail de services en ligne du Centre de guerre terrestre."}
          </DialogContent>

          <DialogActions>
            <Button onClick={handleVersionInfoClose}>
              {router.locale === 'en' ? "Close" : "Fermer"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Insert images here */}
        <Box
          sx={{
            position: 'fixed',
            bottom: '1rem',
            left: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
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
            alignItems: 'center',
          }}
        >
          <Image src="/images/cafi.png" alt="CAFI" width={80} height={70} />
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
