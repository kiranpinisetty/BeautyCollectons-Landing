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
        py: { xs: 6, md: 8 },
        px: 2,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: '24px',
            fontWeight: 700,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            marginBottom: { xs: 4, md: 6 },
            color: '#000000',
          }}
        >
          VISIT US
        </Typography>

        {/* 3-Column Grid Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto 48px',
          }}
        >
          {/* Location Card */}
          <Box
            sx={{
              p: 3,
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              borderRadius: '4px',
              border: '1px solid #f0f0f0',
            }}
          >
            <Typography sx={{ fontSize: '32px', marginBottom: 1.5 }}>📍</Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: '#000000',
                marginBottom: 1,
              }}
            >
              LOCATION
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '12px', color: '#888888', lineHeight: 1.6 }}>
              {BUSINESS_INFO.location.address}
              <br />
              {BUSINESS_INFO.location.road}
              <br />
              {BUSINESS_INFO.location.city} - {BUSINESS_INFO.location.zip},{' '}
              {BUSINESS_INFO.location.state}
            </Typography>
          </Box>

          {/* Contact Numbers Card */}
          <Box
            sx={{
              p: 3,
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              borderRadius: '4px',
              border: '1px solid #f0f0f0',
            }}
          >
            <Typography sx={{ fontSize: '32px', marginBottom: 1.5 }}>📞</Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: '#000000',
                marginBottom: 1,
              }}
            >
              PHONE
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '12px', color: '#888888', lineHeight: 1.6 }}>
              {BUSINESS_INFO.phone.map((p, idx) => (
                <React.Fragment key={idx}>
                  <a href={`tel:${p.number}`} style={{ color: 'inherit' }}>
                    +91 {p.number}
                  </a>
                  {idx < BUSINESS_INFO.phone.length - 1 && <br />}
                </React.Fragment>
              ))}
            </Typography>
          </Box>

          {/* Working Hours Card */}
          <Box
            sx={{
              p: 3,
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              borderRadius: '4px',
              border: '1px solid #f0f0f0',
            }}
          >
            <Typography sx={{ fontSize: '32px', marginBottom: 1.5 }}>⏰</Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: '#000000',
                marginBottom: 1,
              }}
            >
              WORKING HOURS
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '12px', color: '#888888', lineHeight: 1.6 }}>
              {BUSINESS_INFO.hours.open} - {BUSINESS_INFO.hours.close}
              <br />
              <span style={{ fontWeight: 600, color: '#000000' }}>
                {BUSINESS_INFO.hours.status}
              </span>
            </Typography>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {/* CALL NOW Button */}
          <Button
            component="a"
            href={`tel:${primaryPhone}`}
            sx={{
              padding: '12px 32px',
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '3px',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              '&:hover': {
                backgroundColor: '#222222',
              },
            }}
          >
            CALL NOW
          </Button>

          {/* MESSAGE US Button */}
          <Button
            component="a"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              padding: '12px 32px',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: '1px solid #000000',
              borderRadius: '3px',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
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
