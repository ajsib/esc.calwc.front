import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const LanguageToggle = () => {
  const router = useRouter();

  const handleToggleLanguage = () => {
    const { locale } = router;
    const newLocale = locale === 'en' ? 'fr' : 'en';
    router.push('/', '/', { locale: newLocale });
  };

  return (
    <Button variant="outlined" onClick={handleToggleLanguage}>
      {router.locale === 'en' ? 'FR' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
