# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your EmailJS credentials
# Get them from: https://www.emailjs.com/
```

### 3. Set Up EmailJS (Required for Contact Form)

1. **Sign up** at [EmailJS.com](https://www.emailjs.com/)
2. **Create an Email Service**:
   - Go to Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**:
   - Go to Email Templates
   - Click "Create New Template"
   - Use these template variables:
     ```
     From: {{from_name}} ({{from_email}})
     Phone: {{phone}}
     Service Interest: {{service}}
     Message: {{message}}
     ```

4. **Get Your Credentials**:
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account > API Keys

5. **Add to .env**:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### 4. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### 5. Customize Content

Edit `src/data/index.js` to update:
- Company information
- Services
- Portfolio projects
- Testimonials
- Technologies

### 6. Build for Production
```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## ✅ Checklist Before Deployment

- [ ] EmailJS configured and tested
- [ ] All placeholder content replaced
- [ ] Company information updated in `src/data/index.js`
- [ ] Images added to `/public/images/`
- [ ] Environment variables set in hosting platform
- [ ] Contact form tested and working
- [ ] Site tested on mobile devices
- [ ] All links working correctly

## 🐛 Troubleshooting

### Contact Form Not Working
1. Check that all EmailJS environment variables are set
2. Verify EmailJS service and template are active
3. Check browser console for errors
4. Test EmailJS credentials in their dashboard

### Build Errors
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install --legacy-peer-deps`
3. Try building again

### Styling Issues
1. Make sure Tailwind CSS is properly configured
2. Check that `postcss.config.js` exists
3. Verify `tailwind.config.js` content paths

## 📚 Next Steps

1. **Deploy**: Use Vercel, Netlify, or your preferred hosting
2. **Analytics**: Add Google Analytics tracking ID
3. **SEO**: Update meta tags in `src/components/SEO.jsx`
4. **Images**: Replace placeholder images with real ones
5. **Testing**: Add tests for critical functionality

## 🆘 Need Help?

- Check the [README.md](./README.md) for detailed documentation
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment guides
- Email: contact@coder.com
