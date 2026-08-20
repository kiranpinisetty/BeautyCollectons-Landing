# BeautyCollections Agent File

This file provides a complete "A to Z" overview of the `beautycollections` project to help AI tools understand the architecture, design system, and technical specifications.

---

## 1. Project Overview

**Sri Lakshmi Beauty Collections** — a React-based front-end application for a physical beauty store in Tadepalligudem, Andhra Pradesh, India.

The site serves as:
- A digital storefront and brand discovery experience.
- A directory of 100+ brands available in the store.
- A contact/WhatsApp inquiry channel for product availability.

Business: Sri Lakshmi Beauty Collections
Location: Near Venkateswara Swamy Temple, Rr Hospital Road, Tadepalligudem, AP 534101
Phones: 9390933899 / 9989455477
Hours: 9:30 AM – 9:00 PM, Open Daily

---

## 2. Technology Stack

- **Framework**: React 19 + React Router DOM v7
- **Build Tool**: Vite v8
- **UI Library**: Material UI (@mui/material v9) + Emotion
- **Icons**: React Icons (react-icons) + @mui/icons-material
- **Linting**: Oxlint
- **Language**: JavaScript (JSX) — not TypeScript

---

## 3. Design System & Theming

### Typography
| Role | Font |
|---|---|
| Body / Interface | `Plus Jakarta Sans`, -apple-system, sans-serif |
| Headings (h1–h4) | `Playfair Display`, serif |
| Display / Logo | `Bebas Neue`, sans-serif |

All fonts are loaded via Google Fonts in `global.css`.

### Color Palette (CSS Variables in `global.css`)

#### Light Backgrounds
| Variable | Hex | Usage |
|---|---|---|
| `--ivory` | `#FAF8F5` | Primary page background |
| `--ivory-2` | `#F5F2EE` | Alternate section background |
| `--ivory-3` | `#EDE9E4` | Deeper accent background |
| `--card-bg` | `#FFFFFF` | Card surfaces |
| `--card-bg-alt` | `#FDF9F6` | Warm off-white cards |

#### Dark Text
| Variable | Value | Usage |
|---|---|---|
| `--charcoal` | `#1A1A1A` | Primary headings / nav |
| `--charcoal-dim` | `rgba(26,26,26,0.55)` | Secondary text |
| `--charcoal-faint` | `rgba(26,26,26,0.35)` | Tertiary text |
| `--charcoal-ghost` | `rgba(26,26,26,0.15)` | Borders and dividers |

#### Burgundy Accent (Primary Brand Color)
| Variable | Hex | Usage |
|---|---|---|
| `--burgundy` | `#7A1F3D` | Primary CTA, accents, labels |
| `--burgundy-light` | `#9B2D52` | Hover states |
| `--burgundy-dark` | `#4A1024` | Scrollbar |
| `--burgundy-glow` | `rgba(122,31,61,0.12)` | Ambient glows |
| `--burgundy-line` | `rgba(122,31,61,0.22)` | Subtle borders |
| `--burgundy-faint` | `rgba(122,31,61,0.07)` | Chip backgrounds |

#### Champagne / Warm Beige Accent
| Variable | Hex | Usage |
|---|---|---|
| `--champagne` | `#C8A882` | Secondary luxury accent |
| `--champagne-faint` | `rgba(200,168,130,0.15)` | Soft backgrounds |

#### Other
| Variable | Value |
|---|---|
| `--muted` | `#9A9290` |
| `--border` | `rgba(26,26,26,0.09)` |
| `--footer-bg` | `#16100F` |

### MUI Theme (`src/styles/theme.js`)
MUI is configured with a dark palette used selectively within specific MUI components:
- **Mode**: `dark`
- **Background default**: `#050505`
- **Background paper**: `#0e0e0e`
- **Primary (Champagne/Gold)**: `#c9a96e`
- **Secondary (Muted Rose)**: `#b87d8a`
- **Text primary**: `#f5f0eb`
- **Overrides**: `backgroundImage: none` removed from MuiPaper and MuiDialog

> Note: The main page UI uses `global.css` CSS variables, NOT the MUI dark theme. The MUI theme applies only to MUI dialog/modal components.

