import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import catMakeup from '../assets/cat_makeup.jpg';
import catSkincare from '../assets/cat_skincare.jpg';
import catHaircare from '../assets/cat_haircare.jpg';
import catBridal from '../assets/cat_bridal.jpg';

const PRODUCTS = [
  {
    id: 1,
    category: 'MAKEUP',
    subtitle: 'Lipstick · Foundation · Eyes',
    image: catMakeup,
  },
  {
    id: 2,
    category: 'SKINCARE',
    subtitle: 'Serums · Moisturisers · SPF',
    image: catSkincare,
  },
  {
    id: 3,
    category: 'HAIR CARE',
    subtitle: 'Shampoo · Oils · Treatments',
    image: catHaircare,
  },
  {
    id: 4,
    category: 'BRIDAL',
    subtitle: 'Full Bridal Beauty Kits',
    image: catBridal,
  },
];

const OurProducts = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      id="products-section"
      sx={{
        backgroundColor: '#FAF8F5',
        py: { xs: '72px', md: '112px' },
        px: 2,
        borderBottom: '1px solid rgba(26,26,26,0.08)',
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
              <Box sx={{ width: 24, height: '1px', backgroundColor: '#7A1F3D' }} />
              <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#7A1F3D', textTransform: 'uppercase' }}>
                What We Offer
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
              Our Products
            </Typography>
          </Box>
          <Button
            onClick={() => navigate('/brands')}
            sx={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#1A1A1A',
              border: '1px solid rgba(26,26,26,0.22)',
              borderRadius: '4px',
              px: 3.5,
              py: '10px',
              whiteSpace: 'nowrap',
              transition: 'border-color 0.2s, color 0.2s, background-color 0.2s',
              '&:hover': { borderColor: '#7A1F3D', color: '#7A1F3D', backgroundColor: 'rgba(122,31,61,0.04)' },
            }}
          >
            VIEW ALL BRANDS →
          </Button>
        </Box>

        {/* ── Product grid with images ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {PRODUCTS.map((product) => (
            <Box
              key={product.id}
              sx={{
                aspectRatio: '3 / 4',
                backgroundColor: '#EDE9E4',
                border: '1px solid rgba(26,26,26,0.08)',
                borderRadius: '3px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(26,26,26,0.07)',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  borderColor: 'rgba(122,31,61,0.25)',
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 48px rgba(26,26,26,0.15)',
                  '& img': { transform: 'scale(1.06)', filter: 'brightness(0.55)' },
                  '& .burg-tag': { backgroundColor: '#7A1F3D' },
                },
              }}
            >
              {/* Category image */}
              <Box
                component="img"
                src={product.image}
                alt={product.category}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.62)',
                  transition: 'transform 0.5s ease, filter 0.5s ease',
                }}
              />

              {/* Gradient overlay — warmer on light theme */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20,12,12,0.88) 0%, rgba(20,12,12,0.25) 50%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Burgundy top accent tag */}
              <Box
                className="burg-tag"
                sx={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: 'rgba(122,31,61,0.75)',
                  borderRadius: '2px',
                  px: '10px',
                  py: '5px',
                  transition: 'background-color 0.3s ease',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <Typography sx={{ fontSize: '8px', fontWeight: 800, letterSpacing: '2px', color: '#FAF8F5', textTransform: 'uppercase' }}>
                  {product.category}
                </Typography>
              </Box>

              {/* Bottom text */}
              <Box sx={{ position: 'relative', zIndex: 1, p: { xs: '16px', md: '20px' }, width: '100%' }}>
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: '#FAF8F5',
                    mb: '4px',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  {product.category}
                </Typography>
                <Typography sx={{ fontSize: '11px', color: 'rgba(250,248,245,0.65)', letterSpacing: '0.5px' }}>
                  {product.subtitle}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurProducts;
