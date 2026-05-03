# FuseHub Media - Official Website

A production-ready React + Vite website for **FuseHub Media**, a creator-brand collaboration agency based in Nagpur, India.

## 🚀 Features

✅ **14 Complete Sections:**
- Sticky Header with smooth navigation
- Hero section with animated stats cards
- Brand logos marquee (scrolling brands)
- Animated statistics counter
- How-it-works process flow
- Creator network showcase (9 cards)
- University partnerships grid
- Tabbed services section
- Featured case study
- About founder section
- Customer testimonials
- FAQ accordion
- Contact form
- Full footer

✅ **Modern Design:**
- Light, clean aesthetic with white backgrounds
- Coral Orange (#FF5C3A) primary accent color
- Responsive grid layouts
- Smooth animations & transitions
- Glassmorphism effects on header
- Mobile-first responsive design

✅ **Performance Optimized:**
- Vite for lightning-fast builds
- Code splitting & lazy loading ready
- Optimized CSS with custom properties
- Smooth scroll behavior
- Intersection Observer for animations

✅ **Developer Friendly:**
- TypeScript for type safety
- CSS Modules per component
- Reusable utility classes
- Clean component architecture
- Easy to customize design tokens

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx & Header.css
│   ├── Hero.tsx & Hero.css
│   ├── BrandLogos.tsx & BrandLogos.css
│   ├── Stats.tsx & Stats.css
│   ├── HowItWorks.tsx & HowItWorks.css
│   ├── CreatorPartners.tsx & CreatorPartners.css
│   ├── UniversityPartners.tsx & UniversityPartners.css
│   ├── Services.tsx & Services.css
│   ├── CaseStudy.tsx & CaseStudy.css
│   ├── About.tsx & About.css
│   ├── Testimonials.tsx & Testimonials.css
│   ├── FAQ.tsx & FAQ.css
│   ├── Contact.tsx & Contact.css
│   └── Footer.tsx & Footer.css
├── styles/
│   └── globals.css (design system & utilities)
├── utils/
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Design System

### Colors
- **Primary**: #FF5C3A (Coral Orange)
- **Primary Hover**: #E04020
- **Background**: #FFFFFF
- **Alt Background**: #F8F8FA
- **Text Primary**: #1A1A2E
- **Text Secondary**: #6B6B80
- **Highlight**: #FFF0EC
- **Success**: #0EA5A0
- **Dark**: #1A1A2E

### Typography
- **Headings**: Syne (Google Fonts) - Bold & strong
- **Body**: DM Sans (Google Fonts) - Clean & readable

### Spacing System
- XS: 0.25rem
- SM: 0.5rem
- MD: 1rem
- LG: 1.5rem
- XL: 2rem
- 2XL: 3rem
- 3XL: 4rem
- 4XL: 6rem

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool
- **TypeScript** - Type safety
- **Framer Motion 11** - Animations
- **Lucide React** - Icons
- **React Scroll** - Smooth navigation
- **CSS Modules** - Component styling
- **CSS Custom Properties** - Design tokens

## 📦 Installation & Setup

1. **Start development server:**
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

2. **Build for production:**
```bash
npm run build
```

3. **Preview production build:**
```bash
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.ts` with your repo name
2. Run: `npm run build`
3. Deploy the `dist` folder

### Traditional Hosting (Nginx, Apache, etc.)
```bash
npm run build
# Upload contents of 'dist' folder to your server
```

## 📝 Configuration

### Update Contact Form
In `src/components/Contact.tsx`, replace `YOUR_FORMSPREE_ID` with your actual Formspree ID:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
  // ... form submission code
});
```

### Customize Company Info
Update these in relevant components:
- Email: `src/components/Contact.tsx` & `src/components/Footer.tsx`
- Phone: `src/components/Contact.tsx`
- Social Links: `src/components/Contact.tsx` & `src/components/Footer.tsx`

### Modify Creators/Universities
Edit the arrays in:
- `src/components/CreatorPartners.tsx` - Creator data
- `src/components/UniversityPartners.tsx` - University data
- `src/components/BrandLogos.tsx` - Brand list

## 🎯 Customization Guide

### Change Primary Color
Edit `src/styles/globals.css`:
```css
--color-primary: #FF5C3A; /* Change this */
--color-primary-hover: #E04020;
```

### Add/Remove Sections
Edit `src/App.tsx` and add/remove component imports and usages.

### Adjust Spacing
Modify spacing scale in `src/styles/globals.css`:
```css
--space-xl: 2rem; /* Adjust these values */
```

### Update Animations
Framer Motion variants are defined in each component's animation section.

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully to screen sizes with CSS media queries.

## ✨ Features Highlight

### Interactive Elements
- ✅ Sticky header with blur effect on scroll
- ✅ Smooth scroll navigation
- ✅ Animated hero stats cards with floating motion
- ✅ Scrolling brand marquee (dual direction)
- ✅ Count-up animations on stats
- ✅ Step-by-step process flow with connectors
- ✅ Creator cards with hover effects
- ✅ Service tabs with smooth transitions
- ✅ FAQ accordion with smooth expand/collapse
- ✅ Form validation ready

### Performance Features
- ✅ Lazy loading ready
- ✅ Optimized bundle size
- ✅ CSS variables for dynamic theming
- ✅ Mobile-optimized images
- ✅ Intersection Observer for on-scroll animations

## 🔗 Key Routes & Sections

| Section | ID | Purpose |
|---------|-----|---------|
| Home | `hero` | Main landing |
| How It Works | `how-it-works` | 4-step process |
| Creators | `creators` | Creator network |
| Universities | `universities` | Ed partnerships |
| Services | `services` | Service offerings |
| Case Study | `case-study` | Featured campaign |
| About | `about` | Company info |
| FAQ | `faq` | Q&A section |
| Contact | `contact` | Contact form |

## 📞 Support & Contact

- **Email**: fusehubmedia01@gmail.com
- **Phone**: +91 9421557925
- **Location**: Nagpur, Maharashtra, India

## 📄 License

This project is proprietary to FuseHub Media.

## 🎉 Credits

Built with ❤️ using React, Vite, and modern web technologies.

---

**Last Updated**: May 3, 2026
**Version**: 1.0.0

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
