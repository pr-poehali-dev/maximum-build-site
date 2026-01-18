#!/bin/bash

echo "================================"
echo "Building site for Open Server"
echo "================================"
echo ""

echo "Step 1: Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install dependencies"
    exit 1
fi

echo ""
echo "Step 2: Building production version..."
npm run build
if [ $? -ne 0 ]; then
    echo "ERROR: Build failed"
    exit 1
fi

echo ""
echo "================================"
echo "SUCCESS! Build completed."
echo "================================"
echo ""
echo "The static files are now in the 'dist' folder."
echo ""
echo "Next steps:"
echo "1. Copy all files from 'dist' folder to your Open Server directory"
echo "2. Make sure .htaccess file is in the root directory"
echo "3. Enable mod_rewrite in Apache (if using Apache)"
echo "4. Open your site in browser"
echo ""
echo "For detailed instructions, see BUILD_GUIDE.md"
echo ""
