import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { PRODUCTS } from '../data/products';

const OurProducts = () => {
  return (
    <Box
      component="section"
      id="products-section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: '#f9fafb',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: '#c5a059', fontWeight: 700, letterSpacing: '3px', fontSize: '11px', display: 'block', textAlign: 'center', mb: 1 }}
        >
          WHAT WE OFFER
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
          Our Products
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {PRODUCTS.map((product) => (
            <Box
              key={product.id}
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s ease',
                cursor: 'default',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.07)',
                  borderColor: '#111827',
                },
              }}
            >
              <Typography sx={{ fontSize: '40px', mb: 2, lineHeight: 1 }}>
                {product.emoji}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '13px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#111827',
                }}
              >
                {product.category}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurProducts;
