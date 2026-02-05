import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { companyInfo } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Skip to main content
      </a>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-strong shadow-smooth border-b border-slate-200/50' 
          : 'bg-white/80 backdrop-blur-md'
      }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{companyInfo.name}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                aria-label={`Navigate to ${item.name} page`}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.path)
                    ? 'text-blue-600' 
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 ${
                  isActive(item.path)
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact"
              aria-label="Navigate to contact page"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-fade-in-up visible">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-strong border-t border-slate-200 shadow-smooth-lg rounded-b-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50 shadow-sm'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link 
                  to="/contact"
                  className="btn-primary w-full justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
