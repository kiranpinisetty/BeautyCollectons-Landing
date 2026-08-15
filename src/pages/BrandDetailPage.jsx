import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { BRANDS } from '../data/brandsData';

/* ── Palette ─────────────────────────────────────────── */
const C = {
  ivory: '#FAF8F5',
  ivory2: '#F5F2EE',
  ivory3: '#EDE9E4',
  charcoal: '#1A1A1A',
  charcoalDim: 'rgba(26,26,26,0.55)',
  charcoalFaint: 'rgba(26,26,26,0.35)',
  charcoalGhost: 'rgba(26,26,26,0.12)',
  burgundy: '#7A1F3D',
  burgundyLight: '#9B2D52',
  burgundyFaint: 'rgba(122,31,61,0.08)',
  burgundyGlow: 'rgba(122,31,61,0.2)',
  champagne: '#C8A882',
  muted: '#9A9290',
  white: '#FFFFFF',
};

/* ── Mock products per brand ─────────────────────────── */
const generateBrandProducts = (brandName, brandId, categories) => {
  const productTemplates = {
    Makeup: [
      { name: 'Signature Foundation', category: 'Foundation', price: '₹2,499', rating: 4.8, desc: 'Buildable coverage with a natural, skin-like finish. Stays fresh for 16 hours.' },
      { name: 'Velvet Matte Lipstick', category: 'Lipstick', price: '₹1,799', rating: 4.7, desc: 'Intense pigment, feather-proof formula with a luxurious velvet matte finish.' },
      { name: 'Precision Eye Palette', category: 'Eye Makeup', price: '₹3,299', rating: 4.9, desc: 'Curated shades from matte to shimmer for infinite eye looks.' },
      { name: 'Luminous Highlighter', category: 'Face', price: '₹2,199', rating: 4.6, desc: 'Blinding, multi-dimensional highlight that sits beautifully on all skin tones.' },
    ],
    Skincare: [
      { name: 'Radiance Serum', category: 'Serum', price: '₹3,499', rating: 4.9, desc: 'Brightening vitamin C complex serum for a visible glow in 4 weeks.' },
      { name: 'Hydrating Moisturiser', category: 'Moisturiser', price: '₹2,899', rating: 4.8, desc: 'Whipped, lightweight daily moisturiser with 72-hour hydration lock.' },
      { name: 'SPF 50+ Sunscreen', category: 'Sunscreen', price: '₹1,499', rating: 4.7, desc: 'Broad-spectrum protection with a silky, zero-white-cast finish.' },
      { name: 'Barrier Repair Cream', category: 'Treatment', price: '₹2,199', rating: 4.8, desc: 'Ceramide-rich formula that visibly strengthens the skin barrier overnight.' },
    ],
    Haircare: [
      { name: 'Repair & Restore Shampoo', category: 'Shampoo', price: '₹1,299', rating: 4.7, desc: 'Bond-building cleanser that reverses damage from the first wash.' },
      { name: 'Nourishing Hair Mask', category: 'Mask', price: '₹1,899', rating: 4.8, desc: 'Deep conditioning treatment that rebuilds strength and adds luminous shine.' },
      { name: 'Frizz Control Serum', category: 'Serum', price: '₹1,599', rating: 4.6, desc: 'Featherweight oil serum that eliminates frizz and seals split ends.' },
      { name: 'Leave-In Conditioner', category: 'Conditioner', price: '₹1,199', rating: 4.7, desc: 'Lightweight leave-in that detangles, protects, and boosts softness.' },
    ],
    Fragrance: [
      { name: 'Signature Eau de Parfum', category: 'Fragrance', price: '₹6,999', rating: 4.9, desc: 'An opulent, long-lasting fragrance that opens with floral and closes with warm musk.' },
      { name: 'Body Mist', category: 'Body Mist', price: '₹1,999', rating: 4.6, desc: 'Lighter, everyday take on the signature scent for all-day freshness.' },
    ],
  };

  const primaryCategory = categories.find(c => productTemplates[c]) || 'Makeup';
  const templates = productTemplates[primaryCategory] || productTemplates['Makeup'];

  return templates.map((t, i) => ({
    id: `${brandId}-${i + 1}`,
    ...t,
    brand: brandName,
  }));
};

