import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSearch, FiSliders, FiX, FiCheck } from 'react-icons/fi';

// Fallback data if backend API is not running or seeds are empty
const fallbackProducts = [
  {
    id: 1,
    name: 'Feed Mill Equipment & Machinery',
    slug: 'feed-mill-equipment-machinery',
    category: 'Agro-Livestock',
    description: 'Pellet mills, hammer mills, extruders, dryers, silos, and bucket elevators imported from leading global manufacturers (Muyang, Stolz, etc.) for high-efficiency feed production.',
    specifications: {
      'Plant Capacity': '5 TPH to 50 TPH (Tons Per Hour)',
      'Control System': 'PLC Automation with SCADA visual feedback',
      'Hammer Mill Power': '55kW to 160kW',
      'Mixing Accuracy': 'CV < 5% (Coefficient of Variation)',
      'Pellet Mill Type': 'Ring die with double-motor drive'
    },
    image_path: '/assets/images/products/feed-mill.jpg'
  },
  {
    id: 2,
    name: 'Pre-Engineered Steel Structures & Towers',
    slug: 'steel-structures-towers',
    category: 'PEB Structures',
    description: 'Custom-designed and fabricated structural steel buildings, machine towers, maintenance platforms, ladders, handrails, and assembly components for heavy industrial sites.',
    specifications: {
      'Design Code': 'AISC / MBMA / BNBC standards',
      'Material': 'ASTM A572 Grade 50 (345 MPa yield strength)',
      'Fabrication Standard' : 'AWS D1.1 structural welding certification',
      'Finish': 'Hot-Dip Galvanized or Corrosion Protection Primer',
      'Clear Span Capacity': 'Up to 60 meters without internal columns'
    },
    image_path: '/assets/images/products/peb-structures.jpg'
  },
  {
    id: 5,
    name: 'Industrial Materials & Gratings',
    slug: 'industrial-materials-gratings',
    category: 'Access Engineering',
    description: 'Pressure-locked and electro-forged steel gratings, stair treads, safety handrails, structural fasteners, piping assemblies, and raw fabrication materials.',
    specifications: {
      'Grating Standards': 'ASTM A36 / BS 4592 / ANSI NAAMM',
      'Galvanizing': 'Hot Dip Galvanizing (ASTM A123 / BS EN ISO 1461)',
      'Fasteners': 'High-tensile MS & Stainless Steel bolts & nuts',
      'Materials Supplied': 'MS plates, H-beams, structural angles, pipes & fittings',
      'Quality': 'Certified mill test reports & inspection documentation'
    },
    image_path: '/assets/images/products/steel-gratings.jpg'
  },
  {
    id: 6,
    name: 'Machinery Spares & Consumables',
    slug: 'machinery-spares-consumables',
    category: 'Spare Parts',
    description: 'Essential industrial spare parts including high-performance bearings, transmission belts, roller chains, industrial gearboxes, electric motors, and control sensors.',
    specifications: {
      'Bearings': 'Ball & Roller bearings (SKF, FAG, NSK, NTN)',
      'Transmission': 'Industrial V-belts, timing belts & roller chains',
      'Drive Systems': 'Helical gearboxes & energy-efficient electric motors',
      'Sensors': 'Proximity, photoelectric, temperature & speed sensors',
      'Availability': 'Scheduled supply contracts & emergency inventory spares'
    },
    image_path: '/assets/images/products/cable-trays.jpg'
  }
];

function Products() {
  const [products, setProducts] = useState(fallbackProducts);
  const [filteredProducts, setFilteredProducts] = useState(fallbackProducts);
  const [categories, setCategories] = useState(['All', 'Agro-Livestock', 'PEB Structures', 'Access Engineering', 'Spare Parts']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/products');
        if (res.data && res.data.length > 0) {
          // Parse stringified specifications if they exist as strings
          const parsedData = res.data.map(p => {
            let specs = p.specifications;
            if (typeof specs === 'string') {
              try { specs = JSON.parse(specs); } catch (e) {}
            }
            return { ...p, specifications: specs };
          });
          setProducts(parsedData);
          setFilteredProducts(parsedData);
        }
      } catch (err) {
        console.warn('API connection failed. Using fallback seed data.', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Handle Search and Filter
  useEffect(() => {
    let result = products;

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase()));
    }

    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, products]);

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="relative py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-slate/30 via-industrial-dark to-industrial-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Products Catalog</h1>
          <p className="text-base sm:text-lg text-industrial-amber font-semibold uppercase tracking-widest">
            High-Performance Equipment & Structures
          </p>
        </div>
      </section>

      {/* Catalog Control Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-industrial-card/60 p-6 rounded-2xl border border-white/5 shadow-md">
          {/* Search bar */}
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-industrial-dark/60 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-industrial-amber transition duration-200"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-300 ${selectedCategory === cat ? 'bg-industrial-amber text-industrial-dark border-industrial-amber shadow-lg shadow-industrial-amber/15' : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-industrial-card/30 rounded-3xl border border-dashed border-white/10">
            <p className="text-gray-400">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="group cursor-pointer glass-panel rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-industrial-amber/20 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={prod.image_path || 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800'}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-industrial-dark/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-industrial-amber">
                    {prod.category}
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-industrial-amber transition duration-200">{prod.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed">{prod.description}</p>
                  </div>
                  <span className="inline-flex items-center text-xs font-bold text-industrial-amber group-hover:underline">
                    View Specifications & Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Details Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-industrial-dark/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-industrial-card border border-white/10 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 p-2 bg-industrial-dark/60 rounded-full text-gray-400 hover:text-white border border-white/10 transition duration-200"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Product Image */}
              <div className="h-64 md:h-full relative min-h-[300px]">
                <img
                  src={selectedProduct.image_path || 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800'}
                  alt={selectedProduct.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Product Content details */}
              <div className="p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                <div className="space-y-2">
                  <span className="text-xs font-black text-industrial-amber uppercase tracking-widest">{selectedProduct.category}</span>
                  <h2 className="text-2xl font-black text-white">{selectedProduct.name}</h2>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed font-light">{selectedProduct.description}</p>

                {/* Specs List */}
                {selectedProduct.specifications && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white tracking-wider uppercase border-b border-white/10 pb-2">Technical Specifications</h4>
                    <div className="space-y-2.5">
                      {Object.entries(selectedProduct.specifications).map(([key, val]) => (
                        <div key={key} className="flex flex-col text-xs sm:text-sm">
                          <span className="text-gray-500 font-semibold">{key}</span>
                          <span className="text-gray-300 font-light mt-0.5">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
