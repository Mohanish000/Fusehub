#!/bin/bash

# FuseHub Media - Quick Start Guide
# Run this script to get started with the project

echo "🚀 FuseHub Media Website - Quick Start"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo "✅ NPM is installed: $(npm --version)"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🎨 Design System:"
echo "   Primary Color: #FF5C3A (Coral Orange)"
echo "   Typography: Syne (headings) + DM Sans (body)"
echo "   Responsive: Mobile-first design"
echo ""

echo "📱 14 Sections Included:"
echo "   1. Header (Sticky with blur effect)"
echo "   2. Hero (Animated stats)"
echo "   3. Brand Logos (Scrolling marquee)"
echo "   4. Stats (Count-up animation)"
echo "   5. How It Works (4-step process)"
echo "   6. Creator Partners (9 cards)"
echo "   7. University Partners (18 logos)"
echo "   8. Services (Tabbed: Brands/Creators)"
echo "   9. Case Study (Featured campaign)"
echo "   10. About (Founder + values)"
echo "   11. Testimonials (3 reviews)"
echo "   12. FAQ (7 Q&A accordion)"
echo "   13. Contact (Form + info)"
echo "   14. Footer (5-column layout)"
echo ""

echo "⚡ Available Commands:"
echo ""
echo "  npm run dev      - Start development server (http://localhost:5173)"
echo "  npm run build    - Create production build"
echo "  npm run preview  - Preview production build"
echo "  npm run lint     - Run ESLint"
echo ""

# Offer to start dev server
read -p "Would you like to start the dev server now? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🌐 Starting development server..."
    echo "📍 Open your browser to: http://localhost:5173"
    echo "Press Ctrl+C to stop the server"
    echo ""
    npm run dev
else
    echo ""
    echo "💡 To start the dev server later, run: npm run dev"
    echo "📚 Read BUILD_SUMMARY.md for detailed information"
    echo "📖 Read README.md for complete documentation"
fi
