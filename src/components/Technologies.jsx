import { technologies } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Technologies = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="technologies" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            Technologies
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Cutting-Edge Tech Stack
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We use the latest technologies and frameworks to build scalable, secure, and high-performance solutions.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-12">
          {technologies.map((category, categoryIndex) => (
            <TechnologyCategory 
              key={category.category} 
              category={category} 
              index={categoryIndex} 
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Always Learning, Always Evolving
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Technology moves fast, and so do we. Our team continuously learns new technologies 
              and best practices to ensure we're always delivering cutting-edge solutions. 
              We evaluate and adopt new tools that can benefit our clients' projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                Continuous Learning
              </div>
              <div className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                Best Practices
              </div>
              <div className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                Innovation Focus
              </div>
              <div className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                Future-Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnologyCategory = ({ category, index }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Category Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {category.category}
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      {/* Technology Items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {category.items.map((tech, techIndex) => (
          <TechnologyItem 
            key={tech.name} 
            tech={tech} 
            index={techIndex} 
          />
        ))}
      </div>
    </div>
  );
};

const TechnologyItem = ({ tech, index }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-600 hover:shadow-soft-lg transition-all duration-300 text-center card-hover ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Tech Logo/Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {tech.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* Tech Name */}
      <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
        {tech.name}
      </h4>

      {/* Expertise Level Indicator */}
      <div className="mt-3">
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full transition-all duration-500"
            style={{ width: '85%' }}
          ></div>
        </div>
        <div className="text-xs text-slate-500 mt-1">Expert</div>
      </div>
    </div>
  );
};

export default Technologies;