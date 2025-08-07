# Portfolio Website

## Overview

This is an interactive terminal-style portfolio website built as a single-page application featuring a split-screen design. The left side displays a 3D interactive ID card with personal branding, while the right side presents a fully functional command-line interface for navigation. The application combines modern web technologies with retro terminal aesthetics to create a unique and engaging user experience for showcasing professional information.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Professional, modern terminal-style interface with proper sectioned layout
Font preference: Professional monospace fonts (JetBrains Mono)
Layout preference: Exact match to reference design with header, main, and footer sections

## System Architecture

### Frontend Architecture
The application uses a modern React-based stack with TypeScript for type safety. The architecture follows a component-based design pattern with clear separation of concerns:

- **Component Structure**: Organized into reusable UI components using the shadcn/ui design system built on Radix UI primitives
- **State Management**: React hooks for local state management with custom hooks for terminal functionality and mobile detection
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a terminal-inspired dark theme with green accent colors

### Core Features
- **Split-Screen Layout**: Left side for visual elements (header, 3D ID card), right side for terminal interface
- **3D Interactive Elements**: Custom 3D ID card component with mouse-based rotation and hover effects
- **Terminal Simulation**: Full command-line interface with navigation commands, help system, and command history
- **Responsive Design**: Optimized for both desktop and mobile devices with adaptive layouts

### Build System & Development
- **Vite**: Modern build tool for fast development and optimized production builds
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports
- **PostCSS**: For CSS processing with Tailwind CSS and Autoprefixer
- **Development Tools**: Hot module replacement, runtime error overlay, and development banner integration

### Backend Architecture
The backend is built with Express.js following a modular architecture:

- **Server Structure**: Express application with middleware for JSON parsing, URL encoding, and request logging
- **Route Organization**: Centralized route registration system with API prefix structure
- **Storage Interface**: Abstract storage interface with in-memory implementation for user management
- **Development Integration**: Vite development server integration with middleware mode for seamless development experience

### Data Layer
- **Database Schema**: Drizzle ORM with PostgreSQL for data persistence
- **User Management**: Basic user schema with username/password authentication structure
- **Migration System**: Drizzle Kit for database schema migrations and updates

## External Dependencies

### UI Framework & Styling
- **React Ecosystem**: React 18 with TypeScript support, React Query for data fetching
- **UI Components**: Radix UI primitives for accessible component foundations
- **Styling**: Tailwind CSS for utility-first styling with custom terminal theme
- **Icons**: Lucide React for consistent iconography

### 3D Graphics & Interactions
- **Three.js**: For 3D rendering capabilities (loaded via CDN)
- **Custom 3D Components**: Interactive ID card with mouse-based transformations

### Development & Build Tools
- **Vite**: Build tool with React plugin and runtime error handling
- **TypeScript**: Type checking and enhanced development experience
- **ESBuild**: Fast bundling for production builds

### Database & ORM
- **Neon Database**: Serverless PostgreSQL database solution
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect
- **Connection Management**: Environment-based database URL configuration

### Form Handling & Validation
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation integrated with Drizzle for type safety

### Fonts & Assets
- **Google Fonts**: Courier Prime for monospace terminal aesthetic
- **Unsplash**: Professional headshot imagery for ID card component