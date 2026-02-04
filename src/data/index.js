export const companyInfo = {
  name: "Coder",
  tagline: "Innovative Digital Solutions for Modern Businesses",
  description: "We create cutting-edge web applications and digital experiences that drive business growth and user engagement. Our team of expert developers delivers scalable, secure, and performance-optimized solutions.",
  email: "contact@coder.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech City, TC 12345",
  founded: 2020,
  social: {
    linkedin: "https://linkedin.com/company/coder",
    twitter: "https://twitter.com/coder",
    instagram: "https://instagram.com/coder",
    github: "https://github.com/coder"
  }
};

export const services = [
  {
    id: 1,
    icon: "Code",
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance and user experience.",
    features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration"]
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    features: ["React Native", "iOS & Android", "App Store Deployment", "Push Notifications"]
  },
  {
    id: 3,
    icon: "Palette",
    title: "UI/UX Design",
    description: "User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    id: 4,
    icon: "Cloud",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies that ensure reliability and performance at scale.",
    features: ["AWS & Azure", "DevOps", "CI/CD Pipelines", "Monitoring"]
  },
  {
    id: 5,
    icon: "Shield",
    title: "Security & Testing",
    description: "Comprehensive security audits and testing protocols to ensure your applications are secure and reliable.",
    features: ["Security Audits", "Automated Testing", "Performance Testing", "Code Reviews"]
  },
  {
    id: 6,
    icon: "BarChart3",
    title: "Analytics & SEO",
    description: "Data-driven insights and search engine optimization to maximize your digital presence and ROI.",
    features: ["Google Analytics", "SEO Optimization", "Performance Metrics", "A/B Testing"]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    description: "A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://ecommerce-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "Mobile",
    description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "WebRTC", "HealthKit"],
    link: "https://healthcare-app.com"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    category: "Web",
    description: "Real-time financial analytics dashboard with interactive charts, reporting, and portfolio management.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
    link: "https://finance-dashboard.com"
  },
  {
    id: 4,
    title: "Learning Management System",
    category: "Web",
    description: "Comprehensive LMS with course creation, student tracking, and interactive learning modules.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Express", "MySQL", "Socket.io"],
    link: "https://lms-platform.com"
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "Mobile",
    description: "Full-featured food delivery application with real-time tracking, payment integration, and restaurant management.",
    image: "/api/placeholder/600/400",
    technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
    link: "https://food-delivery.com"
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Web",
    description: "Property listing and management platform with virtual tours, mortgage calculator, and CRM integration.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
    link: "https://realestate-platform.com"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO",
    company: "InnovateTech",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "TechCorp delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is unmatched."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CTO",
    company: "StartupXYZ",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The mobile app they developed for us has been a game-changer. User engagement increased by 300% within the first month of launch."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Product Manager",
    company: "GrowthCorp",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Professional, reliable, and innovative. TechCorp transformed our digital presence and helped us achieve our business goals faster than expected."
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Founder",
    company: "EcoSolutions",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Their cloud solutions and DevOps expertise saved us thousands in infrastructure costs while improving our application performance significantly."
  },
  {
    id: 5,
    name: "Lisa Wang",
    title: "Marketing Director",
    company: "BrandBoost",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "The SEO and analytics implementation resulted in a 250% increase in organic traffic. Their data-driven approach is exactly what we needed."
  }
];

export const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", logo: "/api/placeholder/60/60" },
      { name: "Next.js", logo: "/api/placeholder/60/60" },
      { name: "Vue.js", logo: "/api/placeholder/60/60" },
      { name: "TypeScript", logo: "/api/placeholder/60/60" },
      { name: "Tailwind CSS", logo: "/api/placeholder/60/60" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "/api/placeholder/60/60" },
      { name: "Python", logo: "/api/placeholder/60/60" },
      { name: "Express", logo: "/api/placeholder/60/60" },
      { name: "GraphQL", logo: "/api/placeholder/60/60" },
      { name: "REST APIs", logo: "/api/placeholder/60/60" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", logo: "/api/placeholder/60/60" },
      { name: "PostgreSQL", logo: "/api/placeholder/60/60" },
      { name: "MySQL", logo: "/api/placeholder/60/60" },
      { name: "Redis", logo: "/api/placeholder/60/60" },
      { name: "Firebase", logo: "/api/placeholder/60/60" }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", logo: "/api/placeholder/60/60" },
      { name: "Azure", logo: "/api/placeholder/60/60" },
      { name: "Docker", logo: "/api/placeholder/60/60" },
      { name: "Kubernetes", logo: "/api/placeholder/60/60" },
      { name: "CI/CD", logo: "/api/placeholder/60/60" }
    ]
  }
];

export const processSteps = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
    icon: "Search"
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize the final product before development begins.",
    icon: "Palette"
  },
  {
    id: 3,
    title: "Development & Testing",
    description: "Using agile methodologies, we build your solution with regular testing, code reviews, and continuous integration practices.",
    icon: "Code"
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "We handle deployment, provide training, and offer ongoing support to ensure your solution continues to perform optimally.",
    icon: "Rocket"
  }
];

export const stats = [
  { label: "Projects Completed", value: "150+", icon: "CheckCircle" },
  { label: "Happy Clients", value: "98%", icon: "Heart" },
  { label: "Years Experience", value: "8+", icon: "Calendar" },
  { label: "Team Members", value: "25+", icon: "Users" }
];