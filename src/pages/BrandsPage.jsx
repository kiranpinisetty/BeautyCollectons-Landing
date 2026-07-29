import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Button, TextField, InputAdornment, Rating } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';
import { BRANDS } from '../data/brandsData';

const BrandsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Makeup', 'Skincare', 'Lipstick', 'Hair Care', 'Eye Care'];

  const filteredBrands = BRANDS.map(brand => {
    const matchesBrandSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                               brand.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchingProducts = brand.products.filter(p => {
      const matchesProductSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                   p.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesProductSearch && matchesCategory;
    });

    if ((matchesBrandSearch && selectedCategory === 'All') || matchingProducts.length > 0) {
      return {
        ...brand,
        productsToDisplay: selectedCategory === 'All' && !searchTerm ? brand.products : matchingProducts
      };
    }
    return null;
  }).filter(Boolean);

  return (
    <Box sx={{ py: 6, px: 2, minHeight: '80vh', backgroundColor: '#0a0a0a' }}>
      <Container maxWidth="lg">
        {/* Header Navigation & Title */}
        <Box sx={{ mb: 6 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{
              color: '#c9a84c',
              mb: 3,
              '&:hover': { backgroundColor: 'rgba(201, 168, 76, 0.1)' }
            }}
          >
            Back to Home
          </Button>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', md: '42px' },
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #e8cc7a 0%, #c9a84c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1
            }}
          >
            AUTHENTIC BEAUTY BRANDS
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#aaaaaa', maxWidth: '650px' }}>
            Explore 100% genuine products from leading Indian and global luxury cosmetics brands available at Sri Lakshmi Beauty Collections.
          </Typography>
        </Box>

        {/* Search & Filter Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            mb: 5,
            p: 3,
            backgroundColor: '#141414',
            borderRadius: '8px',
            border: '1px solid rgba(201, 168, 76, 0.2)'
          }}
        >
          <TextField
            fullWidth
            placeholder="Search brands or products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#c9a84c' }} />
                </InputAdornment>
              ),
              sx: { color: '#ffffff', backgroundColor: '#0a0a0a', borderRadius: '4px' }
            }}
          />

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setSelectedCategory(cat)}
                sx={{
                  backgroundColor: selectedCategory === cat ? '#c9a84c' : '#1e1e1e',
                  color: selectedCategory === cat ? '#000000' : '#ffffff',
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  border: '1px solid rgba(201, 168, 76, 0.3)',
                  '&:hover': { backgroundColor: '#e8cc7a', color: '#000000' }
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Brands Listing */}
        {filteredBrands.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8, color: '#888888' }}>
            <Typography variant="h6">No brands or products found matching your search.</Typography>
          </Box>
        ) : (
          filteredBrands.map((brand) => (
            <Box
              key={brand.id}
              sx={{
                mb: 6,
                p: { xs: 3, md: 4 },
                backgroundColor: '#141414',
                borderRadius: '12px',
                border: '1px solid rgba(201, 168, 76, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Brand Header */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 3, gap: 2 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 800,
                        color: '#ffffff'
                      }}
                    >
                      {brand.name}
                    </Typography>
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '16px !important', color: '#c9a84c !important' }} />}
                      label={brand.badge}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(201, 168, 76, 0.15)',
                        color: '#c9a84c',
                        borderColor: 'rgba(201, 168, 76, 0.4)',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        fontWeight: 700
                      }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ color: '#888888', mb: 1 }}>
                    Origin: <strong>{brand.origin}</strong> • Category: <strong>{brand.category}</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#cccccc', maxWidth: '700px' }}>
                    {brand.description}
                  </Typography>
                </Box>
              </Box>

              {/* Brand Products Grid */}
              <Typography variant="h6" sx={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', color: '#c9a84c', mb: 2 }}>
                Available Products ({brand.productsToDisplay.length})
              </Typography>

              <Grid container spacing={2}>
                {brand.productsToDisplay.map((product) => (
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card
                      sx={{
                        backgroundColor: '#1c1c1c',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '8px',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: '#c9a84c',
                          boxShadow: '0 4px 20px rgba(201, 168, 76, 0.2)'
                        }
                      }}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Chip label={product.category} size="small" sx={{ backgroundColor: '#2a2a2a', color: '#aaaaaa', fontSize: '10px' }} />
                          <Rating value={product.rating} precision={0.1} size="small" readOnly sx={{ color: '#c9a84c' }} />
                        </Box>

                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff', mb: 1 }}>
                          {product.name}
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                          <Typography variant="h6" sx={{ color: '#c9a84c', fontWeight: 800, fontSize: '18px' }}>
                            {product.price}
                          </Typography>
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<ShoppingBagIcon />}
                            href="https://wa.me/919390933899"
                            target="_blank"
                            sx={{
                              borderColor: '#c9a84c',
                              color: '#c9a84c',
                              fontSize: '11px',
                              fontWeight: 700,
                              '&:hover': { backgroundColor: '#c9a84c', color: '#000000' }
                            }}
                          >
                            Inquire
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))
        )}
      </Container>
    </Box>
  );
};

export default BrandsPage;
