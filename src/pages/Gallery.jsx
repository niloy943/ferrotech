import { useState } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';

const galleryItems = [
  {
    id: 1,
    title: 'High-Capacity Cylindrical Storage Silos',
    category: 'Feed Mills',
    img: 'https://images.unsplash.com/photo-1595273670150-db0a3e36856a?auto=format&fit=crop&q=80&w=1200',
    desc: 'Large steel silos for grain intake storage at an automated animal feed milling complex.'
  },
  {
    id: 2,
    title: 'PEB Factory Structural Steel Framework',
    category: 'Factory Buildings',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    desc: 'Multi-span pre-engineered steel columns and trusses assembled for an industrial facility.'
  },
  {
    id: 3,
    title: 'Walkway Gratings & Handrails',
    category: 'Access Systems',
    img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1200',
    desc: 'Hot-dip galvanized electro-forged walkway steel gratings and safety handrails.'
  },
  {
    id: 4,
    title: 'Automated Feed Mixer & Intake Elevator',
    category: 'Feed Mills',
    img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200',
    desc: 'Vertical bucket elevator and dosing modules for poultry and fish feed batch preparation.'
  },
  {
    id: 5,
    title: 'White Industrial Building with Blue Roof',
    category: 'Factory Buildings',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200',
    desc: 'Finished pre-engineered white factory warehouse structure featuring a rich blue insulated roof.'
  },
  {
    id: 6,
    title: 'Automatic Block Plant Press Line',
    category: 'Block Plants',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200',
    desc: 'Hydraulic compression press making concrete paving blocks on wooden curing pallets.'
  }
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Feed Mills', 'Factory Buildings', 'Access Systems', 'Block Plants'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="relative py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-slate/30 via-industrial-dark to-industrial-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Media Gallery</h1>
          <p className="text-base sm:text-lg text-industrial-amber font-semibold uppercase tracking-widest">
            Visualizing Real Industrial Implementations & Machinery
          </p>
        </div>
      </section>

      {/* Category Filter */}
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

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative cursor-pointer glass-panel rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-industrial-amber/20 transition-all duration-300 h-80"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-industrial-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="p-3 bg-industrial-amber/10 rounded-full text-industrial-amber border border-industrial-amber/20">
                    <FiZoomIn className="w-5 h-5" />
                  </span>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-industrial-amber uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 z-10 p-3 bg-industrial-dark/80 border border-white/10 rounded-full text-gray-400 hover:text-white transition duration-200"
          >
            <FiX className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-5xl w-full flex flex-col items-center space-y-4">
            <div className="relative max-h-[75vh] w-full flex justify-center">
              <img
                src={activeImage.img}
                alt={activeImage.title}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>
            <div className="text-center space-y-2 max-w-2xl px-4">
              <span className="text-xs font-black text-industrial-amber uppercase tracking-widest">{activeImage.category}</span>
              <h2 className="text-xl sm:text-2xl font-black text-white">{activeImage.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{activeImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
