import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent, Chip,
  Button, TextField, InputAdornment, Dialog, DialogTitle,
  DialogContent, IconButton, Divider, Rating
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { BRANDS } from '../data/brandsData';

const BrandsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filteredBrands = BRANDS.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        backgroundColor: '#050505',
        minHeight: '100vh',
        py: { xs: '72px', md: '100px' },
        px: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '8%',
          right: '0%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(201,169,110,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

        {/* ── Back button ── */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{
            color: 'rgba(245,240,235,0.45)',
            fontWeight: 600,
            mb: 5,
            fontSize: '11px',
            letterSpacing: '1px',
            '&:hover': { color: '#c9a96e', backgroundColor: 'transparent' },
          }}
        >
          Back to Home
        </Button>

        {/* ── Page header ── */}
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
                What We Stock
              </Typography>
            </Box>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: { xs: '52px', md: '80px' },
                letterSpacing: '2px',
                color: '#f5f0eb',
                lineHeight: 0.95,
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Available Brands
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(245,240,235,0.35)',
                maxWidth: '500px',
                lineHeight: 1.8,
              }}
            >
              100% authentic products from world-class beauty brands. Click any brand to explore.
            </Typography>
          </Box>

          {/* Search */}
          <TextField
            placeholder="Search brands or categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'rgba(245,240,235,0.3)', fontSize: '18px' }} />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: '#0e0e0e',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '4px',
                color: '#f5f0eb',
                fontSize: '13px',
                minWidth: { xs: '100%', md: '280px' },
                '& fieldset': { border: 'none' },
                '&:hover': { borderColor: 'rgba(201,169,110,0.3)' },
                transition: 'border-color 0.2s',
              },
            }}
            inputProps={{ style: { color: '#f5f0eb', padding: '12px 14px' } }}
            sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { border: 'none' } } }}
          />
        </Box>

        {/* ── Brands grid ── */}
        <Grid container spacing={2.5}>
          {filteredBrands.map((brand) => (
            <Grid item xs={12} sm={6} md={4} key={brand.id}>
              <Card
                onClick={() => setSelectedBrand(brand)}
                sx={{
                  backgroundColor: '#0e0e0e',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '3px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  boxShadow: 'none',
                  backgroundImage: 'none',
                  transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  },
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'rgba(201,169,110,0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                    '&::after': { opacity: 1 },
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2.5 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: '#f5f0eb',
                        fontSize: '20px',
                        lineHeight: 1.2,
                      }}
                    >
                      {brand.name}
                    </Typography>
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '11px !important', color: '#c9a96e !important' }} />}
                      label={brand.badge}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(201,169,110,0.08)',
                        color: '#c9a96e',
                        fontWeight: 600,
                        fontSize: '9px',
                        letterSpacing: '0.5px',
                        border: '1px solid rgba(201,169,110,0.18)',
                        ml: 1,
                        flexShrink: 0,
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: '9px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: '#c9a96e',
                      display: 'block',
                      mb: 2,
                    }}
                  >
                    {brand.category} · {brand.origin}
                  </Typography>

                  <Typography sx={{ color: 'rgba(245,240,235,0.4)', fontSize: '13px', lineHeight: 1.75 }}>
                    {brand.description}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    px: 4,
                    pb: 3,
                    pt: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <Typography sx={{ fontSize: '10px', color: 'rgba(245,240,235,0.25)', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {brand.products.length} products in store
                  </Typography>
                  <Button
                    size="small"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: '13px !important' }} />}
                    sx={{
                      color: 'rgba(245,240,235,0.45)',
                      fontWeight: 700,
                      fontSize: '10px',
                      letterSpacing: '1px',
                      '&:hover': { color: '#c9a96e', backgroundColor: 'transparent' },
                    }}
                  >
                    EXPLORE
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* ── Products modal ── */}
        <Dialog
          open={Boolean(selectedBrand)}
          onClose={() => setSelectedBrand(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: '4px',
              backgroundColor: '#0e0e0e',
              border: '1px solid rgba(201,169,110,0.18)',
              backgroundImage: 'none',
              boxShadow: '0 32px 80px rgba(0,0,0,0.85)',
            },
          }}
        >
          {selectedBrand && (
            <>
              <DialogTitle
                sx={{
                  px: 4,
                  pt: 4,
                  pb: 2.5,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <Box>
                  <Typography
                    sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '3px', color: '#c9a96e', textTransform: 'uppercase', mb: 1 }}
                  >
                    {selectedBrand.category} · {selectedBrand.origin}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '36px',
                        letterSpacing: '2px',
                        color: '#f5f0eb',
                        lineHeight: 1,
                      }}
                    >
                      {selectedBrand.name}
                    </Typography>
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '11px !important', color: '#c9a96e !important' }} />}
                      label={selectedBrand.badge}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(201,169,110,0.08)',
                        color: '#c9a96e',
                        fontWeight: 600,
                        fontSize: '9px',
                        border: '1px solid rgba(201,169,110,0.18)',
                      }}
                    />
                  </Box>
                  <Typography sx={{ fontSize: '13px', color: 'rgba(245,240,235,0.35)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                    {selectedBrand.tagline}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => setSelectedBrand(null)}
                  sx={{
                    color: 'rgba(245,240,235,0.35)',
                    mt: '-4px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                    '&:hover': { color: '#f5f0eb', borderColor: 'rgba(255,255,255,0.2)' },
                  }}
                >
                  <CloseIcon sx={{ fontSize: '16px' }} />
                </IconButton>
              </DialogTitle>

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)' }} />

              <DialogContent sx={{ px: 4, py: 3.5 }}>
                <Typography
                  sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '3px', color: '#c9a96e', textTransform: 'uppercase', display: 'block', mb: 3.5 }}
                >
                  {selectedBrand.products.length} Products Available In Store
                </Typography>

                <Grid container spacing={2.5}>
                  {selectedBrand.products.map((product) => (
                    <Grid item xs={12} sm={6} key={product.id}>
                      <Box
                        sx={{
                          p: 3,
                          borderRadius: '3px',
                          border: '1px solid rgba(255,255,255,0.07)',
                          backgroundColor: '#111111',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          transition: 'border-color 0.2s',
                          '&:hover': { borderColor: 'rgba(201,169,110,0.2)' },
                        }}
                      >
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Chip
                              label={product.category}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(201,169,110,0.07)',
                                color: '#c9a96e',
                                border: '1px solid rgba(201,169,110,0.15)',
                                fontSize: '9px',
                                letterSpacing: '0.5px',
                              }}
                            />
                            <Rating value={product.rating} precision={0.1} size="small" readOnly sx={{ color: '#c9a96e' }} />
                          </Box>
                          <Typography sx={{ fontWeight: 700, color: '#f5f0eb', mb: 0.75, fontSize: '15px', lineHeight: 1.3 }}>
                            {product.name}
                          </Typography>
                          <Typography sx={{ color: 'rgba(245,240,235,0.4)', fontSize: '13px', lineHeight: 1.7, mb: 2.5 }}>
                            {product.description}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2.5, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                          <Typography sx={{ color: '#c9a96e', fontWeight: 800, fontSize: '17px', letterSpacing: '0.5px' }}>
                            {product.price}
                          </Typography>
                          <Button
                            size="small"
                            variant="contained"
                            startIcon={<ShoppingBagIcon sx={{ fontSize: '14px !important' }} />}
                            href={`https://wa.me/919390933899?text=Hi%2C%20is%20${encodeURIComponent(selectedBrand.name + ' – ' + product.name)}%20available%3F`}
                            target="_blank"
                            sx={{
                              background: 'linear-gradient(120deg, #e8c98a 0%, #c9a96e 50%, #9a7a3e 100%)',
                              color: '#050505',
                              fontSize: '10px',
                              fontWeight: 800,
                              letterSpacing: '1px',
                              px: 2.5,
                              borderRadius: '3px',
                              '&:hover': { boxShadow: '0 4px 16px rgba(201,169,110,0.4)' },
                            }}
                          >
                            INQUIRE
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default BrandsPage;
