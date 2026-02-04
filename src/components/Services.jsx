import { 
  Code, 
  Smartphone, 
  Palette, 
  Cloud, 
  Shield, 
  BarChart3,
  ArrowRight 
} from 'lucide-react';
import { services } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = {
  Code,
  Smartphone,
  Palette,
  Cloud,
  Shield,
  BarChart3
};

const ServiceCard = ({ service, index }) => {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = iconMap[service.icon];

  return (
    <div 
      ref={ref}
      className={`group bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-soft-lg transition-all duration-500 card-hover ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed mb-6">
        {service.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {service.features.map((feature, i) => (
          <span 
            key={i} 
            className="px-3 py-1.5 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-100"
          >
            {feature}
          </span>
        ))}
      </div>
      
      <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group">
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

const Services = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            Our Services
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Digital Solutions
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end services that transform your ideas into powerful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 mb-6">
              Let's discuss how we can help bring your vision to life with our expert development services.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;