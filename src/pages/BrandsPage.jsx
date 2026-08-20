import React, { useMemo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { BRANDS, BRAND_CATEGORIES, filterBrands } from '../data/brandsData';

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
  burgundyFaint: 'rgba(122,31,61,0.07)',
  burgundyGlow: 'rgba(122,31,61,0.15)',
  champagne: '#C8A882',
  muted: '#9A9290',
  white: '#FFFFFF',
};

const ALPHABET = ['#', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

const FEATURED_IDS = ['nars', 'fenty-beauty', 'charlotte-tilbury', 'huda-beauty', 'rare-beauty', 'kiko-milano'];
const POPULAR_IDS = ['mac', 'maybelline', 'sugar-cosmetics', 'minimalist', 'the-ordinary', 'k18', 'cerave', 'innisfree', 'olaplex', 'dot-and-key', 'loreal-paris', 'laneige'];

/* ── Sub-components ─────────────────────────────────────── */

/* Section label */
const SectionLabel = ({ children, sx = {} }) => (
  <Typography sx={{ fontSize: '10px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', color: C.burgundy, display: 'block', ...sx }}>
    {children}
  </Typography>
);

/* Thin divider line */
const Rule = ({ sx = {} }) => (
  <Box sx={{ height: '1px', backgroundColor: C.charcoalGhost, ...sx }} />
);

/* ── SEARCH INPUT ─────────────────────────────────────── */
const SearchInput = ({ value, onChange, placeholder = 'Search brands...', size = 'normal' }) => (
  <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
    <SearchIcon sx={{ position: 'absolute', left: 16, color: C.muted, fontSize: size === 'large' ? '20px' : '17px', pointerEvents: 'none', zIndex: 1 }} />
    <Box
      component="input"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label="Search brands"
      sx={{
        width: '100%',
        pl: size === 'large' ? '52px' : '44px',
        pr: value ? '44px' : '20px',
        py: size === 'large' ? '18px' : '13px',
        border: `1px solid ${C.charcoalGhost}`,
        borderRadius: '6px',
        backgroundColor: C.white,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: size === 'large' ? '16px' : '13px',
        color: C.charcoal,
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        '&::placeholder': { color: C.muted },
        '&:focus': { borderColor: C.burgundy, boxShadow: `0 0 0 3px ${C.burgundyFaint}` },
      }}
    />
    {value && (
      <Box
        component="button"
        onClick={() => onChange('')}
        aria-label="Clear search"
        sx={{
          position: 'absolute', right: 12, background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.muted, p: '4px', borderRadius: '50%',
          '&:hover': { color: C.charcoal, backgroundColor: C.ivory2 },
        }}
      >
        <CloseIcon sx={{ fontSize: '15px' }} />
      </Box>
    )}
  </Box>
);

/* ── HERO SECTION ─────────────────────────────────────── */
const HeroSection = ({ search, onSearchChange }) => (
  <Box
    sx={{
      backgroundColor: C.ivory,
      pt: { xs: '72px', md: '96px' },
      pb: { xs: '64px', md: '80px' },
      position: 'relative',
      overflow: 'hidden',
      borderBottom: `1px solid ${C.charcoalGhost}`,
    }}
  >
    {/* ambient bg decoration */}
    <Box sx={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(200,168,130,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
    <Box sx={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(122,31,61,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

    <Container maxWidth="lg">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, lg: 10 }, alignItems: 'center' }}>

        {/* ── Left: Copy + Search ── */}
        <Box sx={{ animation: 'fadeUp 0.7s ease both' }}>
          <SectionLabel sx={{ mb: 2.5 }}>The Beauty Collection · {BRANDS.length}+ Brands</SectionLabel>

          <Typography
            component="h1"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: { xs: '38px', sm: '52px', md: '62px' },
              fontWeight: 700,
              color: C.charcoal,
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Discover your<br />
            <Box component="em" sx={{ fontStyle: 'italic', color: C.burgundy }}>favourite brands.</Box>
          </Typography>

          <Typography sx={{ fontSize: '15px', color: C.charcoalDim, lineHeight: 1.85, mb: 5, maxWidth: '480px' }}>
            Explore iconic names, cult favourites, emerging labels and beauty innovators from around the world — all in one place.
          </Typography>

          {/* Search */}
          <SearchInput value={search} onChange={onSearchChange} placeholder="Search brands, categories, countries..." size="large" />

          {/* quick stats */}
          <Box sx={{ display: 'flex', gap: 4, mt: 4 }}>
            {[
              { n: `${BRANDS.length}+`, label: 'Brands' },
              { n: '12+', label: 'Categories' },
              { n: '100%', label: 'Authentic' },
            ].map(({ n, label }) => (
              <Box key={label}>
                <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: C.charcoal, lineHeight: 1 }}>{n}</Typography>
                <Typography sx={{ fontSize: '10px', color: C.muted, letterSpacing: '2px', textTransform: 'uppercase', mt: '4px' }}>{label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Right: Editorial composition ── */}
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            position: 'relative',
            height: '420px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Main panel */}
          <Box sx={{
            position: 'absolute', top: '10%', left: '15%', right: '0', bottom: '10%',
            backgroundColor: C.ivory3, borderRadius: '4px',
            border: `1px solid ${C.charcoalGhost}`,
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: 5,
          }}>
            {/* Decorative brand name stack */}
            {['NARS', 'Charlotte Tilbury', 'Fenty Beauty', 'Huda Beauty', 'KIKO Milano'].map((b, i) => (
              <Typography
                key={b}
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: `${22 - i * 2}px`,
                  fontWeight: i === 0 ? 700 : 400,
                  color: i === 0 ? C.charcoal : C.charcoalDim,
                  opacity: 1 - i * 0.15,
                  lineHeight: 1.5,
                  borderBottom: i < 4 ? `1px solid ${C.charcoalGhost}` : 'none',
                  py: '10px',
                }}
              >
                {b}
              </Typography>
            ))}
          </Box>
          {/* Floating accent card */}
          <Box sx={{
            position: 'absolute', top: '4%', left: '0%',
            backgroundColor: C.burgundy, borderRadius: '4px',
            p: 3, minWidth: '140px',
            animation: 'float 5s ease-in-out infinite',
            boxShadow: '0 12px 40px rgba(122,31,61,0.3)',
          }}>
            <Typography sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '30px', color: '#FAF8F5', lineHeight: 1, letterSpacing: '2px' }}>BRANDS</Typography>
            <Typography sx={{ fontSize: '10px', color: 'rgba(250,248,245,0.55)', letterSpacing: '3px', textTransform: 'uppercase', mt: '6px' }}>DIRECTORY</Typography>
          </Box>
          {/* Champagne accent pill */}
          <Box sx={{
            position: 'absolute', bottom: '6%', left: '2%',
            backgroundColor: C.champagne, borderRadius: '40px',
            px: 3, py: 1.5,
            animation: 'floatAlt 6s ease-in-out infinite',
          }}>
            <Typography sx={{ fontSize: '11px', fontWeight: 700, color: C.charcoal, letterSpacing: '1.5px', textTransform: 'uppercase' }}>100% Authentic</Typography>
          </Box>
        </Box>

      </Box>
    </Container>
  </Box>
);

