import { 
  Search, 
  Palette, 
  Code, 
  Rocket,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { processSteps } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = {
  Search,
  Palette,
  Code,
  Rocket
};

const Process = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="process" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            Our Process
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How We Bring Ideas to Life
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step process ensures every project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Why Our Process Works
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Transparent Communication</h4>
                  <p className="text-slate-600">Regular updates and clear milestones keep you informed every step of the way.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Agile Methodology</h4>
                  <p className="text-slate-600">Flexible approach that adapts to changes and delivers value incrementally.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Quality Assurance</h4>
                  <p className="text-slate-600">Rigorous testing and code reviews ensure bug-free, high-performance solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Ongoing Support</h4>
                  <p className="text-slate-600">Post-launch support and maintenance to keep your solution running smoothly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Timeline */}
          <div className="glass-card p-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6">Typical Project Timeline</h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <div>
                  <div className="font-semibold text-slate-900">Week 1-2</div>
                  <div className="text-sm text-slate-600">Discovery & Planning</div>
                </div>
                <div className="text-blue-600 font-bold">15%</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                <div>
                  <div className="font-semibold text-slate-900">Week 3-4</div>
                  <div className="text-sm text-slate-600">Design & Prototyping</div>
                </div>
                <div className="text-purple-600 font-bold">25%</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                <div>
                  <div className="font-semibold text-slate-900">Week 5-10</div>
                  <div className="text-sm text-slate-600">Development & Testing</div>
                </div>
                <div className="text-green-600 font-bold">50%</div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                <div>
                  <div className="font-semibold text-slate-900">Week 11-12</div>
                  <div className="text-sm text-slate-600">Launch & Support</div>
                </div>
                <div className="text-orange-600 font-bold">10%</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-slate-50 rounded-xl">
              <div className="text-sm text-slate-600 mb-2">Average Project Duration</div>
              <div className="text-2xl font-bold text-slate-900">8-12 weeks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, index }) => {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = iconMap[step.icon];

  return (
    <div 
      ref={ref}
      className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Step Number & Icon */}
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft-md">
          <Icon className="w-10 h-10 text-white" />
        </div>
        
        {/* Step Number */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center">
          <span className="text-sm font-bold text-blue-600">{step.id}</span>
        </div>
        
        {/* Arrow (except for last step) */}
        {index < 3 && (
          <div className="hidden lg:block absolute top-1/2 -right-12 transform -translate-y-1/2">
            <ArrowRight className="w-6 h-6 text-slate-400" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl lg:text-2xl font-bold text-slate-900">
          {step.title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default Process;