### JS Color Constants (`src/styles/colors.js`)
Legacy color constants (pre-CSS-var approach). New components should use CSS variables from `global.css`.

### CSS Animations
| Name | Effect |
|---|---|
| `marquee` | Horizontal scrolling text |
| `fadeUp` | Entrance: opacity 0→1, translateY 28→0 |
| `float` | Gentle vertical float loop |
| `floatAlt` | Alternate float with slight rotation |
| `shimmer` | Text shimmer via background-position |

---

## 4. Application Architecture

### Routes
| Path | Component | Description |
|---|---|---|
| `/` | `HomePage` | Main landing page |
| `/brands` | `BrandsPage` | Premium brand directory & discovery |
| `/brands/:brandSlug` | `BrandDetailPage` | Individual brand page with products |

### Page Components (`src/pages/`)
- **`HomePage.jsx`**: Assembles all homepage sections in order.
- **`BrandsPage.jsx`**: Full premium brand directory with hero, featured brands, category filter, popular brands, and alphabetical directory (A–Z navigation, search, filter).
- **`BrandDetailPage.jsx`**: Individual brand page — hero, product grid, enquiry CTA, related brands.

### Shared Components (`src/components/`)
| File | Description |
|---|---|
| `Layout.jsx` | Root wrapper: ThemeProvider + CssBaseline + Header + Footer |
| `Header.jsx` | Sticky top nav with logo, navigation links, Visit Store CTA |
| `Footer.jsx` | Dark footer with brand info, quick links, social, contact |
| `Hero.jsx` | Homepage hero section |
| `ShopGallery.jsx` | Image gallery of the physical shop |
| `WhyChooseUs.jsx` | Value propositions section |
| `OurProducts.jsx` | Product category showcase |
| `CustomerReviews.jsx` | Testimonials section |
| `ContactSection.jsx` | Contact form and info |

---

## 5. Data Models

### `src/data/brandsData.js`
Primary brand catalog. Each brand object:
```js
{
  id: 'nars',                          // unique kebab-case ID
  name: 'NARS',                        // display name
  slug: 'nars',                        // URL slug (used in /brands/:brandSlug)
  categories: ['Makeup', 'Luxury'],    // array from BRAND_CATEGORIES
  description: 'Full description...',  // multi-sentence
  shortDesc: 'One-liner...',           // used in cards
  tagline: 'Your Beauty. Your Rules.', // brand tagline
  productCount: 86,                    // approximate product count in store
  featured: true,                      // shown in Featured Brands section
  popular: true,                       // shown in Most Loved section
  isNew: false,                        // shows "New" badge
  homegrown: false,                    // shows "Homegrown" badge (Indian brands)
  exclusive: false,                    // shows "Exclusive" badge
  country: 'USA',                      // country of origin
  accentColor: '#1A1A1A',              // brand-specific accent color
}
```

**Helpers exported**:
- `getBrandsAlphabetically()` — returns `{ A: [...], B: [...], ... }`
- `filterBrands(brands, { search, category, letter })` — filtering utility

**Categories** (`BRAND_CATEGORIES`): Makeup, Skincare, Haircare, Fragrance, Bath & Body, Tools & Appliances, Wellness, Men, Luxury, K-Beauty, Homegrown, Professional, Clean Beauty

**Current catalog**: 100+ brands across Indian, global, luxury, K-Beauty, professional segments.

### `src/data/products.js`
Legacy category data. Used in homepage OurProducts section.

### `src/data/reviews.js`
Customer testimonials array with `{id, name, text, rating, verified}`.

### `src/data/constants.js`
Business info: `BUSINESS_INFO` — name, tagline, location, phone numbers, hours, social links.

### `src/data/whyChooseUs.js`
Array of value propositions for the WhyChooseUs section.

---

## 6. BrandsPage Sections

The `/brands` page has 5 sections in order:

