import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import SidebarToggle from '../components/header/SidebarToggle';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const handleMouseLeave = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: '#FF0000', // Corrected color value for error
      },
      background: {
        default: '#fff',
      },
    },
  });

  const isLandingPage = router.pathname === '/';
  return (
    <ThemeProvider theme={theme}>
      {loading && <LinearProgress />}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {!isLandingPage && <Navbar open={navbarOpen} onClose={closeNavbar} onMouseLeave={handleMouseLeave} />}
        {!isLandingPage && <Header toggleNavbar={toggleNavbar} />}
        <Component {...pageProps} />
        <Box sx={{ mt: 'auto' }}>
          {!isLandingPage && <Footer />}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MyApp;
