import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import image1 from '../assets/shop-images/image1.jpg';
import image2 from '../assets/shop-images/image2.jpg';

const DEFAULT_IMAGES = [
  { id: 1, path: image1, alt: 'Shop Cosmetics Display' },
  { id: 2, path: image2, alt: 'Skincare Section' },
  { id: 3, path: null, alt: 'Shop Section 3' },
  { id: 4, path: null, alt: 'Shop Section 4' },
];

const ShopGallery = ({ images = DEFAULT_IMAGES }) => {
  return (
    <Box
      component="section"
      id="shop-gallery"
      sx={{
        backgroundColor: '#F5F2EE',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(26,26,26,0.08)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">

        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 6, md: 9 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#7A1F3D' }} />
            <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#7A1F3D', textTransform: 'uppercase' }}>
              Inside Our Store
            </Typography>
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: { xs: '44px', md: '72px' },
              letterSpacing: '2px',
              color: '#1A1A1A',
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            Our Shop
          </Typography>
        </Box>

        {/* ── Gallery grid ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {images.map((item, index) => (
            <Box
              key={item.id || index}
              sx={{
                aspectRatio: '3 / 4',
                backgroundColor: '#EDE9E4',
                border: '1px solid rgba(26,26,26,0.08)',
                borderRadius: '3px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(26,26,26,0.06)',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.02)',
                  borderColor: 'rgba(122,31,61,0.22)',
                  boxShadow: '0 16px 40px rgba(26,26,26,0.14)',
                },
                '&:hover img': {
                  filter: 'brightness(0.88)',
                },
              }}
            >
              {item.path ? (
                <Box
                  component="img"
                  src={item.path}
                  alt={item.alt || `Shop Image ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.8)',
                    transition: 'filter 0.5s ease, transform 0.5s ease',
                  }}
                />
              ) : (
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  {/* Camera icon SVG */}
                  <Box sx={{ opacity: 0.18, mb: 1.5, display: 'flex', justifyContent: 'center' }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="9" width="26" height="18" rx="2" stroke="#1A1A1A" strokeWidth="1.5"/>
                      <circle cx="16" cy="18" r="5" stroke="#1A1A1A" strokeWidth="1.5"/>
                      <path d="M11 9L13 5H19L21 9" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: 'rgba(26,26,26,0.3)',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Coming Soon
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ShopGallery;
