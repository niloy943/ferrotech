import { GiFactory, GiWheat, GiCrane } from 'react-icons/gi';
import { FiCheckSquare } from 'react-icons/fi';

function Industries() {
  const sectors = [
    {
      icon: <GiWheat className="w-12 h-12 text-industrial-amber" />,
      title: 'Agro-Livestock Solutions',
      desc: 'Since 1999, we have supplied custom technology solutions to the agro-livestock sector. This includes commercial animal feed mills (poultry, cattle, and aquaculture), automated hatcheries, and breeder farm ventilation. We coordinate machinery selection, layout designs, and installation.',
      points: [
        'Turnkey Poultry & Cattle Feed Mills (5 to 50 TPH)',
        'Hatchery Incubators & Climate-Controlled Sheds',
        'Bulk Storage Silo Terminals & Grain Handling Conveyors',
        'Planetary mixing and automated ingredient dosing systems',
      ],
      img: 'https://images.unsplash.com/photo-1595273670150-db0a3e36856a?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: <GiCrane className="w-12 h-12 text-industrial-amber" />,
      title: 'Industrial Infrastructure & PEB',
      desc: 'Since 2009, we have designed and fabricated pre-engineered structural steel structures (PEBs) and access engineering elements for major developers. We manufacture columns, roof frames, and overhead crane support structures built for safe, rapid site erection.',
      points: [
        'Pre-Engineered Building (PEB) Warehouse & Factories',
        'Overhead Crane Gantry Girders & Mezzanine Decks',
        'Automated Concrete Block & Interlocking Paver Machinery',
        'Fly-Ash Brick Production Lines with Curing Racks',
      ],
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Banner */}
      <section className="relative py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-slate/30 via-industrial-dark to-industrial-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Target Industries</h1>
          <p className="text-base sm:text-lg text-industrial-amber font-semibold uppercase tracking-widest">
            Serving Key Growth Sectors In Bangladesh & Globally
          </p>
        </div>
      </section>

      {/* Sectors list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {sectors.map((sec, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Left Image */}
            <div className="w-full lg:w-1/2 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl relative border border-white/5">
              <img src={sec.img} alt={sec.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark via-transparent to-transparent opacity-80" />
            </div>

            {/* Right details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-industrial-card border border-white/5 rounded-2xl w-fit">
                  {sec.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{sec.title}</h2>
              </div>
              
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-light">
                {sec.desc}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase">Key Sub-Sectors & Supplies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sec.points.map((pt, pidx) => (
                    <div key={pidx} className="flex items-start space-x-2 text-sm text-gray-300">
                      <FiCheckSquare className="w-5 h-5 text-industrial-amber flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Industries;
