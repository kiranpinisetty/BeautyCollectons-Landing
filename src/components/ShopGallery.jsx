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
          INSIDE OUR STORE
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
          Our Shop
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {images.map((item, index) => (
            <Box
              key={item.id || index}
              sx={{
                aspectRatio: '1 / 1',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.07)',
                  borderColor: '#111827',
                },
              }}
            >
              {item.path ? (
                <Box
                  component="img"
                  src={item.path}
                  alt={item.alt || `Shop Image ${index + 1}`}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <Typography variant="body2" sx={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center', p: 2 }}>
                  Add your shop photo here
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ShopGallery;
