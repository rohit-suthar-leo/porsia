#!/bin/bash

# Quick test script for MyPorsia landing page

echo "🧪 MyPorsia Local Test Script"
echo "=============================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠️  WARNING: .env file not found"
    echo ""
    echo "To test waitlist form, you need to:"
    echo "1. Run: ./setup-aws.sh"
    echo "2. Or manually create .env file"
    echo ""
    echo "You can still view the landing page without AWS setup."
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "🚀 Starting development server..."
echo ""
echo "Landing page will open at: http://localhost:3000"
echo ""
echo "Test checklist:"
echo "  ✓ Hero section loads"
echo "  ✓ Features section visible"
echo "  ✓ How It Works timeline"
echo "  ✓ Testimonials show"
echo "  ✓ Waitlist form at bottom"
echo ""
echo "Press Ctrl+C to stop server"
echo ""

npm run dev