/* ── PRODUCT CARD ────────────────────────────────────── */
const ProductCard = ({ product, brandName }) => {
  const [hovered, setHovered] = useState(false);
  const whatsappMsg = `Hi, I'm interested in ${brandName} – ${product.name}. Is it available?`;

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        backgroundColor: C.white,
        border: `1px solid ${hovered ? 'rgba(122,31,61,0.2)' : C.charcoalGhost}`,
        borderRadius: '4px',
        p: 3,
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 12px 32px rgba(26,26,26,0.07)' : '0 2px 6px rgba(26,26,26,0.02)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Category */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box sx={{ fontSize: '9px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: C.burgundy, border: `1px solid rgba(122,31,61,0.2)`, borderRadius: '2px', px: 1.5, py: 0.5 }}>
          {product.category}
        </Box>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {[1, 2, 3, 4, 5].map(s => (
            <Box key={s} sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: s <= Math.round(product.rating) ? C.burgundy : C.charcoalGhost }} />
          ))}
        </Box>
      </Box>

      <Typography sx={{ fontWeight: 700, color: C.charcoal, mb: 1, fontSize: '15px', lineHeight: 1.3, flexGrow: 1 }}>
        {product.name}
      </Typography>
      <Typography sx={{ color: C.charcoalDim, fontSize: '12px', lineHeight: 1.75, mb: 2.5 }}>
        {product.desc}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: `1px solid ${C.charcoalGhost}` }}>
        <Typography sx={{ color: C.burgundy, fontWeight: 800, fontSize: '16px', letterSpacing: '0.3px', fontFamily: "'Playfair Display', serif" }}>
          {product.price}
        </Typography>
        <Box
          component="a"
          href={`https://wa.me/919390933899?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            px: 2.5, py: 1,
            backgroundColor: C.burgundy,
            color: '#FAF8F5',
            fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
            borderRadius: '3px', textDecoration: 'none',
            transition: 'background-color 0.2s, box-shadow 0.2s',
            '&:hover': { backgroundColor: C.burgundyLight, boxShadow: '0 4px 16px rgba(122,31,61,0.4)' },
          }}
        >
          Enquire
        </Box>
      </Box>
    </Box>
  );
};

/* ── BRAND DETAIL PAGE ───────────────────────────────── */
const BrandDetailPage = () => {
  const { brandSlug } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const brand = BRANDS.find(b => b.slug === brandSlug);

  if (!brand) {
    return (
      <Box sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: C.ivory }}>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', color: C.charcoalFaint, mb: 2 }}>Brand not found</Typography>
        <Typography sx={{ fontSize: '14px', color: C.muted, mb: 4 }}>We couldn't find a brand with that name.</Typography>
        <Box
          component="button"
          onClick={() => navigate('/brands')}
          sx={{ px: 4, py: 1.5, backgroundColor: C.burgundy, color: '#FAF8F5', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Back to Brands
        </Box>
      </Box>
    );
  }

  const products = generateBrandProducts(brand.name, brand.id, brand.categories);
  const productCategories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);

  return (
    <Box sx={{ backgroundColor: C.ivory, minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <Box sx={{
        backgroundColor: C.ivory,
        pt: { xs: '60px', md: '80px' },
        pb: { xs: '56px', md: '72px' },
        borderBottom: `1px solid ${C.charcoalGhost}`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* bg glow */}
        <Box sx={{ position: 'absolute', top: '-100px', right: '-80px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(200,168,130,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <Container maxWidth="lg">
          {/* Back nav */}
          <Box
            component="button"
            onClick={() => navigate('/brands')}
            aria-label="Back to all brands"
            sx={{
              display: 'flex', alignItems: 'center', gap: 1,
              background: 'none', border: 'none', cursor: 'pointer',
              color: C.charcoalFaint, mb: 6, p: 0,
              fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: 'color 0.2s',
              '&:hover': { color: C.burgundy },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: '15px' }} />
            All Brands
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 10 }, alignItems: 'center' }}>

            {/* Left */}
            <Box sx={{ animation: 'fadeUp 0.6s ease both' }}>
              {/* Category tags */}
              <Box sx={{ display: 'flex', gap: 1.5, mb: 3, flexWrap: 'wrap' }}>
                {brand.categories.map(cat => (
                  <Box key={cat} sx={{ fontSize: '9px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: C.burgundy, border: `1px solid rgba(122,31,61,0.25)`, borderRadius: '2px', px: 2, py: 0.75 }}>
                    {cat}
                  </Box>
                ))}
                {brand.homegrown && (
                  <Box sx={{ fontSize: '9px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#4a7c3f', border: '1px solid rgba(74,124,63,0.3)', borderRadius: '2px', px: 2, py: 0.75 }}>
                    Homegrown
                  </Box>
                )}
              </Box>

              {/* Brand name */}
              <Typography
                component="h1"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: { xs: '44px', md: '64px' },
                  fontWeight: 700, color: C.charcoal, lineHeight: 1.05, mb: 2,
                }}
              >
                {brand.name}
              </Typography>

              {/* Tagline */}
              {brand.tagline && (
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '16px', fontStyle: 'italic', color: C.burgundy, mb: 3 }}>
                  {brand.tagline}
                </Typography>
              )}

              <Typography sx={{ fontSize: '14px', color: C.charcoalDim, lineHeight: 1.85, mb: 5, maxWidth: '460px' }}>
                {brand.description}
              </Typography>

              {/* Meta */}
              <Box sx={{ display: 'flex', gap: 5, mb: 5 }}>
                {[
                  { label: 'Country', val: brand.country || '—' },
                  { label: 'Products', val: `${brand.productCount}+` },
                  { label: 'In Store', val: 'Available' },
                ].map(({ label, val }) => (
                  <Box key={label}>
                    <Typography sx={{ fontSize: '10px', color: C.muted, letterSpacing: '2px', textTransform: 'uppercase', mb: 0.5 }}>{label}</Typography>
                    <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: C.charcoal }}>{val}</Typography>
                  </Box>
                ))}
              </Box>

              {/* CTA */}
              <Box
                component="a"
                href={`https://wa.me/919390933899?text=${encodeURIComponent(`Hi, I'm interested in products from ${brand.name}. Can you tell me what's available?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1.5,
                  px: 4, py: 2,
                  backgroundColor: C.burgundy, color: '#FAF8F5',
                  fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                  borderRadius: '4px', textDecoration: 'none',
                  transition: 'background-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  '&:hover': { backgroundColor: C.burgundyLight, boxShadow: '0 8px 32px rgba(122,31,61,0.4)', transform: 'translateY(-2px)' },
                }}
              >
                Shop All Products <NorthEastIcon sx={{ fontSize: '14px' }} />
              </Box>
            </Box>

            {/* Right: visual */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', position: 'relative', height: '360px' }}>
              {/* Main brand card */}
              <Box sx={{
                position: 'absolute', inset: '10% 0 10% 10%',
                backgroundColor: C.ivory3, borderRadius: '4px',
                border: `1px solid ${C.charcoalGhost}`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                p: 5,
              }}>
                <Typography sx={{
                  fontFamily: brand.name.length > 14 ? "'Playfair Display', serif" : "'Bebas Neue', sans-serif",
                  fontSize: brand.name.length > 14 ? '36px' : '52px',
                  fontWeight: 700, color: C.charcoal,
                  letterSpacing: brand.name.length > 14 ? '1px' : '3px',
                  textAlign: 'center', lineHeight: 1.1,
                }}>
                  {brand.name}
                </Typography>
                {brand.tagline && (
                  <Typography sx={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '13px', color: C.charcoalDim, mt: 2, textAlign: 'center' }}>
                    {brand.tagline}
                  </Typography>
                )}
              </Box>
              {/* Burgundy badge */}
              <Box sx={{
                position: 'absolute', top: '8%', left: '0',
                backgroundColor: C.burgundy, borderRadius: '4px',
                px: 3, py: 2,
                animation: 'float 5s ease-in-out infinite',
              }}>
                <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2.5px', color: '#FAF8F5', textTransform: 'uppercase' }}>
                  {brand.categories[0]}
                </Typography>
              </Box>
              {/* Country accent */}
              <Box sx={{
                position: 'absolute', bottom: '8%', left: '2%',
                backgroundColor: C.ivory2, borderRadius: '4px',
                border: `1px solid ${C.charcoalGhost}`,
                px: 3, py: 1.5,
                animation: 'floatAlt 6s ease-in-out infinite',
              }}>
                <Typography sx={{ fontSize: '11px', color: C.charcoalDim, letterSpacing: '1px' }}>📍 {brand.country}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Products ── */}
      <Box sx={{ py: { xs: '56px', md: '80px' }, backgroundColor: C.ivory2 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <Box sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: C.burgundy, display: 'block', mb: 2 }}>
              Products
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3, mb: 5 }}>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '26px', md: '34px' }, fontWeight: 700, color: C.charcoal }}>
                Available at Our Store
              </Typography>
              <Typography sx={{ fontSize: '13px', color: C.muted }}>
                Contact us to enquire availability
              </Typography>
            </Box>

            {/* Product category filter */}
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              {productCategories.map(cat => {
                const active = activeFilter === cat;
                return (
                  <Box
                    key={cat}
                    component="button"
                    onClick={() => setActiveFilter(cat)}
                    sx={{
                      px: 3, py: 1.25,
                      borderRadius: '40px',
                      border: `1px solid ${active ? C.burgundy : C.charcoalGhost}`,
                      backgroundColor: active ? C.burgundy : C.white,
                      color: active ? '#FAF8F5' : C.charcoalDim,
                      fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                      cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif",
                      transition: 'all 0.2s',
                      outline: 'none',
                      '&:hover': { borderColor: C.burgundy, color: active ? '#FAF8F5' : C.burgundy },
                      '&:focus-visible': { boxShadow: `0 0 0 3px ${C.burgundyGlow}` },
                    }}
                  >
                    {cat}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Products grid */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 2.5,
          }}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} brandName={brand.name} />
            ))}
          </Box>

          {/* Enquire CTA */}
          <Box sx={{
            mt: 8, p: { xs: 4, md: 6 },
            backgroundColor: C.white,
            border: `1px solid ${C.charcoalGhost}`,
            borderRadius: '4px',
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between', gap: 4,
          }}>
            <Box>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '22px', md: '28px' }, fontWeight: 700, color: C.charcoal, mb: 1 }}>
                Can't find what you're looking for?
              </Typography>
              <Typography sx={{ fontSize: '14px', color: C.charcoalDim, lineHeight: 1.7 }}>
                Our store carries more {brand.name} products than listed. Reach out and we'll help you find exactly what you need.
              </Typography>
            </Box>
            <Box
              component="a"
              href={`https://wa.me/919390933899?text=${encodeURIComponent(`Hi, I'm looking for more products from ${brand.name}. Can you help?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                flexShrink: 0,
                display: 'inline-flex', alignItems: 'center', gap: 1.5,
                px: 4, py: 2,
                backgroundColor: C.burgundy, color: '#FAF8F5',
                fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                borderRadius: '4px', textDecoration: 'none', whiteSpace: 'nowrap',
                transition: 'background-color 0.2s, transform 0.2s',
                '&:hover': { backgroundColor: C.burgundyLight, transform: 'translateY(-2px)' },
              }}
            >
              Chat on WhatsApp <NorthEastIcon sx={{ fontSize: '14px' }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Related Brands ── */}
      <RelatedBrands brand={brand} />

    </Box>
  );
};

