# Alfro Pte Ltd — Technical Specification

## Component Inventory

### shadcn/ui Components
| Component | Usage |
|-----------|-------|
| Button | CTAs, navigation, form submit |
| Input | Calculator quantity field |
| Select | Calculator dropdowns (origin, destination, shipment type) |
| Card | Service cards, feature cards |
| Sheet | Mobile navigation overlay |

### Lucide React Icons
| Icon | Usage |
|------|-------|
| ChevronDown | Select dropdown indicator |
| Plane | Freight forwarding service |
| Warehouse | Warehousing service |
| Network/Share2 | Supply chain service |
| Zap | Fast delivery feature |
| Shield | Secure handling feature |
| MapPin | Real-time visibility feature |
| Users | Experienced team feature |
| Menu | Mobile hamburger |
| X | Mobile menu close |
| ArrowRight | CTA button arrow |

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Particle network canvas | Native Canvas 2D | Custom rAF loop, Particle class, distance-based line drawing | High |
| Stats counter | Native JS | requestAnimationFrame-based countUp function | Medium |
| Section fade-in (default) | CSS + IntersectionObserver | Add `.animate-in` class via IO, CSS handles transition | Low |
| About section slide-in | CSS + IntersectionObserver | Left/right translateX with stagger | Low |
| Service cards stagger | CSS + IntersectionObserver | Staggered translateY with delay offsets | Low |
| Why Choose Us scale-in | CSS + IntersectionObserver | Scale 0.95→1 + opacity | Low |
| Category cards hover | CSS | transform: scale on image, transition 500ms | Low |
| Nav background transition | CSS | transition: background-color 200ms, toggle via scroll listener | Low |
| Mobile menu overlay | CSS + React state | opacity + translateX transitions, stagger children | Medium |
| Scroll indicator bounce | CSS @keyframes | translateY 0→8px, 2s infinite | Low |
| Smooth scroll | CSS | scroll-behavior: smooth + scroll-margin-top offset | Low |

## State & Logic Plan

### Shipping Calculator State
- React useState for form values: destination, shipmentType, quantity
- useMemo or useEffect to compute costs on change
- Base rates lookup table (object/map)
- Cost breakdown: baseFreight + fuelSurcharge (15%) + documentation ($150)
- Format S$ values with toLocaleString

### Navigation Scroll State
- useState for scrolled boolean (past 100px)
- Scroll listener in useEffect, cleanup on unmount
- Toggle between transparent and solid bg classes

### Mobile Menu State
- useState for menu open/close
- Toggle with hamburger click
- Close on link click or overlay click

## Project File Structure

```
app/
├── public/
│   ├── images/
│   │   ├── about-warehouse.jpg
│   │   ├── service-freight.jpg
│   │   ├── service-warehouse.jpg
│   │   ├── service-customs.jpg
│   │   └── service-delivery.jpg
│   └── fonts/ (if self-hosting)
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── card.tsx
│   │   │   └── sheet.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ParticleCanvas.tsx
│   │   ├── ShippingCalculator.tsx
│   │   ├── StatCounter.tsx
│   │   └── ScrollReveal.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBarSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   ├── CalculatorSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   └── FooterSection.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useInView.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── calculator-rates.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Dependencies to Install

```bash
# shadcn/ui components
npx shadcn add button input card sheet

# Lucide icons (comes with shadcn)
# Already included via shadcn init

# No additional animation libraries needed — all animations use CSS + native JS
```

## Tailwind Configuration Notes

### Custom Colors
```js
colors: {
  navy: {
    900: '#0B1D3F',
    800: '#11284A',
    700: '#1A3A6B',
  },
  amber: {
    500: '#D4852E',
    600: '#B86F1F',
  },
  offwhite: '#F5F7FA',
}
```

### Custom Fonts
```js
fontFamily: {
  display: ['Space Grotesk', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Custom Animations
```js
animation: {
  'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
},
keyframes: {
  'bounce-slow': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(8px)' },
  },
}
```

## Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| sm | 640px | Minor typography tweaks |
| md | 768px | 2-column grids, hamburger menu |
| lg | 1024px | Full layouts |
| xl | 1280px | Max container width |

## Performance Considerations

1. **Particle Canvas**: Limit to 60fps via rAF. Reduce particle count on mobile by 50%. Skip frames on low-power devices.
2. **Images**: Use appropriate sizes, lazy load below-fold images.
3. **Fonts**: Preload Space Grotesk and Inter. JetBrains Mono can be loaded on-demand for the calculator section.
4. **CSS Animations**: Use `transform` and `opacity` only for GPU-accelerated animations.
5. **Intersection Observer**: Reuse a single IO instance for all scroll-reveal elements.
