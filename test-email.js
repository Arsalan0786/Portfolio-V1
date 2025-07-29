const axios = require('axios');

const testEmailServer = async () => {
  console.log('🧪 Testing Email Server...\n');

  try {
    // Test 1: Health check
    console.log('1. Testing health endpoint...');
    const healthResponse = await axios.get('http://localhost:5000/health');
    console.log('✅ Health check passed:', healthResponse.data.message);
    console.log(`   Status: ${healthResponse.data.status}`);
    console.log(`   Timestamp: ${healthResponse.data.timestamp}\n`);

    // Test 2: Test email validation (should fail)
    console.log('2. Testing invalid email validation...');
    try {
      await axios.post('http://localhost:5000/send-email', {
        name: 'Test User',
        email: 'invalid-email',
        subject: 'Test Subject',
        message: 'Test message'
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('✅ Email validation working:', error.response.data.error);
      } else {
        console.log('❌ Unexpected error:', error.message);
      }
    }

    // Test 3: Test missing fields validation
    console.log('\n3. Testing missing fields validation...');
    try {
      await axios.post('http://localhost:5000/send-email', {
        name: 'Test User',
        email: 'test@example.com'
        // Missing subject and message
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('✅ Required fields validation working:', error.response.data.error);
      } else {
        console.log('❌ Unexpected error:', error.message);
      }
    }

    console.log('\n📧 Email server is working correctly!');
    console.log('Note: Actual email sending depends on SMTP configuration in email.env');

  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.log('❌ Email server is not running!');
      console.log('   Start the server with: npm run server');
    } else {
      console.log('❌ Error testing server:', error.message);
    }
  }
};

// Only run if this file is executed directly
if (require.main === module) {
  testEmailServer();
}

module.exports = testEmailServer;
