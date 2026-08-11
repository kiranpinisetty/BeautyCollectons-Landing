import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { BUSINESS_INFO } from '../data/constants';

const SOCIAL_LINKS = [
  { label: 'Facebook', href: BUSINESS_INFO.social.facebook },
  { label: 'Instagram', href: BUSINESS_INFO.social.instagram },
  { label: 'WhatsApp', href: BUSINESS_INFO.social.whatsapp },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#050505',
        color: '#f5f0eb',
        borderTop: '1px solid rgba(201,169,110,0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Top gold accent line ── */}
      <Box
        sx={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #c9a96e 40%, #c9a96e 60%, transparent 100%)',
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg">
        {/* ── Main footer body ── */}
        <Box
          sx={{
            py: { xs: '60px', md: '80px' },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 6, md: 4 },
            alignItems: 'flex-start',
          }}
        >
          {/* Brand column */}
          <Box>
            <Typography
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '32px',
                letterSpacing: '3px',
                color: '#f5f0eb',
                lineHeight: 1,
                mb: 1,
              }}
            >
              {BUSINESS_INFO.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '13px',
                color: '#c9a96e',
                mb: 3,
                letterSpacing: '0.3px',
              }}
            >
              {BUSINESS_INFO.tagline}
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                color: 'rgba(245,240,235,0.28)',
                lineHeight: 1.85,
                maxWidth: '240px',
              }}
            >
              {BUSINESS_INFO.location.address},<br />
              {BUSINESS_INFO.location.city} — {BUSINESS_INFO.location.zip}
            </Typography>
          </Box>

          {/* Quick links column */}
          <Box>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '3px',
                color: '#c9a96e',
                textTransform: 'uppercase',
                mb: 3,
                display: 'block',
              }}
            >
              Quick Links
            </Typography>
            {['Home', 'Brands', 'Products', 'Contact'].map((link) => (
              <Typography
                key={link}
                sx={{
                  fontSize: '12px',
                  color: 'rgba(245,240,235,0.35)',
                  mb: 1.5,
                  display: 'block',
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#c9a96e' },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          {/* Contact / Social column */}
          <Box>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '3px',
                color: '#c9a96e',
                textTransform: 'uppercase',
                mb: 3,
                display: 'block',
              }}
            >
              Connect
            </Typography>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <Box
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: '12px',
                  color: 'rgba(245,240,235,0.35)',
                  display: 'block',
                  mb: 1.5,
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#c9a96e' },
                }}
              >
                {label}
              </Box>
            ))}

            <Box sx={{ mt: 3 }}>
              {BUSINESS_INFO.phone.map((p, i) => (
                <Box
                  key={i}
                  component="a"
                  href={`tel:${p.number}`}
                  sx={{
                    fontSize: '12px',
                    color: 'rgba(245,240,235,0.35)',
                    display: 'block',
                    mb: 1,
                    letterSpacing: '0.5px',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#c9a96e' },
                  }}
                >
                  +91 {p.number}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ── Bottom bar ── */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            py: { xs: 3, md: 4 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: '11px', color: 'rgba(245,240,235,0.2)', letterSpacing: '0.5px' }}>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box sx={{ width: 20, height: '1px', backgroundColor: '#c9a96e', opacity: 0.4 }} />
            <Typography sx={{ fontSize: '9px', color: 'rgba(201,169,110,0.4)', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Beauty Within Everyone's Reach
            </Typography>
            <Box sx={{ width: 20, height: '1px', backgroundColor: '#c9a96e', opacity: 0.4 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
