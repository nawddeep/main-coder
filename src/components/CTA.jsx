import { ArrowRight, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CTA = () => {
  const [ref, isVisible] = useScrollAnimation();

  const benefits = [
    {
      icon: CheckCircle,
      text: "Free consultation & project estimate"
    },
    {
      icon: Shield,
      text: "30-day money-back guarantee"
    },
    {
      icon: Clock,
      text: "Fast turnaround & on-time delivery"
    },
    {
      icon: Award,
      text: "Award-winning development team"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div 
          ref={ref}
          className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium mb-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Award className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <br />
            <span className="text-cyan-200 inline-block hover:scale-105 transition-transform duration-300">Professional Development</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Join 150+ successful businesses that have transformed their digital presence with our expert development services. 
            Let's build something amazing together.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-110 active:scale-100 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Start Your Project Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => {
                const element = document.querySelector('#portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/20 hover:scale-110 active:scale-100 transition-all duration-300 inline-flex items-center gap-2"
            >
              View Our Work
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={benefit.text}
                  className={`flex items-center space-x-3 text-white/90 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <Icon className="w-5 h-5 text-cyan-200 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
              <div className="flex items-center space-x-2 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Trusted by 150+ companies</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm">98% client satisfaction rate</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm">5+ years of excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;