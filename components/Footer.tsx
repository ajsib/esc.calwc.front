import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 2, mt: 4 }}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
