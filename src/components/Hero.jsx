import { ArrowRight, Play, CheckCircle, Users, Award, Zap } from 'lucide-react';
import { companyInfo, stats } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div 
            ref={ref}
            className={`space-y-6 sm:space-y-8 text-center lg:text-left ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Award-Winning Development Team
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Build the Future with{' '}
                <span className="text-gradient">
                  Innovative Digital Solutions
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {companyInfo.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-primary group w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('#portfolio')}
                className="btn-secondary group w-full sm:w-auto"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                View Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-4">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-900 transition-colors duration-300">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-900 transition-colors duration-300">30-Day Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-900 transition-colors duration-300">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            {/* Hero Visual */}
            <div className="relative floating">
              <div className="glass-card p-8 space-y-6 hover:shadow-smooth-lg transition-all duration-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Project Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-800">E-commerce Platform</span>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Completed</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-blue-600 animate-pulse" />
                      <span className="text-sm font-medium text-blue-800">Mobile App Development</span>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">In Progress</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-slate-600" />
                      <span className="text-sm font-medium text-slate-800">Cloud Migration</span>
                    </div>
                    <span className="text-xs text-slate-600 font-medium">Planning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center hover:border-blue-600 transition-colors duration-300">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;