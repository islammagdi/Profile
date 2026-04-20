# Islam Magdi Portfolio - Development Guidelines

## Project Overview
This portfolio showcases Islam Magdi's UI/UX design expertise with a modern, dark-themed interface featuring purple gradients and glassmorphism effects.

## Design System Guidelines

### Typography
- **Base font-size**: 14px (as defined in globals.css)
- **Title font**: Russo One for the main portfolio title
- **System fonts**: Use system-ui fallbacks for body text
- **Font weights**: 
  - Normal: 400
  - Medium: 500

### Color Palette
- **Primary theme**: Purple gradients
- **Background**: Dark theme with slate-900 to purple-900 gradient
- **Glass effects**: Semi-transparent backgrounds with backdrop-blur
- **Accents**: Purple-400 for highlights and interactive elements

### Layout Principles
- **Responsive-first**: Mobile-first approach with desktop enhancements
- **Flexbox & Grid**: Use modern layout methods, avoid absolute positioning
- **Full-width sections**: Each section spans full viewport width
- **Glassmorphism**: Semi-transparent cards with backdrop-blur effects

### Component Guidelines

#### Buttons
- **Primary**: Purple gradient with glassmorphism effect
- **Secondary**: Transparent with purple border
- **Interactive states**: Smooth hover animations with scale/glow effects

#### Cards
- **Glass effect**: backdrop-blur-md with semi-transparent background
- **Borders**: Subtle purple borders with rounded corners
- **Shadows**: Use purple-tinted shadows for depth

#### Navigation
- **Fixed positioning**: Sticky navigation with glassmorphism
- **Smooth scrolling**: Animated transitions between sections
- **Mobile responsive**: Hamburger menu for smaller screens

### Animation Guidelines
- **Motion library**: Use Motion (Framer Motion) for all animations
- **Entrance animations**: Fade-in with slide effects
- **Hover states**: Subtle scale and glow effects
- **Scroll animations**: Progressive disclosure as sections come into view
- **Performance**: Use transform and opacity for smooth animations

### Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large screens**: 1440px+ (max-width container)

## Technical Guidelines

### File Organization
- **Components**: Individual files in `/components` directory
- **UI Components**: ShadCN components in `/components/ui`
- **Styles**: Global styles in `/styles/globals.css`
- **Assets**: Static assets in `/public/assets`

### Code Quality
- **TypeScript**: Use proper typing for all components
- **Clean code**: Refactor as you go, avoid code duplication
- **Performance**: Optimize images, use lazy loading where appropriate
- **Accessibility**: Proper ARIA labels and semantic HTML

### External Integrations
- **WhatsApp**: Direct link with pre-filled Arabic message
- **Resume**: Google Drive download link
- **Dribbble**: Portfolio showcase link
- **Favicon**: Personal image from Cloudinary

## Content Guidelines

### Sections
1. **Hero**: Introduction with animated background
2. **About**: Personal story and design philosophy  
3. **Portfolio**: Project showcases with interactive previews
4. **Skills**: Technical expertise with visual indicators
5. **Contact**: Professional contact form and social links

### Messaging
- **Professional tone**: Confident but approachable
- **Arabic support**: WhatsApp integration with Arabic pre-filled message
- **Experience level**: 3+ years in UI/UX design
- **Specialization**: User-centered design solutions

## Deployment Notes
- **Platform**: GitHub Pages
- **Build tool**: Vite for optimal performance
- **Auto-deployment**: GitHub Actions on push to main branch
- **URL**: https://islammagdi.github.io/UIX-Profile