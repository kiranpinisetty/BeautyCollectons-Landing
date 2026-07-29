import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { BUSINESS_INFO } from '../data/constants';

const ContactSection = () => {
  const primaryPhone = BUSINESS_INFO.phone[0].number;
  const whatsappUrl = BUSINESS_INFO.social.whatsapp;

  return (
    <Box
      component="section"
      id="contact-section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: '#c5a059', fontWeight: 700, letterSpacing: '3px', fontSize: '11px', display: 'block', textAlign: 'center', mb: 1 }}
        >
          FIND US
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '26px', md: '36px' },
            fontWeight: 800,
            textAlign: 'center',
            fontFamily: "'Playfair Display', serif",
            color: '#111827',
            mb: { xs: 5, md: 7 },
            letterSpacing: '-0.3px',
          }}
        >
          Visit Us
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 6,
          }}
        >
          {/* Location */}
          <Box sx={{ p: 4, textAlign: 'center', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
            <Typography sx={{ fontSize: '32px', mb: 2 }}>📍</Typography>
            <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#111827', mb: 1.5 }}>
              Location
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.7 }}>
              {BUSINESS_INFO.location.address}<br />
              {BUSINESS_INFO.location.road}<br />
              {BUSINESS_INFO.location.city} - {BUSINESS_INFO.location.zip}, {BUSINESS_INFO.location.state}
            </Typography>
          </Box>

          {/* Phone */}
          <Box sx={{ p: 4, textAlign: 'center', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
            <Typography sx={{ fontSize: '32px', mb: 2 }}>📞</Typography>
            <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#111827', mb: 1.5 }}>
              Phone
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.7 }}>
              {BUSINESS_INFO.phone.map((p, idx) => (
                <React.Fragment key={idx}>
                  <a href={`tel:${p.number}`} style={{ color: 'inherit' }}>+91 {p.number}</a>
                  {idx < BUSINESS_INFO.phone.length - 1 && <br />}
                </React.Fragment>
              ))}
            </Typography>
          </Box>

          {/* Hours */}
          <Box sx={{ p: 4, textAlign: 'center', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
            <Typography sx={{ fontSize: '32px', mb: 2 }}>⏰</Typography>
            <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#111827', mb: 1.5 }}>
              Working Hours
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.7 }}>
              {BUSINESS_INFO.hours.open} – {BUSINESS_INFO.hours.close}<br />
              <span style={{ fontWeight: 700, color: '#111827' }}>{BUSINESS_INFO.hours.status}</span>
            </Typography>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            component="a"
            href={`tel:${primaryPhone}`}
            sx={{
              padding: '13px 36px',
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              '&:hover': { backgroundColor: '#1f2937' },
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
              padding: '13px 36px',
              backgroundColor: '#ffffff',
              color: '#111827',
              border: '1.5px solid #111827',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              '&:hover': { backgroundColor: '#f3f4f6' },
            }}
          >
            MESSAGE US
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
