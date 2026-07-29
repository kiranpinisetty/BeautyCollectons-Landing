import React from 'react';
import { Box, Typography, Container, Stack, Link } from '@mui/material';
import { BUSINESS_INFO } from '../data/constants';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        py: { xs: 5, md: 6 },
        px: 2,
        borderTop: '0.5px solid #333333',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* Brand Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            fontSize: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: 2,
            color: '#ffffff',
          }}
        >
          {BUSINESS_INFO.name}
        </Typography>

        {/* Tagline / Address subtitle */}
        <Typography
          variant="body2"
          sx={{
            fontSize: '12px',
            color: '#999999',
            marginBottom: 3,
            maxWidth: '500px',
            margin: '0 auto 24px',
          }}
        >
          {BUSINESS_INFO.location.address}, {BUSINESS_INFO.location.city} - {BUSINESS_INFO.location.zip}
        </Typography>

        {/* Social Links */}
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ marginBottom: 3 }}
        >
          <Link
            href={BUSINESS_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              '&:hover': { color: '#cccccc' },
            }}
          >
            Facebook
          </Link>

          <Link
            href={BUSINESS_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              '&:hover': { color: '#cccccc' },
            }}
          >
            Instagram
          </Link>

          <Link
            href={BUSINESS_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              '&:hover': { color: '#cccccc' },
            }}
          >
            WhatsApp
          </Link>
        </Stack>

        {/* Copyright */}
        <Typography
          variant="caption"
          sx={{
            fontSize: '11px',
            color: '#666666',
            display: 'block',
          }}
        >
          © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
