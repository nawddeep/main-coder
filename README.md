# Professional React Website

A modern, professional, production-ready website built with React 18+ and Vite. Features a clean design, smooth animations, and comprehensive business sections.

## 🚀 Features

- **Modern Tech Stack**: React 18.3+, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: React Helmet Async, structured data, meta tags
- **Performance**: Lazy loading, code splitting, optimized bundle
- **Accessibility**: WCAG 2.1 AA compliant, keyboard navigation
- **Professional Sections**: Hero, Services, About, Portfolio, Process, Testimonials, Technologies, Contact

## 🛠️ Tech Stack

- **Framework**: React 18.3+ with Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Forms**: EmailJS integration ready
- **Animations**: CSS-only animations and transitions

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd professional-react-website
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

- `VITE_EMAILJS_SERVICE_ID`: EmailJS service ID for contact form
- `VITE_EMAILJS_TEMPLATE_ID`: EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: EmailJS public key
- `VITE_SITE_URL`: Your website URL
- `VITE_GA_TRACKING_ID`: Google Analytics tracking ID (optional)

### Customization

1. **Company Information**: Update `src/data/index.js` with your company details
2. **Colors & Branding**: Modify `tailwind.config.js` and CSS variables in `src/index.css`
3. **Content**: Update text, images, and data in the data file
4. **Sections**: Add/remove sections in `src/App.jsx`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Services.jsx    # Services showcase
│   ├── About.jsx       # About company
│   ├── Portfolio.jsx   # Project portfolio
│   ├── Process.jsx     # Work process
│   ├── Testimonials.jsx # Client testimonials
│   ├── Technologies.jsx # Tech stack
│   ├── CTA.jsx         # Call-to-action
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer
│   └── SEO.jsx         # SEO component
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.js
├── data/               # Static data
│   └── index.js        # Company & content data
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#1e3a8a → #2563eb → #06b6d4)
- **Surface**: Light backgrounds (#fafafa, #f8fafc)
- **Text**: Layered grays (#0f172a, #334155, #475569)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tight tracking
- **Body**: 16-18px base size

### Components
- **Buttons**: `.btn-primary`, `.btn-secondary`
- **Cards**: `.glass-card`, `.card-hover`
- **Layout**: `.container-custom`, `.section-padding`

## 📱 Responsive Breakpoints

- **sm**: 640px (Mobile landscape)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deployment Checklist

- [ ] Update environment variables for production
- [ ] Configure EmailJS for contact form
- [ ] Add Google Analytics tracking ID
- [ ] Update meta tags and OG images
- [ ] Add favicon and app icons
- [ ] Configure robots.txt and sitemap
- [ ] Test on multiple devices and browsers
- [ ] Run Lighthouse audit (target: 90+ scores)

## 🔍 SEO Features

- Structured data (JSON-LD)
- Open Graph meta tags
- Twitter Card support
- Semantic HTML5 markup
- Alt text for images
- Proper heading hierarchy
- Fast loading times
- Mobile-friendly design

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- Sufficient color contrast
- Skip links for navigation

## 📊 Performance

- Lazy loading for images
- Code splitting where appropriate
- Optimized bundle size (<500KB initial)
- Fast Time to Interactive (<3s)
- Efficient CSS with Tailwind purging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: contact@coder.com
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

---

Built with ❤️ by Coder