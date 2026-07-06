import { FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import { GiGears, GiCrane, GiFactory } from 'react-icons/gi';
import { FaHammer } from 'react-icons/fa';

function Services() {
  const serviceDetails = [
    {
      icon: <GiGears className="w-12 h-12 text-industrial-amber" />,
      title: 'Design & Access Engineering',
      desc: 'In-house drafting and engineering optimization utilizing CAD/BIM tools. We design custom platforms, layouts for complex feed processing plants, and cable routing pathways to maximize utility and comply with structural safety codes.',
      capabilities: [
        'Custom CAD/BIM plant layouts',
        'Structural loading assessments',
        'Access pathway optimization (Gratings & Stairs)',
        'Wiring and cabling tray route designs',
      ],
      bgImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600'
    },
    {
      icon: <FaHammer className="w-12 h-12 text-industrial-amber" />,
      title: 'Automated Fabrication',
      desc: 'State-of-the-art manufacturing facilities executing heavy and light structural fabrication. We employ automated electro-forging pressure-welded lines for steel gratings and advanced tooling for machinery components.',
      capabilities: [
        'Automated pressure-welded electro-forging',
        'High-precision machine tool milling',
        'Certified structural steel welding (AWS D1.1)',
        'Corrosion protection coating (Hot Dip Galvanizing)',
      ],
      bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600'
    },
    {
      icon: <GiCrane className="w-12 h-12 text-industrial-amber" />,
      title: 'Site Installation & Erection',
      desc: 'On-site heavy structural erection led by experienced construction crew and safety officers. We manage rigging, frame assembly, alignment, and fast coupling for pre-engineered buildings and processing equipment.',
      capabilities: [
        'Rigging and crane operation management',
        'PEB structural frame coupling and alignment',
        'Equipment leveling and foundation anchoring',
        'Rigorous on-site safety enforcement (OSHA standard)',
      ],
      bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600'
    },
    {
      icon: <GiFactory className="w-12 h-12 text-industrial-amber" />,
      title: 'Turnkey Commissioning & Support',
      desc: 'Complete operational dry-runs, calibration, and commissioning of automated feed mills and concrete block production lines. We train client plant operators and supply scheduled preventive maintenance.',
      capabilities: [
        'Machine dry-runs and electrical testing',
        'PLC automated control console calibration',
        'Hands-on operator training programs',
        '24/7 post-commissioning technical assistance',
      ],
      bgImage: 'https://images.unsplash.com/photo-1595273670150-db0a3e36856a?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Banner */}
      <section className="relative py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-slate/30 via-industrial-dark to-industrial-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Our Engineering Services</h1>
          <p className="text-base sm:text-lg text-industrial-amber font-semibold uppercase tracking-widest">
            End-to-End Industrial Execution
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {serviceDetails.map((serv, idx) => (
          <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Service Info */}
            <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-industrial-card border border-white/5 rounded-2xl w-fit">
                  {serv.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{serv.title}</h2>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-light">
                {serv.desc}
              </p>
              
              {/* Capabilities checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {serv.capabilities.map((cap, cidx) => (
                  <div key={cidx} className="flex items-start space-x-2 text-sm text-gray-300">
                    <FiCheckCircle className="w-5 h-5 text-industrial-amber flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Visual */}
            <div className={`relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <img src={serv.bgImage} alt={serv.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-transparent to-transparent opacity-80" />
            </div>
          </div>
        ))}
      </section>

      {/* Trust banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center space-y-6 max-w-4xl mx-auto border border-industrial-amber/10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Adhering to International Engineering Standards</h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            All fabrication work aligns with global codes including **ASTM** (materials), **AWS D1.1** (structural welding), and **OSHA** (safety access regulations). We run computerized quality tests on every project batch.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;
