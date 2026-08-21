/**
 * colors.js — "Editorial Warm" JS color constants
 * Used in any JS/JSX context that cannot consume CSS variables directly.
 * Keep in sync with global.css :root variables.
 */
export const colors = {
  /* ── Backgrounds ── */
  paper:       '#F7EFE1',   // primary bg (was --ivory / #FAF8F5)
  paper2:      '#F1E5D0',   // secondary bg (was --ivory-2 / #F5F2EE)
  paper3:      '#EDE0C8',   // deeper accent bg (was --ivory-3 / #EDE9E4)
  cardBg:      '#FFFFFF',
  cardBgAlt:   '#FAF4EB',

  /* ── Ink (text) ── */
  ink:         '#241B14',   // primary text (was --charcoal / #1A1A1A)
  inkDim:      'rgba(36,27,20,0.55)',
  inkFaint:    'rgba(36,27,20,0.35)',
  inkGhost:    'rgba(36,27,20,0.15)',

  /* ── Maroon (primary accent) ── */
  maroon:      '#5C1A1A',   // (was --burgundy / #7A1F3D)
  maroonLight: '#7A3535',   // (was --burgundy-light / #9B2D52)
  maroonDark:  '#3B1010',   // (was --burgundy-dark / #4A1024)

  /* ── Marigold (rare highlight — max once per section) ── */
  marigold:    '#E08A1E',

  /* ── Gold (borders / line strokes only — never fill) ── */
  gold:        '#B8862E',   // (was --champagne / #C8A882)

  /* ── Dividers / borders ── */
  creamLine:   'rgba(36,27,20,0.14)',

  /* ── Muted ── */
  muted:       '#9A8E84',

  /* ── Footer ── */
  footerBg:    '#1A100C',

  /* ── Utilities (layout — unchanged) ── */
  white:        '#fff',
  buttonRadius: '3px',
};
