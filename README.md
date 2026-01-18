# CT University Recruitment Portal

A comprehensive web application for Zambian students to apply to CT University in India with exclusive benefits including 50% scholarship, free airport pickup, and complimentary 3-day India tour.

## Features

- 🎓 **87+ Programs** - Complete course catalog from CT University and CT Group
- 💰 **50% Scholarship** - Automatic tuition discount for all Zambian students  
- ✈️ **Free Airport Pickup** - Complimentary pickup from Delhi/Chandigarh Airport
- 🗺️ **Free 3-Day Tour** - Choose from Taj Mahal, Manali, Delhi Heritage, or Shimla tours
- 🏠 **Accommodation Options** - University hostel, near-campus, or in-city living
- 📧 **Instant Processing** - Offer letter within 30 minutes via email
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Built with React, Tailwind CSS, and Framer Motion

## Tech Stack

- **Frontend**: React + Vite, React Router, Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Backend**: PHP (for email processing)
- **Deployment**: Shared hosting compatible

## Development Setup

### Prerequisites
- Node.js 18+ or Bun
- PHP 7.4+ (for production API)

### Installation

```bash
# Clone repository
git clone https://github.com/Lottie128/ctu-recruitment-portal.git
cd ctu-recruitment-portal

# Install dependencies
bun install
# or
npm install

# Create environment file
cp .env.example .env

# Update .env with your configuration
# Edit VITE_API_URL to point to your API endpoint

# Start development server
bun run dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

## Production Deployment

### Build for Production

```bash
bun run build
# or
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy to Shared Hosting

1. **Build the application**:
   ```bash
   bun run build
   ```

2. **Upload files to your hosting**:
   - Upload everything from `dist/` folder to your public_html (or web root)
   - Upload `api/` folder to your hosting
   - Upload root `.htaccess` file

3. **Configure environment**:
   - Copy `.env.example` to `.env` on server
   - Update `VITE_API_URL` with your domain
   - Ensure `api/submit-application.php` has correct email address

4. **Set permissions**:
   ```bash
   chmod 755 api/
   chmod 644 api/*.php
   chmod 644 .htaccess
   chmod 644 api/.htaccess
   ```

5. **Test the application**:
   - Visit your domain
   - Submit a test application
   - Check email delivery

## Email Configuration

The application sends emails to `applications@zeroaitech.tech` when students submit applications.

### PHP Mail Setup

The `api/submit-application.php` file uses PHP's built-in `mail()` function. Most shared hosting providers have this configured by default.

If emails are not being delivered:

1. **Check PHP mail() is enabled** on your hosting
2. **Verify SPF records** for your domain
3. **Consider using SMTP** instead (requires PHPMailer library)

### SMTP Alternative (Optional)

For better email deliverability, you can modify `submit-application.php` to use SMTP:

```bash
composer require phpmailer/phpmailer
```

Then update the PHP file to use PHPMailer with your SMTP credentials.

## Project Structure

```
ctu-recruitment-portal/
├── src/
│   ├── components/      # Reusable components (Navbar, Footer)
│   ├── pages/          # Page components (Home, Apply, Blog, etc.)
│   ├── data/           # Course and accommodation data
│   ├── config/         # API configuration
│   └── App.jsx         # Main app component with routing
├── api/
│   ├── submit-application.php  # Email submission handler
│   └── .htaccess              # API security config
├── public/             # Static assets
├── .htaccess          # SPA routing configuration
├── .env.example       # Environment variables template
└── package.json       # Dependencies
```

## API Endpoints

### POST /api/submit-application.php

Submits a student application and sends emails.

**Request Body**:
```json
{
  "fullName": "JOHN DOE",
  "email": "john@example.com",
  "mobile": "+260123456789",
  "programme": "B.Tech CSE",
  "welcomeTour": "taj-mahal",
  "accommodation": "university-hostel",
  // ... other form fields
}
```

**Response** (Success):
```json
{
  "success": true,
  "message": "Application submitted successfully!",
  "applicationId": "APP-20260118235959"
}
```

**Response** (Error):
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Environment Variables

```bash
# API Configuration
VITE_API_URL=https://yourdomain.com/api

# Site Configuration  
VITE_SITE_URL=https://yourdomain.com
VITE_SITE_NAME=CT University Recruitment Portal

# Contact Information
VITE_CONTACT_EMAIL=applications@zeroaitech.tech
VITE_CONTACT_PHONE_1=+91-90413-30007
VITE_CONTACT_PHONE_2=+91-99145-04901

# Social Media
VITE_LINKEDIN_URL=https://linkedin.com/in/lottie-mukuka-8b984110a
VITE_WEBSITE_URL=https://zeroaitech.tech
```

## Troubleshooting

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && bun install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Email Not Sending
- Check PHP error logs on your server
- Verify `mail()` function is enabled
- Test with a simple PHP mail script
- Check spam folders

### 404 Errors on Refresh
- Ensure `.htaccess` is uploaded to root
- Verify Apache `mod_rewrite` is enabled
- Check hosting supports `.htaccess` files

### CORS Errors
- Verify `api/.htaccess` has CORS headers
- Update `Access-Control-Allow-Origin` in PHP file
- Check browser console for specific CORS errors

## Support

For issues or questions:
- Email: applications@zeroaitech.tech
- Phone: +91-90413-30007 | +91-99145-04901
- Website: https://zeroaitech.tech

## License

Proprietary - © 2026 ZeroAI Technologies. All rights reserved.

## Credits

Developed by **Lottie Mukuka** | ZeroAI Technologies  
LinkedIn: https://linkedin.com/in/lottie-mukuka-8b984110a
