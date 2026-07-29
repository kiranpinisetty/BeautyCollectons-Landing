import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
  Rating
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
    <Box sx={{ py: 6, px: 2, minHeight: '85vh', backgroundColor: '#f9fafb' }}>
      <Container maxWidth="lg">
        {/* Navigation & Header */}
        <Box sx={{ mb: 5 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{
              color: '#111827',
              fontWeight: 600,
              mb: 2,
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' }
            }}
          >
            Back to Home
          </Button>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', md: '40px' },
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
              color: '#111827',
              mb: 1,
              letterSpacing: '-0.5px'
            }}
          >
            AVAILABLE BRANDS
          </Typography>

          <Typography variant="body1" sx={{ color: '#6b7280', maxWidth: '650px' }}>
            We stock 100% authentic cosmetics, skincare, and hair care products from world-class brands. Select a brand below to view available products in store.
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ mb: 5, maxWidth: '500px' }}>
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
                '& fieldset': { border: 'none' }
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
                  p: 1,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease-in-out',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: '#111827',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.08)'
                  }
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        color: '#111827',
                        fontSize: '20px'
                      }}
                    >
                      {brand.name}
                    </Typography>

                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '14px !important', color: '#c5a059 !important' }} />}
                      label={brand.badge}
                      size="small"
                      sx={{
                        backgroundColor: '#f3f4f6',
                        color: '#111827',
                        fontWeight: 600,
                        fontSize: '10px'
                      }}
                    />
                  </Box>

                  <Typography variant="caption" sx={{ color: '#c5a059', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', mb: 1 }}>
                    {brand.category} • {brand.origin}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.5, mb: 2 }}>
                    {brand.description}
                  </Typography>
                </CardContent>

                <Box sx={{ px: 2.5, pb: 2.5, pt: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6' }}>
                  <Typography variant="caption" sx={{ color: '#111827', fontWeight: 700, mt: 1.5 }}>
                    {brand.products.length} Products Stocked
                  </Typography>

                  <Button
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      color: '#111827',
                      fontWeight: 700,
                      fontSize: '11px',
                      mt: 1.5,
                      '&:hover': { color: '#c5a059', backgroundColor: 'transparent' }
                    }}
                  >
                    View Products
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Brand Products Modal Window */}
        <Dialog
          open={Boolean(selectedBrand)}
          onClose={() => setSelectedBrand(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: '12px',
              p: { xs: 1, sm: 2 },
              backgroundColor: '#ffffff'
            }
          }}
        >
          {selectedBrand && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', pb: 1 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 800,
                        color: '#111827'
                      }}
                    >
                      {selectedBrand.name}
                    </Typography>
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '14px !important', color: '#c5a059 !important' }} />}
                      label={selectedBrand.badge}
                      size="small"
                      sx={{ backgroundColor: '#f3f4f6', color: '#111827', fontWeight: 600 }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ color: '#6b7280', mt: 0.5 }}>
                    {selectedBrand.tagline} • Origin: {selectedBrand.origin}
                  </Typography>
                </Box>

                <IconButton onClick={() => setSelectedBrand(null)} sx={{ color: '#111827' }}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              <Divider sx={{ my: 1 }} />

              <DialogContent>
                <Typography variant="subtitle2" sx={{ color: '#111827', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', mb: 2 }}>
                  Available Products in Store ({selectedBrand.products.length})
                </Typography>

                <Grid container spacing={2}>
                  {selectedBrand.products.map((product) => (
                    <Grid item xs={12} sm={6} key={product.id}>
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: '8px',
                          border: '1px solid #e5e7eb',
                          backgroundColor: '#fafafa',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justify: 'space-between'
                        }}
                      >
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Chip label={product.category} size="small" sx={{ backgroundColor: '#ffffff', color: '#111827', border: '1px solid #e5e7eb', fontSize: '10px' }} />
                            <Rating value={product.rating} precision={0.1} size="small" readOnly sx={{ color: '#c5a059' }} />
                          </Box>

                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#111827', mb: 0.5 }}>
                            {product.name}
                          </Typography>

                          <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '12px', mb: 2, lineHeight: 1.5 }}>
                            {product.description}
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1.5, borderTop: '1px solid #f0f0f0' }}>
                          <Typography variant="h6" sx={{ color: '#111827', fontWeight: 800, fontSize: '16px' }}>
                            {product.price}
                          </Typography>

                          <Button
                            size="small"
                            variant="contained"
                            startIcon={<ShoppingBagIcon />}
                            href={`https://wa.me/919390933899?text=Hi,%20is%20${encodeURIComponent(selectedBrand.name + ' ' + product.name)}%20available?`}
                            target="_blank"
                            sx={{
                              backgroundColor: '#000000',
                              color: '#ffffff',
                              fontSize: '11px',
                              fontWeight: 700,
                              px: 2,
                              '&:hover': { backgroundColor: '#374151' }
                            }}
                          >
                            Inquire Store
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
