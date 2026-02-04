# Deployment Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:5173

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Configure EmailJS (for contact form):
   - Sign up at https://emailjs.com
   - Create a service and template
   - Update `.env` with your credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

## Customization

### Company Information
Edit `src/data/index.js` to update:
- Company name, tagline, description
- Contact information
- Services and features
- Portfolio projects
- Testimonials
- Technology stack

### Branding & Colors
1. **Tailwind Config** (`tailwind.config.js`):
   - Update brand colors
   - Modify fonts and spacing

2. **CSS Variables** (`src/index.css`):
   - Customize color palette
   - Adjust shadows and effects

### Content Sections
- Add/remove sections in `src/App.jsx`
- Customize individual components in `src/components/`

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA

### Traditional Hosting
1. Build: `npm run build`
2. Upload `dist` folder contents to web server
3. Configure server for SPA routing

## Performance Optimization

### Before Deployment
- [ ] Optimize images (WebP format, proper sizing)
- [ ] Update meta tags and OG images
- [ ] Add favicon and app icons
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Test contact form functionality
- [ ] Run Lighthouse audit (target: 90+ scores)

### SEO Checklist
- [ ] Update `src/components/SEO.jsx` with your site info
- [ ] Create and upload `sitemap.xml`
- [ ] Configure `robots.txt`
- [ ] Add structured data
- [ ] Test social media sharing

## Production Checklist

### Technical
- [ ] Environment variables configured
- [ ] Build process successful
- [ ] All links working
- [ ] Forms functional
- [ ] Mobile responsive
- [ ] Cross-browser tested

### Content
- [ ] All placeholder content replaced
- [ ] Images optimized and uploaded
- [ ] Contact information updated
- [ ] Legal pages added (Privacy, Terms)
- [ ] Analytics configured

### Performance
- [ ] Lighthouse score > 90
- [ ] Page load time < 3s
- [ ] Images lazy loaded
- [ ] CSS/JS minified

## Maintenance

### Regular Updates
- Update dependencies monthly
- Monitor performance metrics
- Update content and portfolio
- Backup website regularly

### Security
- Keep dependencies updated
- Monitor for vulnerabilities
- Use HTTPS
- Implement CSP headers

## Support

For technical issues:
1. Check the console for errors
2. Verify environment variables
3. Test in different browsers
4. Check network requests

Common issues:
- **Build fails**: Check Node.js version (16+)
- **Styles not loading**: Verify Tailwind config
- **Contact form not working**: Check EmailJS setup
- **Images not loading**: Verify file paths and formats

## File Structure Reference

```
professional-react-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── data/             # Content and configuration
│   ├── hooks/            # Custom React hooks
│   └── index.css         # Global styles
├── .env.example          # Environment variables template
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite configuration
```

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [EmailJS Setup](https://www.emailjs.com/docs/)
- [Vercel Deployment](https://vercel.com/docs)

---

Need help? Contact: support@coder.com