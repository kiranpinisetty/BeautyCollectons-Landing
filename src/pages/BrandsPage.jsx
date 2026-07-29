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
    <Box sx={{ py: { xs: 8, md: 12 }, px: 2, minHeight: '85vh', backgroundColor: '#f9fafb' }}>
      <Container maxWidth="lg">

        {/* Page Header */}
        <Box sx={{ mb: 7 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{ color: '#111827', fontWeight: 600, mb: 3, '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' } }}
          >
            Back to Home
          </Button>

          <Typography
            variant="overline"
            sx={{ color: '#c5a059', fontWeight: 700, letterSpacing: '3px', fontSize: '11px', display: 'block', mb: 1 }}
          >
            WHAT WE STOCK
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', md: '40px' },
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
              color: '#111827',
              mb: 1.5,
              letterSpacing: '-0.5px',
            }}
          >
            Available Brands
          </Typography>

          <Typography variant="body1" sx={{ color: '#6b7280', maxWidth: '600px', fontSize: '15px', lineHeight: 1.7 }}>
            We carry 100% authentic products from world-class beauty brands. Click on any brand to view available products in our store.
          </Typography>
        </Box>

        {/* Search */}
        <Box sx={{ mb: 6, maxWidth: '460px' }}>
          <TextField
            fullWidth
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#9ca3af' }} />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                border: '1px solid #e5e7eb',
                '& fieldset': { border: 'none' },
              }
            }}
          />
        </Box>

        {/* Brands Grid */}
        <Grid container spacing={3}>
          {filteredBrands.map((brand) => (
            <Grid item xs={12} sm={6} md={4} key={brand.id}>
              <Card
                onClick={() => setSelectedBrand(brand)}
                sx={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: '#111827',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#111827', fontSize: '20px' }}
                    >
                      {brand.name}
                    </Typography>
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '13px !important', color: '#c5a059 !important' }} />}
                      label={brand.badge}
                      size="small"
                      sx={{ backgroundColor: '#f3f4f6', color: '#374151', fontWeight: 600, fontSize: '10px', ml: 1 }}
                    />
                  </Box>

                  <Typography variant="caption" sx={{ color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', mb: 1.5 }}>
                    {brand.category} · {brand.origin}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.6 }}>
                    {brand.description}
                  </Typography>
                </CardContent>

                <Box sx={{ px: 4, pb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', pt: 2 }}>
                  <Typography variant="caption" sx={{ color: '#374151', fontWeight: 700 }}>
                    {brand.products.length} products stocked
                  </Typography>
                  <Button
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ color: '#111827', fontWeight: 700, fontSize: '11px', '&:hover': { color: '#c5a059', backgroundColor: 'transparent' } }}
                  >
                    View Products
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Brand Products Modal */}
        <Dialog
          open={Boolean(selectedBrand)}
          onClose={() => setSelectedBrand(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: { borderRadius: '10px', backgroundColor: '#ffffff' }
          }}
        >
          {selectedBrand && (
            <>
              <DialogTitle sx={{ px: 4, pt: 4, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                    <Typography
                      variant="h4"
                      sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: '#111827' }}
                    >
                      {selectedBrand.name}
                    </Typography>
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '13px !important', color: '#c5a059 !important' }} />}
                      label={selectedBrand.badge}
                      size="small"
                      sx={{ backgroundColor: '#f3f4f6', color: '#374151', fontWeight: 600 }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    {selectedBrand.tagline} · {selectedBrand.origin}
                  </Typography>
                </Box>
                <IconButton onClick={() => setSelectedBrand(null)} sx={{ color: '#374151', mt: -0.5 }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <Divider />

              <DialogContent sx={{ px: 4, py: 3 }}>
                <Typography variant="overline" sx={{ color: '#c5a059', fontWeight: 700, letterSpacing: '2px', fontSize: '11px', display: 'block', mb: 3 }}>
                  AVAILABLE IN STORE — {selectedBrand.products.length} PRODUCTS
                </Typography>

                <Grid container spacing={3}>
                  {selectedBrand.products.map((product) => (
                    <Grid item xs={12} sm={6} key={product.id}>
                      <Box
                        sx={{
                          p: 3,
                          borderRadius: '8px',
                          border: '1px solid #e5e7eb',
                          backgroundColor: '#fafafa',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                            <Chip label={product.category} size="small" sx={{ backgroundColor: '#ffffff', color: '#374151', border: '1px solid #e5e7eb', fontSize: '10px' }} />
                            <Rating value={product.rating} precision={0.1} size="small" readOnly sx={{ color: '#c5a059' }} />
                          </Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#111827', mb: 0.5, fontSize: '15px' }}>
                            {product.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.6, mb: 2 }}>
                            {product.description}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: '1px solid #f0f0f0' }}>
                          <Typography sx={{ color: '#111827', fontWeight: 800, fontSize: '17px' }}>
                            {product.price}
                          </Typography>
                          <Button
                            size="small"
                            variant="contained"
                            startIcon={<ShoppingBagIcon />}
                            href={`https://wa.me/919390933899?text=Hi%2C%20is%20${encodeURIComponent(selectedBrand.name + ' – ' + product.name)}%20available%3F`}
                            target="_blank"
                            sx={{
                              backgroundColor: '#000000',
                              color: '#ffffff',
                              fontSize: '11px',
                              fontWeight: 700,
                              px: 2.5,
                              borderRadius: '4px',
                              '&:hover': { backgroundColor: '#374151' },
                            }}
                          >
                            Inquire
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
