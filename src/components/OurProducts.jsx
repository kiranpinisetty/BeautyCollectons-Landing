import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { PRODUCTS } from '../data/products';
import { useNavigate } from 'react-router-dom';

const OurProducts = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      id="products-section"
      sx={{
        backgroundColor: '#050505',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">

        {/* ── Section header row ── */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            mb: { xs: 6, md: 9 },
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <Box sx={{ width: 24, height: '1px', backgroundColor: '#c9a96e' }} />
              <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#c9a96e', textTransform: 'uppercase' }}>
                What We Offer
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
              Our Products
            </Typography>
          </Box>
          <Button
            onClick={() => navigate('/brands')}
            sx={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#f5f0eb',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '4px',
              px: 3.5,
              py: '10px',
              whiteSpace: 'nowrap',
              transition: 'border-color 0.2s, color 0.2s',
              '&:hover': { borderColor: '#c9a96e', color: '#c9a96e' },
            }}
          >
            VIEW ALL BRANDS →
          </Button>
        </Box>

        {/* ── Product grid ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {PRODUCTS.map((product) => (
            <Box
              key={product.id}
              sx={{
                aspectRatio: '1 / 1.1',
                backgroundColor: '#0e0e0e',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '3px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: { xs: 3, md: 4 },
                textAlign: 'center',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                },
                '&:hover': {
                  borderColor: 'rgba(201,169,110,0.22)',
                  transform: 'translateY(-5px)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                  '&::after': { opacity: 1 },
                },
              }}
            >
              <Typography sx={{ fontSize: '40px', mb: 2, lineHeight: 1 }}>
                {product.emoji}
              </Typography>
              <Typography
                sx={{
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: '#f5f0eb',
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
