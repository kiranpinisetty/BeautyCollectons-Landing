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
        backgroundColor: '#050505',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">

        {/* ── Section header ── */}
        <Box sx={{ mb: { xs: 6, md: 9 }, textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box sx={{ width: 24, height: '1px', backgroundColor: '#c9a96e' }} />
            <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#c9a96e', textTransform: 'uppercase' }}>
              Inside Our Store
            </Typography>
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: { xs: '44px', md: '72px' },
              letterSpacing: '2px',
              color: '#f5f0eb',
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
                backgroundColor: '#0e0e0e',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '3px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.02)',
                  borderColor: 'rgba(201,169,110,0.25)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
                },
                '&:hover img': {
                  filter: 'brightness(1)',
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
                    filter: 'brightness(0.75)',
                    transition: 'filter 0.5s ease, transform 0.5s ease',
                  }}
                />
              ) : (
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Typography sx={{ fontSize: '28px', mb: 1.5, opacity: 0.15 }}>📷</Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      color: 'rgba(245,240,235,0.2)',
                      letterSpacing: '1.5px',
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
