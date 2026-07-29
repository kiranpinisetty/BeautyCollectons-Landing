import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { PRODUCTS } from '../data/products';

const OurProducts = () => {
  return (
    <Box
      component="section"
      id="products-section"
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
          OUR PRODUCTS
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
          {PRODUCTS.map((product) => (
            <Box
              key={product.id}
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                borderRadius: '4px',
                border: '1px solid #f0f0f0',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  backgroundColor: '#f2f2f2',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '40px',
                  marginBottom: 2,
                  lineHeight: 1,
                }}
              >
                {product.emoji}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#000000',
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