1. **Hero** — `<h1>` "Discover your favourite brands." + search input + editorial visual composition + brand count stats.
2. **Featured Brands** — Editorial asymmetric grid (1 large + 2 medium + 2 small) from `featured: true` brands.
3. **Category Filter** — Pill/chip filter for all `BRAND_CATEGORIES`. Filters the directory section.
4. **Most Loved** — Logo/name-focused card grid from `popular: true` brands.
5. **Brand Directory** — Sticky A–Z alphabet nav + live search + grouped alphabetical grid (4 cols desktop / 3 tablet / 2 mobile).

**State**:
- `search` — string, filters by name, category, country, description
- `selectedCategory` — filters directory by category
- `selectedLetter` — filters directory by first letter

---

## 7. Brand Detail Page (`/brands/:brandSlug`)

### Structure
1. **Hero** — Brand name (h1), categories, country, product count, tagline, description, Shop All Products CTA (WhatsApp link).
2. **Products** — Grid of 4 products generated from `generateBrandProducts()` utility (based on brand's primary category). Each product has Enquire button (WhatsApp link).
3. **Enquiry CTA** — "Can't find what you're looking for?" block.
4. **Related Brands** — 4 brands from same categories.

---

## 8. WhatsApp Integration
All CTAs link to WhatsApp: `https://wa.me/919390933899?text=...`
Messages are pre-filled with brand/product context for easy inquiry.

---

## 9. File Structure

```
beautycollections/
├── index.html              # HTML entry (meta, title, viewport)
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite config (React plugin)
├── .oxlintrc.json          # Linting rules
├── agent.md                # THIS FILE — AI context
├── public/                 # Public static assets
└── src/
    ├── App.jsx             # Router setup (3 routes)
    ├── main.jsx            # ReactDOM.createRoot entry
    ├── assets/             # Images (BCLogo.png, hero_beauty.jpg, etc.)
    ├── components/
    │   ├── Layout.jsx
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── ShopGallery.jsx
    │   ├── WhyChooseUs.jsx
    │   ├── OurProducts.jsx
    │   ├── CustomerReviews.jsx
    │   └── ContactSection.jsx
    ├── data/
    │   ├── brandsData.js   # ★ Primary brand catalog (100+ brands)
    │   ├── products.js     # Category data
    │   ├── reviews.js      # Testimonials
    │   ├── constants.js    # Business info
    │   └── whyChooseUs.js  # Value props
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── BrandsPage.jsx      # ★ Premium brand directory
    │   └── BrandDetailPage.jsx # ★ Individual brand page
    └── styles/
        ├── colors.js       # Legacy JS color constants
        ├── global.css      # ★ CSS variables, fonts, animations, base styles
        └── theme.js        # MUI theme config
```

---

## 10. Scripts

```bash
npm run dev       # Start local Vite dev server → http://localhost:5173/
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # Run Oxlint
```

---

## 11. Key Design Conventions

- **All padding/spacing**: Use MUI `sx` prop with numeric spacing (1 unit = 8px)
- **All brand cards**: Data-driven from `brandsData.js` — never hardcoded JSX
- **Hover states**: `translateY(-3px to -6px)`, `border-color` change, `box-shadow` increase, `~250ms` transitions
- **Focus states**: Always include `&:focus-visible` with `box-shadow: 0 0 0 3px rgba(122,31,61,0.2)` for accessibility
- **Typography hierarchy**: `Playfair Display` for headings, `Plus Jakarta Sans` for body/UI, `Bebas Neue` for display/logo
- **Buttons/CTAs**: Burgundy fill (`#7A1F3D`), hover to `#9B2D52`, border-radius `4px`
- **Section labels**: 10px, 700 weight, 4px letter-spacing, uppercase, burgundy color
- **No gradients on text** (forbidden design pattern)
- **No glassmorphism** (forbidden)
- **No purple on dark** (forbidden)

---

## 12. Responsive Breakpoints (MUI)

| Key | Width |
|---|---|
| xs | 0px+ (mobile) |
| sm | 600px+ |
| md | 900px+ (tablet) |
| lg | 1200px+ (desktop) |
| xl | 1536px+ |

Brand directory grid: `xs: 2 cols → sm: 3 cols → md: 4 cols`
Popular brands grid: `xs: 2 cols → sm: 3 cols → md: 4 cols → lg: 6 cols`
