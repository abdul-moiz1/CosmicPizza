# COSMIC Pizza & Donair - Replit Agent Guide

## Overview

COSMIC Pizza & Donair is a marketing website for a Canadian halal pizza and donair restaurant chain. The application is a single-page React application with elegant animations and scroll effects, showcasing menu items, locations, combos, and catering services. The website emphasizes visual appeal, halal certification, and customer service quality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Stack

**Framework**: React 18 with TypeScript
- Single-page application using Wouter for client-side routing
- Component-based architecture with reusable UI components
- No server-side rendering (rsc: false in components.json)

**Styling**: Tailwind CSS with shadcn/ui Component Library
- Design system based on shadcn/ui "new-york" style
- CSS variables for theming with light/dark mode support
- Custom animations and transitions defined in CSS
- Poppins and Inter fonts from Google Fonts for typography
- Responsive-first approach with mobile breakpoints

**State Management**: TanStack React Query (v5)
- Client-side data fetching and caching
- Configured with infinite stale time and disabled auto-refetch
- Custom query client with 401 error handling

**Animation System**: Custom scroll-based animations
- Intersection Observer API for scroll-triggered animations
- Custom `useScrollAnimation` hook for reusable animation logic
- Animated pizza element that rotates and moves with scroll
- Fade-in, slide-in, and scale-up effects throughout sections

### Backend Stack

**Runtime**: Node.js with Express.js
- ESM module system (type: "module")
- TypeScript for type safety
- Development mode uses tsx for TypeScript execution
- Production build uses esbuild for bundling

**Database**: PostgreSQL with Drizzle ORM
- Schema-first approach with Drizzle
- Connection through Neon serverless driver (@neondatabase/serverless)
- Database migrations managed in /migrations directory
- Shared schema definitions in /shared/schema.ts

**Development Server**: Vite
- HMR (Hot Module Replacement) for development
- Middleware mode integration with Express
- Custom error overlay and dev tools for Replit environment

### Project Structure

**Monorepo Layout**:
- `/client` - React frontend application
  - `/src/components` - Reusable UI components
  - `/src/pages` - Page-level components
  - `/src/hooks` - Custom React hooks
  - `/src/lib` - Utility functions and configurations
- `/server` - Express backend
  - `index.ts` - Server entry point
  - `routes.ts` - API route definitions
  - `storage.ts` - Data access layer (currently in-memory)
  - `vite.ts` - Vite development server integration
- `/shared` - Code shared between client and server
  - `schema.ts` - Database schema and Zod validation
- `/attached_assets` - Static assets and design requirements
- `/migrations` - Database migration files

**Component Architecture**:
- Section-based components (HeroSection, MenuSection, etc.)
- shadcn/ui primitives for base UI elements
- Example components in `/components/examples` for documentation
- Scroll animation wrapper components for consistent behavior

### Build and Deployment

**Development**:
- `npm run dev` - Runs tsx server with Vite middleware
- Environment: NODE_ENV=development
- Live reload for both client and server code

**Production**:
- `npm run build` - Vite builds client, esbuild bundles server
- Client output: `/dist/public`
- Server output: `/dist/index.js`
- `npm run start` - Runs production server

**Database**:
- `npm run db:push` - Pushes schema changes to database
- Requires DATABASE_URL environment variable
- Uses Drizzle Kit for schema management

### Design Principles

**Visual Design**:
- Modern food delivery platform aesthetic (inspired by DoorDash, Uber Eats)
- Emphasis on "appetite appeal" with high-quality food imagery
- Gentle, non-distracting animations
- Halal certification prominently displayed as trust element
- Consistent spacing using Tailwind's 4-unit scale

**Layout System**:
- Container: max-w-7xl with responsive padding
- Section padding: py-16 md:py-24
- Component spacing: gap-8 for grids
- Card padding: p-6 md:p-8
- Hero section: 85vh on desktop, auto on mobile

**Typography Scale**:
- H1: text-5xl md:text-7xl (Hero)
- H2: text-3xl md:text-5xl (Sections)
- H3: text-2xl md:text-3xl (Cards)
- Body: text-base md:text-lg
- All headings use Poppins, body text uses Inter

## External Dependencies

### Third-Party UI Libraries

**Radix UI Primitives**: Accessible component primitives
- Full suite of headless components (@radix-ui/react-*)
- Accordion, Dialog, Dropdown, Select, Tabs, Toast, etc.
- Provides accessibility and keyboard navigation out of the box

**shadcn/ui**: Pre-built component library
- Installed via components.json configuration
- Components are copied into project (not npm installed)
- Customized with Tailwind CSS variables

### Database and ORM

**Neon**: Serverless PostgreSQL
- Package: @neondatabase/serverless
- Connection string via DATABASE_URL environment variable
- Serverless-optimized PostgreSQL driver

**Drizzle ORM**: TypeScript ORM
- Schema definition with drizzle-orm
- Type-safe database queries
- Schema validation with drizzle-zod
- Migration management with drizzle-kit

### Build Tools

**Vite**: Frontend build tool and dev server
- React plugin for JSX/TSX transformation
- Path aliases for imports (@, @shared, @assets)
- Custom Replit plugins for development features

**esbuild**: Server-side bundling
- Fast TypeScript compilation for production
- ESM output format
- External package handling (--packages=external)

### Session Management

**connect-pg-simple**: PostgreSQL session store
- Session persistence in PostgreSQL
- Used with Express sessions (though session middleware not currently implemented)

### Utility Libraries

- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional className utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **zod**: Schema validation

### Development Dependencies

- **typescript**: Type checking
- **tsx**: TypeScript execution for development
- **@types/node**: Node.js type definitions
- **tailwindcss & autoprefixer**: CSS processing

### Assets

The application references images from `/attached_assets` directory:
- Generated pizza images (3D renders, ingredient displays)
- Stock photography (pepperoni pizza, catering scenes)
- Images are imported using Vite's asset handling

### Environment Variables

**Required**:
- `DATABASE_URL` - PostgreSQL connection string (required for Drizzle)
- `NODE_ENV` - Set to "development" or "production"
- `REPL_ID` - Replit-specific identifier (optional, for dev tools)