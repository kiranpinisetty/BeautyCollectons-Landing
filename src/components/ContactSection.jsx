import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { BUSINESS_INFO } from '../data/constants';

const CONTACT_CARDS = (info) => [
  {
    icon: '📍',
    label: 'Location',
    lines: [
      info.location.address,
      info.location.road,
      `${info.location.city} — ${info.location.zip}`,
      info.location.state,
    ],
  },
  {
    icon: '📞',
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
    icon: '⏰',
    label: 'Hours',
    lines: [
      `${info.hours.open} — ${info.hours.close}`,
      info.hours.status,
    ],
    highlight: 1, // index of highlighted line
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
        backgroundColor: '#0b0b0b',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background gold ambient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 6, md: 9 }, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, justifyContent: 'center' }}>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#c9a96e' }} />
            <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#c9a96e', textTransform: 'uppercase' }}>
              Find Us
            </Typography>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#c9a96e' }} />
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: { xs: '52px', md: '84px' },
              letterSpacing: '3px',
              color: '#f5f0eb',
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
              color: 'rgba(245,240,235,0.35)',
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
                backgroundColor: '#0e0e0e',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '3px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                },
                '&:hover': {
                  borderColor: 'rgba(201,169,110,0.18)',
                  transform: 'translateY(-5px)',
                  '&::before': { opacity: 1 },
                },
              }}
            >
              <Typography sx={{ fontSize: '32px', mb: 2.5, display: 'block' }}>{card.icon}</Typography>
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#c9a96e',
                  mb: 2.5,
                  display: 'block',
                }}
              >
                {card.label}
              </Typography>

              {card.custom ? (
                <Typography sx={{ fontSize: '13px', color: 'rgba(245,240,235,0.45)', lineHeight: 1.9 }}>
                  {card.custom}
                </Typography>
              ) : (
                <Box>
                  {card.lines.map((line, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontSize: '13px',
                        color: card.highlight === i ? '#c9a96e' : 'rgba(245,240,235,0.45)',
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
              background: 'linear-gradient(120deg, #e8c98a 0%, #c9a96e 50%, #9a7a3e 100%)',
              color: '#050505',
              borderRadius: '4px',
              fontWeight: 800,
              fontSize: '11px',
              letterSpacing: '2px',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease',
              '&:hover': {
                boxShadow: '0 8px 32px rgba(201,169,110,0.45)',
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
              color: '#f5f0eb',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '2px',
              transition: 'border-color 0.25s ease, color 0.25s ease, transform 0.25s ease',
              '&:hover': {
                borderColor: '#c9a96e',
                color: '#c9a96e',
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
