// Test script to debug Payload CMS API connection
// Run this with: node test-api.js

const testApiConnection = async () => {
  const apiUrls = [
    'http://localhost:3001/api',
    'https://payload-cms-sandy.vercel.app/api',
    'https://cms.amtop.com/api' // Fallback URL
  ];

  for (const apiUrl of apiUrls) {
    console.log(`\n🔍 Testing: ${apiUrl}`);
    
    try {
      // Test posts endpoint
      const postsResponse = await fetch(`${apiUrl}/posts?where[status][equals]=published&limit=1`);
      console.log(`📝 Posts endpoint: ${postsResponse.status} ${postsResponse.statusText}`);
      
      if (postsResponse.ok) {
        const postsData = await postsResponse.json();
        console.log(`   Found ${postsData.totalDocs || 0} posts`);
        if (postsData.docs && postsData.docs.length > 0) {
          console.log(`   First post: ${postsData.docs[0].title}`);
        }
      }

      // Test categories endpoint
      const categoriesResponse = await fetch(`${apiUrl}/categories`);
      console.log(`📂 Categories endpoint: ${categoriesResponse.status} ${categoriesResponse.statusText}`);
      
      if (categoriesResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        console.log(`   Found ${categoriesData.totalDocs || 0} categories`);
      }

      // Test tags endpoint
      const tagsResponse = await fetch(`${apiUrl}/tags`);
      console.log(`🏷️  Tags endpoint: ${tagsResponse.status} ${tagsResponse.statusText}`);
      
      if (tagsResponse.ok) {
        const tagsData = await tagsResponse.json();
        console.log(`   Found ${tagsData.totalDocs || 0} tags`);
      }

    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
  }
};

// Run the test
testApiConnection().catch(console.error);
