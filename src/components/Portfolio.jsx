import { useState } from 'react';
import { ExternalLink, Github, Filter, Star } from 'lucide-react';
import { projects } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web', 'Mobile', 'Design'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            Our Portfolio
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects & Case Studies
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        {featuredProject && activeFilter === 'All' && (
          <div className="mb-16">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-lg font-semibold text-slate-900">Featured Project</span>
            </div>
            
            <ProjectCard project={featuredProject} featured={true} />
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeFilter === 'All' ? regularProjects : filteredProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-slate-600 mb-6">
              Let's discuss how we can bring your vision to life with our proven development process.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, featured = false, index = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-soft-lg transition-all duration-500 card-hover ${
        featured ? 'lg:col-span-2' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <div className={`${featured ? 'h-80' : 'h-64'} flex items-center justify-center`}>
          <div className="text-slate-400 text-6xl font-light">
            {project.title.charAt(0)}
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 font-medium hover:bg-white transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>View Live</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-colors">
              <Github className="w-4 h-4" />
              <span>Code</span>
            </button>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
            {project.category}
          </span>
          {featured && (
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-yellow-600 font-medium">Featured</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed mb-6">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action */}
        <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group">
          View Case Study
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;