/* ── FEATURED BRANDS ─────────────────────────────────── */
const FeaturedSection = ({ onBrandClick }) => {
  const featured = BRANDS.filter(b => FEATURED_IDS.includes(b.id));
  const [large, ...rest] = featured;
  const medium = rest.slice(0, 2);
  const small = rest.slice(2);

  const BrandCard = ({ brand, variant = 'medium' }) => {
    const [hovered, setHovered] = useState(false);
    const isLarge = variant === 'large';
    return (
      <Box
        role="button"
        tabIndex={0}
        aria-label={`Explore ${brand.name}`}
        onClick={() => onBrandClick(brand)}
        onKeyDown={e => e.key === 'Enter' && onBrandClick(brand)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          backgroundColor: C.white,
          border: `1px solid ${hovered ? 'rgba(122,31,61,0.25)' : C.charcoalGhost}`,
          borderRadius: '4px',
          p: isLarge ? { xs: 4, md: 5 } : 3.5,
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? '0 16px 48px rgba(26,26,26,0.08)' : '0 2px 8px rgba(26,26,26,0.03)',
          outline: 'none',
          '&:focus-visible': { boxShadow: `0 0 0 3px ${C.burgundyGlow}` },
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            {/* Category badge */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {brand.categories.slice(0, 2).map(cat => (
                <Box key={cat} sx={{ fontSize: '9px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: C.burgundy, border: `1px solid rgba(122,31,61,0.2)`, borderRadius: '2px', px: 1.5, py: 0.5 }}>
                  {cat}
                </Box>
              ))}
            </Box>
            {brand.country && (
              <Typography sx={{ fontSize: '9px', color: C.muted, letterSpacing: '1px', textTransform: 'uppercase' }}>{brand.country}</Typography>
            )}
          </Box>

          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isLarge ? { xs: '28px', md: '36px' } : '22px',
              fontWeight: 700,
              color: C.charcoal,
              lineHeight: 1.15,
              mb: 1.5,
            }}
          >
            {brand.name}
          </Typography>

          <Typography sx={{ fontSize: isLarge ? '14px' : '13px', color: C.charcoalDim, lineHeight: 1.75, mb: 2 }}>
            {isLarge ? brand.description : brand.shortDesc}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 2, borderTop: `1px solid ${C.charcoalGhost}` }}>
          <Typography sx={{ fontSize: '10px', color: C.muted, letterSpacing: '0.5px' }}>
            {brand.productCount} products
          </Typography>
          <Box sx={{
            display: 'flex', alignItems: 'center', gap: 0.5,
            fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
            color: hovered ? C.burgundy : C.charcoalFaint,
            transition: 'color 0.2s',
          }}>
            Explore Brand
            <ArrowForwardIcon sx={{ fontSize: '13px', transition: 'transform 0.2s', transform: hovered ? 'translateX(3px)' : 'none' }} />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ backgroundColor: C.ivory2, py: { xs: '64px', md: '96px' }, borderBottom: `1px solid ${C.charcoalGhost}` }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <SectionLabel sx={{ mb: 2 }}>Featured</SectionLabel>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '30px', md: '40px' }, fontWeight: 700, color: C.charcoal, lineHeight: 1.15 }}>
              Featured Brands
            </Typography>
            <Typography sx={{ fontSize: '13px', color: C.charcoalDim, fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
              The names defining beauty right now.
            </Typography>
          </Box>
        </Box>

        {/* Editorial asymmetric grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr', xl: '1.4fr 1fr' }, gridTemplateRows: { md: 'auto auto' }, gap: 2 }}>

          {/* Large feature card — spans 2 rows */}
          <Box sx={{ gridRow: { md: '1 / 3' } }}>
            {large && <BrandCard brand={large} variant="large" />}
          </Box>

          {/* Medium cards */}
          {medium.map(b => (
            <Box key={b.id}>
              <BrandCard brand={b} variant="medium" />
            </Box>
          ))}

          {/* Small cards in a row */}
          <Box sx={{ gridColumn: { md: '2' }, display: 'grid', gridTemplateColumns: `repeat(${small.length}, 1fr)`, gap: 2 }}>
            {small.map(b => (
              <BrandCard key={b.id} brand={b} variant="small" />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

/* ── CATEGORY FILTER ─────────────────────────────────── */
const CategorySection = ({ selectedCategory, onSelect }) => {
  const categories = ['All', ...BRAND_CATEGORIES];
  const scrollRef = useRef(null);

  return (
    <Box sx={{ backgroundColor: C.ivory, py: { xs: '48px', md: '64px' }, borderBottom: `1px solid ${C.charcoalGhost}` }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <SectionLabel sx={{ mb: 1.5 }}>Browse by Category</SectionLabel>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '24px', md: '32px' }, fontWeight: 700, color: C.charcoal }}>
            Explore by Beauty Category
          </Typography>
        </Box>

        <Box
          ref={scrollRef}
          role="group"
          aria-label="Filter by beauty category"
          sx={{
            display: 'flex',
            gap: 1.5,
            flexWrap: { xs: 'nowrap', md: 'wrap' },
            overflowX: { xs: 'auto', md: 'visible' },
            pb: { xs: 1, md: 0 },
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {categories.map(cat => {
            const active = selectedCategory === cat;
            return (
              <Box
                key={cat}
                component="button"
                role="radio"
                aria-checked={active}
                aria-label={`Filter by ${cat}`}
                onClick={() => onSelect(cat)}
                sx={{
                  flexShrink: 0,
                  px: { xs: 2.5, md: 3 },
                  py: { xs: 1.25, md: 1.5 },
                  borderRadius: '40px',
                  border: `1px solid ${active ? C.burgundy : C.charcoalGhost}`,
                  backgroundColor: active ? C.burgundy : C.white,
                  color: active ? '#FAF8F5' : C.charcoalDim,
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  outline: 'none',
                  '&:hover': {
                    borderColor: C.burgundy,
                    color: active ? '#FAF8F5' : C.burgundy,
                    backgroundColor: active ? C.burgundyLight : C.burgundyFaint,
                  },
                  '&:focus-visible': { boxShadow: `0 0 0 3px ${C.burgundyGlow}` },
                }}
              >
                {cat}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

/* ── POPULAR BRANDS ──────────────────────────────────── */
const PopularSection = ({ onBrandClick }) => {
  const popular = BRANDS.filter(b => POPULAR_IDS.includes(b.id));

  return (
    <Box sx={{ backgroundColor: C.ivory2, py: { xs: '64px', md: '80px' }, borderBottom: `1px solid ${C.charcoalGhost}` }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <SectionLabel sx={{ mb: 2 }}>Popular</SectionLabel>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '28px', md: '38px' }, fontWeight: 700, color: C.charcoal }}>
              Most Loved
            </Typography>
            <Typography sx={{ fontSize: '13px', color: C.charcoalDim, fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
              Brands our customers keep coming back to.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' },
            gap: 2,
          }}
        >
          {popular.map(brand => {
            const [hovered, setHovered] = useState(false);
            return (
              <Box
                key={brand.id}
                role="button"
                tabIndex={0}
                aria-label={`View ${brand.name}`}
                onClick={() => onBrandClick(brand)}
                onKeyDown={e => e.key === 'Enter' && onBrandClick(brand)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                  backgroundColor: C.white,
                  border: `1px solid ${hovered ? 'rgba(122,31,61,0.2)' : C.charcoalGhost}`,
                  borderRadius: '4px',
                  p: 2.5,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  transform: hovered ? 'translateY(-3px)' : 'none',
                  boxShadow: hovered ? '0 12px 32px rgba(26,26,26,0.07)' : '0 2px 6px rgba(26,26,26,0.02)',
                  textAlign: 'center',
                  outline: 'none',
                  '&:focus-visible': { boxShadow: `0 0 0 3px ${C.burgundyGlow}` },
                }}
              >
                {/* Logo / Name typographic treatment */}
                <Box sx={{
                  width: '100%', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: C.ivory2, borderRadius: '3px', mb: 2, transition: 'background-color 0.2s',
                  ...(hovered ? { backgroundColor: C.ivory3 } : {}),
                }}>
                  <Typography sx={{
                    fontFamily: brand.name.length > 10 ? "'Playfair Display', serif" : "'Bebas Neue', sans-serif",
                    fontSize: brand.name.length > 14 ? '11px' : brand.name.length > 10 ? '13px' : '18px',
                    fontWeight: 700,
                    color: C.charcoal,
                    letterSpacing: brand.name.length > 10 ? '0.5px' : '2px',
                    lineHeight: 1.2,
                    textAlign: 'center',
                    px: 1,
                  }}>
                    {brand.name}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '10px', fontWeight: 700, color: C.burgundy, letterSpacing: '1.5px', textTransform: 'uppercase', mb: 0.5 }}>
                  {brand.categories[0]}
                </Typography>
                <Typography sx={{ fontSize: '11px', color: C.muted }}>
                  {brand.productCount} products
                </Typography>
                {hovered && (
                  <Box sx={{ mt: 1.5, fontSize: '10px', color: C.burgundy, fontWeight: 700, letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    View <ArrowForwardIcon sx={{ fontSize: '11px' }} />
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

/* ── ALPHABET NAV ────────────────────────────────────── */
const AlphabetNav = ({ selectedLetter, onSelect, availableLetters }) => {
  const scrollRef = useRef(null);

  return (
    <Box
      sx={{
        position: 'sticky',
        top: '64px',
        zIndex: 100,
        backgroundColor: 'rgba(250,248,245,0.97)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.charcoalGhost}`,
        py: 1.5,
      }}
    >
      <Container maxWidth="lg">
        <Box
          ref={scrollRef}
          role="navigation"
          aria-label="Alphabetical brand navigation"
          sx={{
            display: 'flex',
            gap: { xs: '6px', md: '4px' },
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            justifyContent: { md: 'center' },
          }}
        >
          {['All', ...ALPHABET].map(letter => {
            const active = selectedLetter === letter;
            const hasItems = letter === 'All' || availableLetters.has(letter);
            return (
              <Box
                key={letter}
                component="button"
                aria-label={letter === 'All' ? 'Show all brands' : `Brands starting with ${letter}`}
                aria-current={active ? 'true' : undefined}
                onClick={() => hasItems && onSelect(letter)}
                sx={{
                  minWidth: { xs: '30px', md: '32px' },
                  height: '32px',
                  flexShrink: 0,
                  borderRadius: '3px',
                  border: 'none',
                  backgroundColor: active ? C.burgundy : 'transparent',
                  color: active ? '#FAF8F5' : hasItems ? C.charcoal : C.charcoalGhost,
                  fontSize: '11px',
                  fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  cursor: hasItems ? 'pointer' : 'default',
                  transition: 'all 0.15s',
                  outline: 'none',
                  '&:hover': hasItems && !active ? { backgroundColor: C.ivory3, color: C.burgundy } : {},
                  '&:focus-visible': { boxShadow: `0 0 0 2px ${C.burgundy}` },
                }}
              >
                {letter}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

/* ── BRAND DIRECTORY CARD ────────────────────────────── */
const DirectoryCard = ({ brand, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Box
      role="button"
      tabIndex={0}
      aria-label={`View ${brand.name}`}
      onClick={() => onClick(brand)}
      onKeyDown={e => e.key === 'Enter' && onClick(brand)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        backgroundColor: C.white,
        border: `1px solid ${hovered ? 'rgba(122,31,61,0.22)' : C.charcoalGhost}`,
        borderRadius: '4px',
        p: 3,
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 12px 32px rgba(26,26,26,0.07)' : '0 2px 6px rgba(26,26,26,0.02)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
        '&:focus-visible': { boxShadow: `0 0 0 3px ${C.burgundyGlow}` },
      }}
    >
      {/* Tag badges */}
      <Box sx={{ display: 'flex', gap: 0.75, mb: 2, flexWrap: 'wrap', minHeight: '22px' }}>
        {brand.homegrown && (
          <Box sx={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#4a7c3f', border: '1px solid rgba(74,124,63,0.3)', borderRadius: '2px', px: 1.25, py: 0.4 }}>
            Homegrown
          </Box>
        )}
        {brand.isNew && (
          <Box sx={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: C.champagne, border: '1px solid rgba(200,168,130,0.4)', borderRadius: '2px', px: 1.25, py: 0.4 }}>
            New
          </Box>
        )}
        {brand.exclusive && (
          <Box sx={{ fontSize: '8px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: C.burgundy, border: '1px solid rgba(122,31,61,0.25)', borderRadius: '2px', px: 1.25, py: 0.4 }}>
            Exclusive
          </Box>
        )}
      </Box>

      {/* Brand name */}
      <Typography sx={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '17px', fontWeight: 700, color: C.charcoal, lineHeight: 1.2, mb: 1,
        transition: 'color 0.2s',
        ...(hovered ? { color: C.burgundy } : {}),
      }}>
        {brand.name}
      </Typography>

      {/* Category */}
      <Typography sx={{ fontSize: '9px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: C.burgundy, mb: 1.5 }}>
        {brand.categories.slice(0, 2).join(' · ')}
      </Typography>

      {/* Description */}
      <Typography sx={{ fontSize: '12px', color: C.charcoalDim, lineHeight: 1.7, flexGrow: 1, mb: 2 }}>
        {brand.shortDesc}
      </Typography>

      {/* Footer */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: `1px solid ${C.charcoalGhost}`, mt: 'auto' }}>
        <Typography sx={{ fontSize: '10px', color: C.muted }}>
          {brand.productCount} products
        </Typography>
        <Box sx={{
          display: 'flex', alignItems: 'center', gap: 0.5,
          fontSize: '10px', fontWeight: 700, color: hovered ? C.burgundy : C.charcoalFaint,
          transition: 'color 0.2s',
        }}>
          Explore
          <ArrowForwardIcon sx={{ fontSize: '12px', transform: hovered ? 'translateX(2px)' : 'none', transition: 'transform 0.2s' }} />
        </Box>
      </Box>
    </Box>
  );
};

/* ── DIRECTORY SECTION ───────────────────────────────── */
const DirectorySection = ({ search, onSearchChange, selectedCategory, selectedLetter, onLetterSelect, filteredBrands }) => {
  // Group filtered brands by letter
  const grouped = useMemo(() => {
    const groups = {};
    const sorted = [...filteredBrands].sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach(brand => {
      const char = brand.name.charAt(0).toUpperCase();
      const key = /[A-Z]/.test(char) ? char : '#';
      if (!groups[key]) groups[key] = [];
      groups[key].push(brand);
    });
    return groups;
  }, [filteredBrands]);

  // Which letters have results in full dataset (for nav dimming)
  const availableLetters = useMemo(() => {
    const s = new Set();
    filteredBrands.forEach(b => {
      const char = b.name.charAt(0).toUpperCase();
      s.add(/[A-Z]/.test(char) ? char : '#');
    });
    return s;
  }, [filteredBrands]);

  const sectionRefs = useRef({});

  const handleLetterClick = (letter) => {
    onLetterSelect(letter);
    if (letter !== 'All') {
      const el = sectionRefs.current[letter];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  return (
    <Box id="brand-directory" sx={{ backgroundColor: C.ivory }}>
      {/* Directory Header */}
      <Box sx={{ py: { xs: '64px', md: '80px' }, borderBottom: `1px solid ${C.charcoalGhost}` }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 5 }}>
            <SectionLabel sx={{ mb: 2 }}>Complete Directory</SectionLabel>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3, mb: 4 }}>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: { xs: '28px', md: '38px' }, fontWeight: 700, color: C.charcoal }}>
                All Brands
              </Typography>
              <Typography sx={{ fontSize: '13px', color: C.charcoalDim, fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
                Explore our complete beauty brand collection.
              </Typography>
            </Box>
            {/* Directory Search */}
            <Box sx={{ maxWidth: '600px' }}>
              <SearchInput value={search} onChange={onSearchChange} placeholder="Search by brand name, category..." />
            </Box>
          </Box>
          {/* Result count */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ fontSize: '12px', color: C.muted }}>
              <Box component="span" sx={{ fontWeight: 700, color: C.charcoal }}>{filteredBrands.length}</Box> brands found
            </Typography>
            {(search || selectedCategory !== 'All' || selectedLetter !== 'All') && (
              <Box
                component="button"
                onClick={() => { onSearchChange(''); onLetterSelect('All'); }}
                sx={{ fontSize: '11px', color: C.burgundy, border: 'none', background: 'none', cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, textDecoration: 'underline' }}
              >
                Clear filters
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      {/* Sticky alphabet nav */}
      <AlphabetNav selectedLetter={selectedLetter} onSelect={handleLetterClick} availableLetters={availableLetters} />

      {/* Brand groups */}
      <Container maxWidth="lg" sx={{ py: { xs: '48px', md: '72px' } }}>
        {Object.keys(grouped).length === 0 ? (
          <Box sx={{ textAlign: 'center', py: '80px' }}>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', color: C.charcoalFaint, mb: 2 }}>No brands found</Typography>
            <Typography sx={{ fontSize: '14px', color: C.muted }}>Try adjusting your search or filters.</Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {Object.keys(grouped).sort().map(letter => (
              <Box key={letter} ref={el => (sectionRefs.current[letter] = el)}>
                {/* Letter heading */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                  <Typography sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '48px', fontWeight: 700, color: C.ivory3,
                    lineHeight: 1, minWidth: '52px', userSelect: 'none',
                  }}>
                    {letter}
                  </Typography>
                  <Box sx={{ flex: 1, height: '1px', backgroundColor: C.charcoalGhost }} />
                  <Typography sx={{ fontSize: '10px', color: C.muted, letterSpacing: '1px' }}>{grouped[letter].length} brands</Typography>
                </Box>

                {/* Brand cards grid */}
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
                  gap: 2,
                }}>
                  {grouped[letter].map(brand => (
                    <DirectoryCard key={brand.id} brand={brand} onClick={() => navigate(`/brands/${brand.slug}`)} />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

/* ── MAIN BRANDS PAGE ────────────────────────────────── */
const BrandsPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLetter, setSelectedLetter] = useState('All');

  const filteredBrands = useMemo(() =>
    filterBrands(BRANDS, { search, category: selectedCategory, letter: selectedLetter }),
    [search, selectedCategory, selectedLetter]
  );

  const handleBrandClick = (brand) => {
    navigate(`/brands/${brand.slug}`);
  };

  // When search changes, reset letter
  const handleSearchChange = (val) => {
    setSearch(val);
    if (val) setSelectedLetter('All');
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setSelectedLetter('All');
  };

  return (
    <Box sx={{ backgroundColor: C.ivory, minHeight: '100vh' }}>
      {/* 1. Hero */}
      <HeroSection search={search} onSearchChange={handleSearchChange} />

      {/* 2. Featured brands (always shown, unaffected by filters) */}
      <FeaturedSection onBrandClick={handleBrandClick} />

      {/* 3. Category filter */}
      <CategorySection selectedCategory={selectedCategory} onSelect={handleCategorySelect} />

      {/* 4. Popular brands */}
      <PopularSection onBrandClick={handleBrandClick} />

      {/* 5. Complete directory */}
      <DirectorySection
        search={search}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        selectedLetter={selectedLetter}
        onLetterSelect={setSelectedLetter}
        filteredBrands={filteredBrands}
      />
    </Box>
  );
};

export default BrandsPage;
