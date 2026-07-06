import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';

const fallbackProjects = [
  {
    id: 2,
    title: 'Provita Feed Ltd. 33 MT/Hr Feed Mill',
    slug: 'provita-feed-33-mthr-feed-mill',
    category: 'Agro-Livestock',
    description: 'Turnkey mechanical fabrication, machine tower assembly, and equipment installation for a 33 Tons Per Hour poultry feed milling complex (5 lines). The project featured automated pelleting lines, hammer mills, extruders, dryers, and two large 4,000 MT grain silos.',
    location: 'Chittagong, Bangladesh',
    year: '2018',
    image_path: '/assets/images/projects/project-gratings.jpg'
  },
  {
    id: 3,
    title: 'SA Agro Feeds Ltd. 25 MT/Hr Feed Mill',
    slug: 'sa-agro-feeds-25-mthr-feed-mill',
    category: 'Agro-Livestock',
    description: 'Successful mechanical erection and commissioning of a 25 Tons Per Hour agro feed mill plant. Scope included steel tower structure fabrication and assembly, equipment positioning (grinding, mixing, pelleting, bagging), and installation of two 4,000 MT storage silos with bucket elevators.',
    location: 'Rangpur, Bangladesh',
    year: '2019',
    image_path: '/assets/images/projects/project-feedmill.jpg'
  },
  {
    id: 4,
    title: 'AG Agro Industries Ltd. 25 MT/Hr Feed Mill',
    slug: 'ag-agro-industries-25-mthr-feed-mill',
    category: 'Agro-Livestock',
    description: 'Full mechanical, silo, electrical, and control commissioning of a 25 Tons Per Hour feed mill. The erection sequence covered machine tower structural assembly, raw material intake systems, hammer mill routing, and two 4,000 MT grain silos.',
    location: 'Gazipur, Bangladesh',
    year: '2013',
    image_path: '/assets/images/projects/project-factory.jpg'
  }
];

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [filteredProjects, setFilteredProjects] = useState(fallbackProjects);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Agro-Livestock', 'PEB Structures'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/projects');
        if (res.data && res.data.length > 0) {
          setProjects(res.data);
          setFilteredProjects(res.data);
        }
      } catch (err) {
        console.warn('API connection failed. Using fallback project data.', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase())));
    }
  }, [selectedCategory, projects]);

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="relative py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-slate/30 via-industrial-dark to-industrial-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Project Portfolio</h1>
          <p className="text-base sm:text-lg text-industrial-amber font-semibold uppercase tracking-widest">
            Demonstrating Technical & Construction Engineering
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 justify-center bg-industrial-card/60 p-4 rounded-xl border border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 ${selectedCategory === cat ? 'bg-industrial-amber text-industrial-dark shadow-lg shadow-industrial-amber/15' : 'bg-transparent text-gray-400 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredProjects.map((proj, idx) => (
          <div
            key={proj.id}
            className={`glass-panel rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row border border-white/5 hover:border-white/10 transition duration-300 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2 h-72 sm:h-96 relative">
              <img
                src={proj.image_path || 'https://images.unsplash.com/photo-1595273670150-db0a3e36856a?auto=format&fit=crop&q=80&w=800'}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-industrial-dark/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-industrial-amber">
                {proj.category}
              </div>
            </div>

            {/* Project Content */}
            <div className="w-full lg:w-1/2 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-400">
                  <span className="flex items-center gap-1.5"><FiMapPin className="text-industrial-amber" /> {proj.location}</span>
                  <span className="flex items-center gap-1.5"><FiCalendar className="text-industrial-amber" /> Completed: {proj.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{proj.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">{proj.description}</p>
              </div>

              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                <span className="text-industrial-amber">Turnkey Delivery Support</span>
                <span className="text-gray-500">Ferrotech Engineered</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
