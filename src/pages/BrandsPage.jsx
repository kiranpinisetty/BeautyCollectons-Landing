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
        backgroundColor: '#FAF8F5',
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
          background: 'radial-gradient(ellipse, rgba(122,31,61,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

        {/* ── Back button ── */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{
            color: 'rgba(26,26,26,0.5)',
            fontWeight: 600,
            mb: 5,
            fontSize: '11px',
            letterSpacing: '1px',
            '&:hover': { color: '#7A1F3D', backgroundColor: 'transparent' },
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
              <Box sx={{ width: 24, height: '1px', backgroundColor: '#7A1F3D' }} />
              <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', color: '#7A1F3D', textTransform: 'uppercase' }}>
                Brands You'll Find Here
              </Typography>
            </Box>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: { xs: '52px', md: '80px' },
                letterSpacing: '2px',
                color: '#F7F5F2',
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
                color: 'rgba(26,26,26,0.45)',
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
                  <SearchIcon sx={{ color: 'rgba(26,26,26,0.3)', fontSize: '18px' }} />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(26,26,26,0.12)',
                borderRadius: '4px',
                color: '#1A1A1A',
                fontSize: '13px',
                minWidth: { xs: '100%', md: '280px' },
                '& fieldset': { border: 'none' },
                '&:hover': { borderColor: 'rgba(122,31,61,0.3)' },
                transition: 'border-color 0.2s',
              },
            }}
            inputProps={{ style: { color: '#1A1A1A', padding: '12px 14px' } }}
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
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(26,26,26,0.08)',
                  borderRadius: '3px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
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
                    background: 'linear-gradient(90deg, transparent, #7A1F3D, transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  },
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'rgba(122,31,61,0.2)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
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
                        color: '#1A1A1A',
                        fontSize: '20px',
                        lineHeight: 1.2,
                      }}
                    >
                      {brand.name}
                    </Typography>
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '11px !important', color: '#7A1F3D !important' }} />}
                      label={brand.badge}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(122,31,61,0.08)',
                        color: '#7A1F3D',
                        fontWeight: 600,
                        fontSize: '9px',
                        letterSpacing: '0.5px',
                        border: '1px solid rgba(122,31,61,0.2)',
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
                      color: '#7A1F3D',
                      display: 'block',
                      mb: 2,
                    }}
                  >
                    {brand.category} · {brand.origin}
                  </Typography>

                  <Typography sx={{ color: 'rgba(26,26,26,0.45)', fontSize: '13px', lineHeight: 1.75 }}>
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
                    borderTop: '1px solid rgba(26,26,26,0.08)',
                  }}
                >
                  <Typography sx={{ fontSize: '10px', color: 'rgba(26,26,26,0.3)', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {brand.products.length} products in store
                  </Typography>
                  <Button
                    size="small"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: '13px !important' }} />}
                    sx={{
                      color: 'rgba(26,26,26,0.45)',
                      fontWeight: 700,
                      fontSize: '10px',
                      letterSpacing: '1px',
                      '&:hover': { color: '#7A1F3D', backgroundColor: 'transparent' },
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
              backgroundColor: '#FDFBF9',
              border: '1px solid rgba(122,31,61,0.15)',
              backgroundImage: 'none',
              boxShadow: '0 32px 80px rgba(26,26,26,0.18)',
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
                    sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '3px', color: '#7A1F3D', textTransform: 'uppercase', mb: 1 }}
                  >
                    {selectedBrand.category} · {selectedBrand.origin}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '36px',
                        letterSpacing: '2px',
                        color: '#1A1A1A',
                        lineHeight: 1,
                      }}
                    >
                      {selectedBrand.name}
                    </Typography>
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '11px !important', color: '#7A1F3D !important' }} />}
                      label={selectedBrand.badge}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(122,31,61,0.08)',
                        color: '#7A1F3D',
                        fontWeight: 600,
                        fontSize: '9px',
                        border: '1px solid rgba(122,31,61,0.2)',
                      }}
                    />
                  </Box>
                  <Typography sx={{ fontSize: '13px', color: 'rgba(26,26,26,0.45)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                    {selectedBrand.tagline}
                  </Typography>
                </Box>
                <IconButton
                  onClick={() => setSelectedBrand(null)}
                  sx={{
                    color: 'rgba(26,26,26,0.4)',
                    mt: '-4px',
                    border: '1px solid rgba(26,26,26,0.12)',
                    borderRadius: '4px',
                    '&:hover': { color: '#1A1A1A', borderColor: 'rgba(122,31,61,0.3)' },
                  }}
                >
                  <CloseIcon sx={{ fontSize: '16px' }} />
                </IconButton>
              </DialogTitle>

              <Divider sx={{ borderColor: 'rgba(26,26,26,0.08)' }} />

              <DialogContent sx={{ px: 4, py: 3.5 }}>
                <Typography
                  sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '3px', color: '#7A1F3D', textTransform: 'uppercase', display: 'block', mb: 3.5 }}
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
                          border: '1px solid rgba(26,26,26,0.08)',
                          backgroundColor: '#F5F2EE',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          transition: 'border-color 0.2s',
                          '&:hover': { borderColor: 'rgba(122,31,61,0.25)' },
                        }}
                      >
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Chip
                              label={product.category}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(122,31,61,0.07)',
                                color: '#7A1F3D',
                                border: '1px solid rgba(122,31,61,0.18)',
                                fontSize: '9px',
                                letterSpacing: '0.5px',
                              }}
                            />
                            <Rating value={product.rating} precision={0.1} size="small" readOnly sx={{ color: '#7A1F3D' }} />
                          </Box>
                          <Typography sx={{ fontWeight: 700, color: '#1A1A1A', mb: 0.75, fontSize: '15px', lineHeight: 1.3 }}>
                            {product.name}
                          </Typography>
                          <Typography sx={{ color: 'rgba(26,26,26,0.5)', fontSize: '13px', lineHeight: 1.7, mb: 2.5 }}>
                            {product.description}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2.5, borderTop: '1px solid rgba(26,26,26,0.08)' }}>
                          <Typography sx={{ color: '#7A1F3D', fontWeight: 800, fontSize: '17px', letterSpacing: '0.5px' }}>
                            {product.price}
                          </Typography>
                          <Button
                            size="small"
                            variant="contained"
                            startIcon={<ShoppingBagIcon sx={{ fontSize: '14px !important' }} />}
                            href={`https://wa.me/919390933899?text=Hi%2C%20is%20${encodeURIComponent(selectedBrand.name + ' – ' + product.name)}%20available%3F`}
                            target="_blank"
                            sx={{
                              backgroundColor: '#7A1F3D',
                              color: '#F7F5F2',
                              fontSize: '10px',
                              fontWeight: 800,
                              letterSpacing: '1px',
                              px: 2.5,
                              borderRadius: '3px',
                              '&:hover': {
                                backgroundColor: '#9B2D52',
                                boxShadow: '0 4px 16px rgba(122,31,61,0.4)',
                              },
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
