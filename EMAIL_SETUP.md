# Email Server Setup Guide

## 📧 Overview
This portfolio uses a Node.js/Express server with Nodemailer to handle contact form submissions via Gmail SMTP.

## 🚀 Quick Start

### 1. Start the email server
```bash
npm run server
```

### 2. Start the frontend
```bash
npm run dev
```

### 3. Start both together
```bash
npm run dev:full
```

## 🔧 Gmail SMTP Configuration

### Step 1: Enable App Passwords (Required for Gmail)
1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **Security** → **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### Step 2: Update email.env
Edit `/server/email.env`:
```env
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-16-character-app-password
PORT=5000
```

⚠️ **Important**: Use the App Password, not your regular Gmail password!

## 📋 API Endpoints

### Health Check
```
GET http://localhost:5000/health
```
Returns server status and timestamp.

### Send Email
```
POST http://localhost:5000/send-email
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com", 
  "subject": "Hello",
  "message": "This is a test message"
}
```

## 🧪 Testing

### Test the server functionality:
```bash
node test-email.js
```

This will test:
- ✅ Health endpoint
- ✅ Email validation  
- ✅ Required fields validation

### Manual testing:
1. Start the server: `npm run server`
2. Visit the portfolio contact form
3. Fill out and submit the form
4. Check the configured email inbox

## 🔍 Troubleshooting

### "Invalid login" error
- Make sure you're using an App Password, not your regular password
- Enable 2-step verification on your Google account
- Double-check the email address in `email.env`

### "ECONNREFUSED" error
- The server isn't running. Start it with `npm run server`
- Check if port 5000 is available

### Form submission fails
- Check browser console for errors
- Verify frontend is making requests to `http://localhost:5000/send-email`
- Ensure CORS is properly configured

## 🏗️ Development

### Server Structure
```
server/
├── emailserver.js    # Main Express server
└── email.env        # SMTP configuration
```

### Frontend Integration
The contact form (`src/components/ContactSection.tsx`) sends POST requests to `/send-email` with form data.

## 🔒 Security Notes

1. **Never commit real credentials** to version control
2. Use App Passwords instead of account passwords  
3. Consider using environment variables in production
4. Implement rate limiting for production use
5. Add input sanitization for production

## 📝 Email Template

The server sends HTML-formatted emails with:
- Sender information (name, email, subject)
- Message content with proper formatting
- Professional styling with Tailwind-inspired colors
- Reply-To header set to sender's email

## 🚀 Production Deployment

For production:
1. Use environment variables instead of .env files
2. Add rate limiting (express-rate-limit)
3. Add request validation (joi or similar)
4. Use a dedicated email service (SendGrid, AWS SES)
5. Implement proper logging
6. Add SSL/TLS termination
