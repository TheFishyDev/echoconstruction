#!/bin/bash

# Exit on error
set -e

# Build the project
echo "Building the project..."
npm run build

# Create a temporary directory for deployment
TEMP_DEPLOY_DIR=/tmp/gh-pages-deploy
rm -rf $TEMP_DEPLOY_DIR
mkdir -p $TEMP_DEPLOY_DIR

# Copy the built files to the temporary directory
cp -r dist/* $TEMP_DEPLOY_DIR/

# Create a .nojekyll file to bypass Jekyll processing
touch $TEMP_DEPLOY_DIR/.nojekyll

# Initialize a new git repository in the temporary directory
cd $TEMP_DEPLOY_DIR
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Add the GitHub repository as a remote
git remote add origin https://github.com/TheFishyDev/echoconstruction.git

# Force push the contents to the gh-pages branch
echo "Deploying to GitHub Pages..."
git push -f origin master:gh-pages

# Clean up
cd -
rm -rf $TEMP_DEPLOY_DIR

echo "Deployment successful! Your site should be live at https://thefishydev.github.io/echoconstruction/"
