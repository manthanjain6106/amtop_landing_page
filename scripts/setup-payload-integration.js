#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Payload CMS Integration for AMTOP Landing Page...\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Please run this script from the amtop_landing_page directory');
  process.exit(1);
}

// Create .env.local if it doesn't exist
const envPath = '.env.local';
if (!fs.existsSync(envPath)) {
  const envContent = `# Payload CMS Configuration
NEXT_PUBLIC_PAYLOAD_API_URL=http://localhost:3001/api
PAYLOAD_API_URL=http://localhost:3001/api

# Database Configuration (for Payload CMS)
DATABASE_URI=mongodb://localhost:27017/amtop_blog

# Payload Secret (generate a secure random string)
PAYLOAD_SECRET=${generateSecret()}

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file');
} else {
  console.log('ℹ️  .env.local already exists');
}

// Check if Payload CMS directory exists
const payloadPath = '../payload-cms';
if (!fs.existsSync(payloadPath)) {
  console.log('❌ Payload CMS directory not found at ../payload-cms');
  console.log('   Please ensure the payload-cms directory is in the same parent directory as amtop_landing_page');
  process.exit(1);
}

// Create .env for Payload CMS if it doesn't exist
const payloadEnvPath = path.join(payloadPath, '.env');
if (!fs.existsSync(payloadEnvPath)) {
  const payloadEnvContent = `# Database Configuration
DATABASE_URI=mongodb://localhost:27017/amtop_blog

# Payload Secret (same as above)
PAYLOAD_SECRET=${generateSecret()}

# Server Configuration
PORT=3001
`;

  fs.writeFileSync(payloadEnvPath, payloadEnvContent);
  console.log('✅ Created .env file for Payload CMS');
} else {
  console.log('ℹ️  Payload CMS .env already exists');
}

console.log('\n🎉 Setup complete! Next steps:');
console.log('1. Make sure MongoDB is running');
console.log('2. Start Payload CMS: cd ../payload-cms && npm run dev');
console.log('3. Start AMTOP Landing Page: npm run dev');
console.log('4. Access Payload Admin at http://localhost:3001/admin');
console.log('5. Create your first blog post!');

function generateSecret() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}
