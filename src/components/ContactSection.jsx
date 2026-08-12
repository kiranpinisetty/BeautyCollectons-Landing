import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { BUSINESS_INFO } from '../data/constants';

// SVG Icons
const LocationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C11.582 3 8 6.582 8 11C8 17.5 16 29 16 29C16 29 24 17.5 24 11C24 6.582 20.418 3 16 3Z" stroke="#7A1F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="11" r="3" stroke="#7A1F3D" strokeWidth="1.5"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 7C6 6.448 6.448 6 7 6H11.5C11.865 6 12.197 6.215 12.342 6.553L14.342 11.053C14.504 11.424 14.398 11.858 14.078 12.109L12.202 13.568C13.476 16.137 15.548 18.209 18.117 19.483L19.576 17.607C19.827 17.287 20.261 17.181 20.632 17.343L25.132 19.343C25.47 19.488 25.685 19.82 25.685 20.185V24.685C25.685 25.237 25.237 25.685 24.685 25.685C13.313 25.685 4 16.372 4 5C4 4.448 4.448 4 5 4H6V7Z" stroke="#7A1F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="11" stroke="#7A1F3D" strokeWidth="1.5"/>
    <path d="M16 10V16L20 19" stroke="#7A1F3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CONTACT_CARDS = (info) => [
  {
    Icon: LocationIcon,
    label: 'Location',
    lines: [
      info.location.address,
      info.location.road,
      `${info.location.city} — ${info.location.zip}`,
      info.location.state,
    ],
  },
  {
    Icon: PhoneIcon,
    label: 'Phone',
    custom: (
      <>
        {info.phone.map((p, i) => (
          <a key={i} href={`tel:${p.number}`} style={{ color: 'inherit', display: 'block' }}>
            +91 {p.number}
          </a>
        ))}
      </>
    ),
  },
  {
    Icon: ClockIcon,
    label: 'Hours',
    lines: [
      `${info.hours.open} — ${info.hours.close}`,
      info.hours.status,
    ],
    highlight: 1,
  },
];

const ContactSection = () => {
  const primaryPhone = BUSINESS_INFO.phone[0].number;
  const whatsappUrl = BUSINESS_INFO.social.whatsapp;
  const cards = CONTACT_CARDS(BUSINESS_INFO);

  return (
    <Box
      component="section"
      id="contact-section"
      sx={{
        backgroundColor: '#F5F2EE',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(26,26,26,0.08)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Soft burgundy ambient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(122,31,61,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 6, md: 9 }, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, justifyContent: 'center' }}>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#7A1F3D' }} />
            <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#7A1F3D', textTransform: 'uppercase' }}>
              Find Us
            </Typography>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#7A1F3D' }} />
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: { xs: '52px', md: '84px' },
              letterSpacing: '3px',
              color: '#1A1A1A',
              lineHeight: 0.92,
              textTransform: 'uppercase',
            }}
          >
            Visit Us
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '15px',
              color: 'rgba(26,26,26,0.4)',
              mt: 2,
            }}
          >
            Come experience beauty in person
          </Typography>
        </Box>

        {/* ── Info cards ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: { xs: 2, md: 2.5 },
            mb: 7,
          }}
        >
          {cards.map((card) => (
            <Box
              key={card.label}
              sx={{
                p: { xs: 4, md: 5 },
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(26,26,26,0.08)',
                borderRadius: '3px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(26,26,26,0.05)',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #7A1F3D, transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                },
                '&:hover': {
                  borderColor: 'rgba(122,31,61,0.18)',
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 36px rgba(26,26,26,0.1)',
                  '&::before': { opacity: 1 },
                },
              }}
            >
              {/* SVG icon */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2.5 }}>
                <card.Icon />
              </Box>
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#7A1F3D',
                  mb: 2.5,
                  display: 'block',
                }}
              >
                {card.label}
              </Typography>

              {card.custom ? (
                <Typography sx={{ fontSize: '13px', color: 'rgba(26,26,26,0.5)', lineHeight: 1.9 }}>
                  {card.custom}
                </Typography>
              ) : (
                <Box>
                  {card.lines.map((line, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontSize: '13px',
                        color: card.highlight === i ? '#7A1F3D' : 'rgba(26,26,26,0.5)',
                        fontWeight: card.highlight === i ? 700 : 400,
                        lineHeight: 1.9,
                        display: 'block',
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>

        {/* ── Action buttons ── */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            component="a"
            href={`tel:${primaryPhone}`}
            sx={{
              px: { xs: 4, md: 5.5 },
              py: '13px',
              backgroundColor: '#7A1F3D',
              color: '#FAF8F5',
              borderRadius: '4px',
              fontWeight: 800,
              fontSize: '11px',
              letterSpacing: '2px',
              transition: 'background-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
              '&:hover': {
                backgroundColor: '#9B2D52',
                boxShadow: '0 8px 32px rgba(122,31,61,0.35)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            CALL NOW
          </Button>
          <Button
            component="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: { xs: 4, md: 5.5 },
              py: '13px',
              backgroundColor: 'transparent',
              color: '#1A1A1A',
              border: '1px solid rgba(26,26,26,0.22)',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '2px',
              transition: 'border-color 0.25s ease, color 0.25s ease, transform 0.25s ease',
              '&:hover': {
                borderColor: '#7A1F3D',
                color: '#7A1F3D',
                transform: 'translateY(-2px)',
              },
            }}
          >
            WHATSAPP US
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
