import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: '#red',
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
      {!isLandingPage && <Navbar />}
      {!isLandingPage && <Header />}
      <Box marginTop={!isLandingPage ? 2 : 0}>
        <Component {...pageProps} />
      </Box>
      {!isLandingPage && <Footer />}
    </ThemeProvider>
  );
}

export default MyApp;
