import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Mi Sitio Web
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        <Link href="/about" color="inherit" sx={{ marginRight: '15px' }}>
          About Us
        </Link>
        <Link href="/contact" color="inherit" sx={{ marginRight: '15px' }}>
          Contact
        </Link>
        <Link href="/privacy" color="inherit">
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
