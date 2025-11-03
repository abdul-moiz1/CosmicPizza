# Design Guidelines for COSMIC Pizza & Donair Homepage

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern food delivery platforms (DoorDash, Uber Eats) and contemporary pizza chains (Domino's online presence) while emphasizing visual appeal and appetizing presentation. The design will balance bold food imagery with clean, digestible information architecture.

## Core Design Principles
1. **Appetite Appeal First**: Every section should evoke hunger and excitement
2. **Gentle Motion**: Animations attract but never distract
3. **Halal Pride**: Prominently feature the halal certification as a trust element
4. **Effortless Ordering**: Clear CTAs throughout the journey
5. **Local Connection**: Emphasize Canadian presence and multiple locations

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, and 24 for consistent rhythm
- Section padding: py-16 md:py-24 for major sections
- Component spacing: gap-8 for feature grids
- Container: max-w-7xl with px-4 md:px-8 for content areas
- Cards: p-6 md:p-8 for content cards

**Viewport Strategy**:
- Hero section: 85vh on desktop, auto on mobile
- Content sections: Natural height based on content
- No forced 100vh constraints on content sections

## Typography Hierarchy

**Font System** (Google Fonts):
- Primary: Poppins (modern, friendly, readable) - headings and UI
- Secondary: Inter (clean, professional) - body text

**Scale**:
- H1 (Hero): text-5xl md:text-7xl font-bold
- H2 (Section): text-3xl md:text-5xl font-bold
- H3 (Cards): text-2xl md:text-3xl font-semibold
- Body Large: text-lg md:text-xl
- Body: text-base md:text-lg
- Small: text-sm

## Component Library

### Navigation
- Fixed top navigation with backdrop blur
- Logo left, menu items center, "Order Now" CTA right
- Mobile: Hamburger menu with slide-in overlay
- Height: h-20 with shadow on scroll

### Hero Section
**Layout**: Full-width with centered content
- Large headline with "COSMIC Pizza & Donair"
- Subheading: "Canada's Best Halal Pizza & Donair"
- Dual CTAs: Primary "Order Now" + Secondary "View Menu"
- **Rotating Pizza Element**: Large pizza graphic (300px-400px) positioned top-right or center, continuously rotating via CSS animation, transforms to follow scroll path
- Include "100% Halal" badge prominently
- Background: Gradient mesh or subtle pattern

### Pizza Animation Specifications
**Initial State**: Pizza rotates continuously at top of page
**Scroll Behavior**: 
- Moves along defined path (diagonal, curved, or straight down)
- Position interpolates with scroll percentage
- Maintains rotation throughout movement
- Reaches final position at 80-90% scroll
- Transform properties: rotate, translateX, translateY
- Performance: Use CSS transforms and will-change property

### Content Sections

**1. Trust Bar**
- Full-width strip below hero
- Icons with text: "100% Halal Certified" | "Fresh Ingredients" | "Fast Delivery" | "Multiple Locations"
- Horizontal scroll on mobile

**2. Featured Combos** (Multi-column)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Cards with images, pricing, description
- Hover: Subtle lift (translate-y-2) and shadow increase
- "Starting from $11.99" badge
- Individual "Order" buttons

**3. Build Your Own**
- Two-column layout: Image left, content right on desktop
- Stack on mobile
- Highlight: "Any toppings, half and half"
- Interactive visual: Show pizza customization options

**4. Specialty Menu**
- Masonry grid or carousel of menu items
- High-quality food photography
- Each item: Image, name, brief description, price
- Filter/category tabs if needed

**5. Extras Section**
- 4-column grid on desktop (2 on tablet, 1 on mobile)
- Icon-based cards for sides, drinks, desserts
- Compact presentation

**6. Locations**
- Interactive map or location cards
- 2-column grid showing multiple stores
- Each card: Address, phone, hours, "Get Directions" link
- "Find Your Store" search functionality

**7. Catering Services**
- Hero-style section with imagery
- "Weddings, Corporate, Special Occasions"
- Simple contact form or "Request Quote" CTA
- Testimonial/social proof if available

**8. Footer**
- Three-column layout: Company info, Quick links, Contact
- Social media icons
- Newsletter signup
- Legal links and copyright

### Interactive Elements

**Buttons**:
- Primary: Large, rounded-full, px-8 py-4
- Secondary: Outline style with hover fill
- All buttons: Smooth transitions, scale on hover (scale-105)

**Cards**:
- Rounded corners: rounded-2xl
- Shadow: shadow-lg with hover:shadow-2xl
- Border: Subtle 1px border
- Padding: p-6 md:p-8

**Form Inputs** (if needed):
- Height: h-12
- Rounded: rounded-lg
- Focus states with ring utility

## Animation Strategy

**Entrance Animations**:
- Fade-in with slide-up for sections (IntersectionObserver)
- Stagger children elements by 100ms
- Use opacity and translateY transforms

**Micro-interactions**:
- Button hover: Scale + shadow
- Card hover: Lift + shadow
- Link hover: Underline animation
- Image hover: Subtle zoom (scale-105)

**Performance Rules**:
- Use transform and opacity only
- Add will-change sparingly
- Implement throttling for scroll listeners
- Use requestAnimationFrame for smooth animations

**Animation Timing**:
- Entrance: 0.6s ease-out
- Hover: 0.3s ease
- Pizza rotation: 20s linear infinite

## Image Strategy

**Required Images**:
1. **Hero Pizza Graphic**: Stylized pizza illustration or high-quality photo with transparent background (PNG)
2. **Combo Cards**: 3-6 appetizing pizza photos showing different varieties
3. **Build-Your-Own Section**: Pizza customization visualization or ingredient spread
4. **Menu Items**: High-res photos of specialty pizzas and popular items
5. **Extras**: Photos of sides, drinks, desserts
6. **Catering**: Event/gathering scene with COSMIC food

**Image Treatment**:
- Aspect ratios: 16:9 for hero images, 1:1 for product cards
- Use object-cover for consistent sizing
- Lazy loading for performance
- Optimize for web (WebP with fallback)

**Placeholder Strategy**: Use gradient backgrounds with centered food emoji or icon until real images loaded

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (multi-column, full layouts)

**Mobile Optimizations**:
- Pizza animation scaled down (200px)
- Simplified animation path on mobile
- Touch-friendly button sizes (min 44px)
- Collapsed navigation
- Reduced motion respect (prefers-reduced-motion)

## Accessibility

- Semantic HTML throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text for all images
- Sufficient contrast ratios
- Animation respects prefers-reduced-motion

This design creates an immersive, appetizing experience that showcases COSMIC Pizza & Donair's offerings while the signature pizza animation adds memorable brand personality without overwhelming the content.