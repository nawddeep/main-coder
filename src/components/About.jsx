import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  Calendar,
  Heart,
  Zap
} from 'lucide-react';
import { companyInfo, stats } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering solutions that drive real business results and user satisfaction."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work as an extension of your team to achieve your goals."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges."
    },
    {
      icon: Heart,
      title: "Quality Obsessed",
      description: "Every line of code, every design element is crafted with attention to detail and excellence."
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2021", event: "First Major Client", description: "Delivered our first enterprise-level solution" },
    { year: "2022", event: "Team Expansion", description: "Grew to 15+ talented developers and designers" },
    { year: "2023", event: "100+ Projects", description: "Reached milestone of 100 successful project deliveries" },
    { year: "2024", event: "Industry Recognition", description: "Received multiple awards for innovation and quality" }
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            About Us
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Building Digital Excellence Since {companyInfo.founded}
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of developers, designers, and strategists dedicated to creating exceptional digital experiences that drive business growth.
          </p>
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 ${statsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {stats.map((stat, index) => {
            const Icon = {
              CheckCircle,
              Heart,
              Calendar,
              Users
            }[stat.icon];
            
            return (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Our Story & Mission
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in {companyInfo.founded}, {companyInfo.name} emerged from a simple belief: 
                technology should empower businesses to achieve extraordinary results. What started as a 
                small team of passionate developers has grown into a full-service digital agency.
              </p>
              <p>
                We've had the privilege of working with startups, scale-ups, and established enterprises, 
                helping them navigate the digital landscape and build solutions that truly make a difference. 
                Our approach combines technical expertise with strategic thinking to deliver results that exceed expectations.
              </p>
              <p>
                Today, we're proud to be trusted partners for businesses looking to innovate, scale, 
                and stay ahead in an increasingly digital world.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="text-slate-700 font-medium">Certified AWS & Google Cloud Partners</span>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Our Values
            </h3>
            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Our Journey
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and commitment to excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}>
                    <div className="glass-card p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-slate-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;