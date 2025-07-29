# Portfolio V2 🚀

A modern, responsive portfolio website built with **React**, **TypeScript**, and **Vite**. Features a sleek dark/light theme toggle, multilingual support, and a fully functional contact form with both backend and client-side email services.

## ✨ Features

- **🎨 Modern UI/UX**: Clean, responsive design with smooth animations
- **🌙 Dark/Light Theme**: Toggle between dark and light modes
- **🌍 Multilingual**: Support for multiple languages (English, Urdu, Hindi)
- **📱 Fully Responsive**: Works perfectly on all device sizes
- **📧 Contact Form**: Dual email system (Backend + EmailJS fallback)
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds
- **🎯 SEO Optimized**: Meta tags and structured data
- **🔒 Secure**: Environment variables for sensitive data

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Sonner** - Toast Notifications

### Backend
- **Node.js** - Runtime
- **Express.js** - Web Framework
- **Nodemailer** - Email Service
- **Gmail SMTP** - Email Provider

### Additional Services
- **EmailJS** - Client-side email fallback
- **GitHub Pages** - Hosting (optional)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arsalan0786/Portfolio-V1.git
   cd Portfolio-V1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create `server/email.env` file:
   ```env
   SMTP_EMAIL=your-email@gmail.com
   SMTP_PASSWORD=your-16-character-app-password
   PORT=5000
   ```

4. **Set up EmailJS (optional fallback)**
   
   Update `src/services/emailService.ts` with your EmailJS credentials:
   ```typescript
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id';
   const PUBLIC_KEY = 'your_public_key';
   ```

## 🏃‍♂️ Running the Project

### Development Mode

**Option 1: Run frontend and backend separately**
```bash
# Terminal 1: Start frontend
npm run dev

# Terminal 2: Start backend
npm run server
```

**Option 2: Run both simultaneously**
```bash
npm run dev:full
```

### Production Build
```bash
npm run build
npm run preview
```

## 📧 Email Setup Guide

### Gmail SMTP Configuration

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Update email.env** with the 16-character password

### EmailJS Setup (Fallback)

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Set up email service and template
3. Update credentials in `src/services/emailService.ts`

For detailed setup instructions, see [EMAIL_SETUP.md](./EMAIL_SETUP.md)

## 🧪 Testing

### Test Email Functionality
```bash
node test-email.js
```

### Health Check
Visit: `http://localhost:5000/health`

## 📁 Project Structure

```
Portfolio-V1/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HomeSection.tsx
│   │   └── LanguageContext.tsx
│   ├── services/          # API services
│   │   └── emailService.ts
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── server/
│   ├── emailserver.js    # Express email server
│   └── email.env         # Environment variables
├── dist/                 # Build output
├── test-email.js        # Email testing script
└── README.md
```

## 🎨 Customization

### Themes
- Modify theme colors in `tailwind.config.js`
- Update CSS variables in `src/index.css`

### Languages
- Add new languages in `src/components/LanguageContext.tsx`
- Update translation strings

### Content
- Update personal information in respective components
- Replace images in `src/assets/`

## 📝 Available Scripts

| Script | Description |
|--------|-----------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run server` | Start email server |
| `npm run dev:full` | Start both frontend and backend |

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings

### Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sheikh Arsalan**
- GitHub: [@Arsalan0786](https://github.com/Arsalan0786)
- LinkedIn: [sheikharsalan8146](https://www.linkedin.com/in/sheikharsalan8146/)
- Email: buildwitharsalan@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors

## 📊 Version History

### Version 2.0.0 (Current)
- ✅ Complete email system integration
- ✅ Dual email service (Backend + EmailJS)
- ✅ Improved error handling
- ✅ Enhanced UI/UX
- ✅ Multilingual support
- ✅ Comprehensive documentation

### Version 1.0.0
- ✅ Initial portfolio design
- ✅ Basic React setup
- ✅ Responsive layout

---

⭐ **If you found this project helpful, please give it a star!** ⭐
