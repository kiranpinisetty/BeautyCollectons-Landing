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
        py: { xs: 6, md: 8 },
        px: 2,
        backgroundColor: 'transparent',
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
          OUR SHOP
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {images.map((item, index) => (
            <Box
              key={item.id || index}
              sx={{
                aspectRatio: '1 / 1',
                backgroundColor: '#f5f5f5',
                border: '1px solid #eeeeee',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
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
                  }}
                />
              ) : (
                <Box
                  sx={{
                    p: 2,
                    textAlign: 'center',
                    color: '#888888',
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 500 }}>
                    Add your shop photo here
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