/* ── RELATED BRANDS ──────────────────────────────────── */
const RelatedBrands = ({ brand }) => {
  const navigate = useNavigate();
  const related = BRANDS
    .filter(b => b.id !== brand.id && b.categories.some(c => brand.categories.includes(c)))
    .slice(0, 4);

  if (!related.length) return null;

  return (
    <Box sx={{ backgroundColor: C.ivory, py: { xs: '56px', md: '72px' }, borderTop: `1px solid ${C.charcoalGhost}` }}>
      <Container maxWidth="lg">
        <Box sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: C.burgundy, display: 'block', mb: 2 }}>
          You Might Also Like
        </Box>
        <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '24px', md: '32px' }, fontWeight: 700, color: C.charcoal, mb: 6 }}>
          Similar Brands
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
          {related.map(rb => {
            const [hovered, setHovered] = useState(false);
            return (
              <Box
                key={rb.id}
                role="button"
                tabIndex={0}
                aria-label={`View ${rb.name}`}
                onClick={() => navigate(`/brands/${rb.slug}`)}
                onKeyDown={e => e.key === 'Enter' && navigate(`/brands/${rb.slug}`)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                  backgroundColor: C.white,
                  border: `1px solid ${hovered ? 'rgba(122,31,61,0.2)' : C.charcoalGhost}`,
                  borderRadius: '4px', p: 3,
                  cursor: 'pointer', transition: 'all 0.25s ease',
                  transform: hovered ? 'translateY(-3px)' : 'none',
                  boxShadow: hovered ? '0 12px 32px rgba(26,26,26,0.07)' : '0 2px 6px rgba(26,26,26,0.02)',
                  outline: 'none',
                  '&:focus-visible': { boxShadow: `0 0 0 3px rgba(122,31,61,0.2)` },
                }}
              >
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', fontWeight: 700, color: hovered ? C.burgundy : C.charcoal, mb: 1, transition: 'color 0.2s' }}>
                  {rb.name}
                </Typography>
                <Typography sx={{ fontSize: '10px', color: C.burgundy, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', mb: 1.5 }}>
                  {rb.categories[0]}
                </Typography>
                <Typography sx={{ fontSize: '11px', color: C.muted }}>
                  {rb.productCount} products
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default BrandDetailPage;
