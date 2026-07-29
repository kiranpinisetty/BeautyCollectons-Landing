export const BRANDS = [
  {
    id: 'lakme',
    name: 'Lakmé',
    origin: 'India',
    category: 'Makeup & Skincare',
    description: 'India\'s iconic cosmetics brand offering premium foundations, matte lipsticks, eyeliners, and radiant skincare products.',
    badge: 'Official Stockist',
    logoColor: '#000000',
    accentColor: '#c5a059',
    tagline: 'Reinvent Beauty',
    products: [
      { id: 101, name: '9to5 Weightless Mousse Foundation', price: '₹475', category: 'Foundation', rating: 4.8, description: 'Featherlight texture with natural matte coverage for all-day wear.' },
      { id: 102, name: 'Absolute Precision Lip Paint', price: '₹650', category: 'Lipstick', rating: 4.7, description: 'Intense color payoff with a velvety matte finish that stays set.' },
      { id: 103, name: 'Peach Milk Ultra Light Moisturizer', price: '₹299', category: 'Skincare', rating: 4.9, description: 'Infused with peach extract and milk to nourish skin for 24 hours.' },
      { id: 104, name: 'Eyeconic Kajal - Deep Black', price: '₹210', category: 'Eye Care', rating: 4.9, description: 'Smudge-proof, waterproof 24hr long stay eyeliner.' }
    ]
  },
  {
    id: 'maybelline',
    name: 'Maybelline New York',
    origin: 'USA',
    category: 'High-Performance Cosmetics',
    description: 'Global makeup innovator known for Fit Me foundations, SuperStay liquid lipsticks, and iconic mascaras.',
    badge: 'Bestseller',
    logoColor: '#111827',
    accentColor: '#d4af37',
    tagline: 'Make It Happen',
    products: [
      { id: 201, name: 'Fit Me Matte + Poreless Foundation', price: '₹549', category: 'Foundation', rating: 4.8, description: 'Refines pores and matches skin tone for a seamless natural finish.' },
      { id: 202, name: 'SuperStay Matte Ink Liquid Lipstick', price: '₹699', category: 'Lipstick', rating: 4.9, description: '16-hour liquid matte lipstick with flawless, high-pigment formula.' },
      { id: 203, name: 'Lash Sensational Waterproof Mascara', price: '₹510', category: 'Mascara', rating: 4.7, description: 'Full-fan effect brush reveals layers of luscious lashes.' },
      { id: 204, name: 'Instant Age Rewind Concealer', price: '₹720', category: 'Concealer', rating: 4.8, description: 'Erases dark circles and fine lines with micro-corrector applicator.' }
    ]
  },
  {
    id: 'loreal',
    name: 'L\'Oréal Paris',
    origin: 'France',
    category: 'Hair Care & Luxury Skincare',
    description: 'French beauty excellence delivering advanced dermatological serums, nourishing hair oils, and hair colors.',
    badge: 'Luxury',
    logoColor: '#1a1a1a',
    accentColor: '#c5a059',
    tagline: 'Because You\'re Worth It',
    products: [
      { id: 301, name: 'Revitalift 1.5% Hyaluronic Acid Serum', price: '₹999', category: 'Serum', rating: 4.9, description: 'Deep hydration serum reducing fine lines by 60%.' },
      { id: 302, name: 'Extraordinary Oil Hair Serum', price: '₹649', category: 'Hair Serum', rating: 4.8, description: 'Blend of 6 rare flower oils for smooth, shiny, frizz-free hair.' },
      { id: 303, name: 'Casting Crème Gloss Ammonia-Free Color', price: '₹550', category: 'Hair Color', rating: 4.6, description: 'Rich glossy shine with optimum grey coverage.' }
    ]
  },
  {
    id: 'sugar',
    name: 'SUGAR Cosmetics',
    origin: 'India',
    category: 'Bold & Cruelty-Free Makeup',
    description: 'Trendsetting makeup crafted for Indian skin tones, famous for long-wearing matte lipsticks and eye makeup.',
    badge: 'Trending',
    logoColor: '#000000',
    accentColor: '#c5a059',
    tagline: 'Rule The World',
    products: [
      { id: 401, name: 'Smudge Me Not Liquid Lipstick', price: '₹499', category: 'Lipstick', rating: 4.7, description: 'One-coat full coverage liquid matte lipstick.' },
      { id: 402, name: 'Contour De Force Mini Highlighter', price: '₹399', category: 'Face', rating: 4.8, description: 'Soft-focused luminous glow highlighter.' },
      { id: 403, name: 'Arch Arrival Brow Definer', price: '₹499', category: 'Eye Care', rating: 4.6, description: 'Built-in spoolie brow pencil for natural hair-like strokes.' }
    ]
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    origin: 'India',
    category: 'Active Science Skincare',
    description: 'Transparent, clinical active skincare formulations targeting acne, dark spots, and skin barriers.',
    badge: 'Dermatologist Tested',
    logoColor: '#111827',
    accentColor: '#374151',
    tagline: 'Science-Backed Skincare',
    products: [
      { id: 501, name: '10% Niacinamide + Zinc Serum', price: '₹599', category: 'Serum', rating: 4.9, description: 'Reduces blemish marks and balances sebum production.' },
      { id: 502, name: 'Salicylic Acid 2% Face Cleanser', price: '₹299', category: 'Cleanser', rating: 4.8, description: 'Deep pore cleansing formula for acne-prone skin.' },
      { id: 503, name: 'SPF 50 PA++++ Multi-Vitamin Sunscreen', price: '₹399', category: 'Sunscreen', rating: 4.9, description: 'Lightweight broad-spectrum protection with zero white cast.' }
    ]
  },
  {
    id: 'faces-canada',
    name: 'Faces Canada',
    origin: 'Canada',
    category: 'Cosmetics',
    description: 'Canadian makeup range featuring comfy weightless foundations, eyeliners, and plush lip colors.',
    badge: 'Premium',
    logoColor: '#000000',
    accentColor: '#c5a059',
    tagline: 'Flawless Every Day',
    products: [
      { id: 601, name: 'Comfy Matte Lip Color', price: '₹399', category: 'Lipstick', rating: 4.7, description: 'Infused with almond oil for smooth hydrated matte lips.' },
      { id: 602, name: 'Magneteyes Waterproof Eyeliner', price: '₹249', category: 'Eyeliner', rating: 4.8, description: 'Intense black matte finish precision eyeliner.' }
    ]
  },
  {
    id: 'nivea',
    name: 'Nivea',
    origin: 'Germany',
    category: 'Body Care & Skincare',
    description: 'Trusted global skincare brand providing deeply moisturizing body lotions, lip balms, and face washes.',
    badge: 'Essentials',
    logoColor: '#001e50',
    accentColor: '#003366',
    tagline: 'Care That Goes Deeper',
    products: [
      { id: 701, name: 'Nivea Soft Light Moisturizing Cream', price: '₹270', category: 'Moisturizer', rating: 4.9, description: 'Fresh moisturizing cream with Vitamin E and Jojoba Oil.' },
      { id: 702, name: 'Body Milk Nourishing Lotion', price: '₹399', category: 'Body Care', rating: 4.8, description: 'Deep moisture serum for 48-hour dry skin relief.' }
    ]
  },
  {
    id: 'plum',
    name: 'Plum Goodness',
    origin: 'India',
    category: '100% Vegan Beauty',
    description: 'Clean, toxin-free, 100% vegan skincare and hair care products enriched with green tea and vitamin C.',
    badge: '100% Vegan',
    logoColor: '#2d1b4e',
    accentColor: '#6b3fa0',
    tagline: 'Goodness That Delivers',
    products: [
      { id: 801, name: 'Green Tea Pore Cleansing Face Wash', price: '₹345', category: 'Cleanser', rating: 4.8, description: 'Gentle soap-free cleanser with green tea and glycolic acid.' },
      { id: 802, name: '15% Vitamin C Face Serum', price: '₹550', category: 'Serum', rating: 4.9, description: 'Glow-boosting antioxidant serum for bright skin.' }
    ]
  }
];
