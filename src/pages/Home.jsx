import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FiArrowRight, FiShield, FiTrendingUp, FiSettings, FiGrid } from 'react-icons/fi';
import { GiFactory, GiCrane } from 'react-icons/gi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {
  const stats = [
    { label: 'Years Experience', value: '25+' },
    { label: 'Projects Completed', value: '150+' },
    { label: 'Global Partnerships', value: '12+' },
    { label: 'Professional Engineers', value: '40+' },
  ];

  const features = [
    {
      icon: <GiFactory className="w-8 h-8 text-industrial-amber" />,
      title: 'Feed Mill Engineering',
      desc: 'Complete agro-livestock solutions including silos, hammer mills, mixers, and packing plants since 1999.',
    },
    {
      icon: <GiCrane className="w-8 h-8 text-industrial-amber" />,
      title: 'PEB & Structural Steel',
      desc: 'Heavy industrial structures, warehouses, factory sheds, and custom steel fabrication built to standard.',
    },
    {
      icon: <FiSettings className="w-8 h-8 text-industrial-amber" />,
      title: 'Concrete Block Plants',
      desc: 'Fully automated brick and hollow block making production lines with planetary mixing systems.',
    },
    {
      icon: <FiGrid className="w-8 h-8 text-industrial-amber" />,
      title: 'Access Systems & Gratings',
      desc: 'Electro-forged steel and FRP/GRP gratings, stair treads, safety handrails, and industrial cable trays.',
    },
  ];

  const industries = [
    {
      title: 'Agro-Livestock sector',
      desc: 'Feed processing plants, hatcheries, and modern poultry equipment.',
      bg: 'https://images.unsplash.com/photo-1595273670150-db0a3e36856a?auto=format&fit=crop&q=80&w=800',
      link: '/industries',
    },
    {
      title: 'Industrial Construction',
      desc: 'Pre-engineered factories, storage sheds, and logistics warehouses.',
      bg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      link: '/industries',
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Banner Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-industrial-slate/40 via-industrial-dark to-industrial-dark">
        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-industrial-amber/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-industrial-orange/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 border border-industrial-amber/30 rounded-full bg-industrial-amber/5 text-industrial-amber text-xs font-bold uppercase tracking-wider"
          >
            <FiShield className="w-4 h-4" />
            <span>ISO 9001:2015 Certified Company</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="text-white">Pioneering Industrial</span>
            <br />
            <span className="text-gradient-orange">Engineering Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 font-light"
          >
            Leading manufacturer and turnkey project supplier of access engineering systems, pre-engineered buildings, automated brick plants, and agro feed mills in Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-gradient-to-r from-industrial-amber to-industrial-orange hover:shadow-lg hover:shadow-industrial-amber/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Explore Products
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/quotation"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition duration-300"
            >
              Request a Quotation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 text-center"
            >
              <div className="text-3xl sm:text-5xl font-black text-industrial-amber mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-gray-400 uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Intro & Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 text-industrial-amber font-bold text-xs uppercase tracking-widest">
            <FiTrendingUp className="w-4 h-4" />
            <span>Industrial Pioneers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Engineering Solutions for a <span className="text-gradient">Modern Infrastructure</span>
          </h2>
          <p className="text-gray-400 leading-relaxed font-light">
            Founded with a vision to deliver premium structural and machine engineering solutions, FERROTECH ENGINEERING has expanded into a market-leading supplier. We bridge the gap between design and installation, providing custom fabrication, machinery supply, and turnkey installation support for crucial industrial ventures in Bangladesh.
          </p>
          <div className="pt-4">
            <Link to="/about" className="inline-flex items-center text-industrial-amber font-bold hover:text-white transition duration-200 group">
              Read Our Full Story
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Reusable Section Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-xl hover:-translate-y-1 hover:border-industrial-amber/20 transition-all duration-300">
              <div className="mb-4">{feat.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Slider Section */}
      <section className="py-12 bg-industrial-card/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex items-end justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-sm text-gray-400">Our flagship products built for extreme durability and efficiency.</p>
          </div>
          <Link to="/products" className="hidden sm:inline-flex items-center text-industrial-amber font-bold text-sm hover:text-white transition duration-200 group">
            View All Products
            <FiArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            <SwiperSlide>
              <div className="glass-panel rounded-2xl overflow-hidden hover:border-white/10 transition duration-300 flex flex-col h-full">
                <img src="/assets/images/products/steel-gratings.jpg" alt="Industrial Materials & Gratings" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <span className="text-xs text-industrial-amber font-bold uppercase tracking-widest">Access Engineering</span>
                  <h3 className="text-xl font-bold text-white">Industrial Materials & Gratings</h3>
                  <p className="text-sm text-gray-400 flex-grow">Pressure-locked and electro-forged steel gratings, safety handrails, and raw fabrication materials.</p>
                  <Link to="/products/industrial-materials-gratings" className="inline-flex items-center text-xs font-bold text-white hover:text-industrial-amber pt-2">
                    Learn More <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="glass-panel rounded-2xl overflow-hidden hover:border-white/10 transition duration-300 flex flex-col h-full">
                <img src="/assets/images/products/feed-mill.jpg" alt="Feed Mill Equipment & Machinery" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <span className="text-xs text-industrial-amber font-bold uppercase tracking-widest">Agro-Livestock</span>
                  <h3 className="text-xl font-bold text-white">Feed Mill Equipment & Machinery</h3>
                  <p className="text-sm text-gray-400 flex-grow">Pellet mills, hammer mills, extruders, dryers, silos, and bucket elevators imported from global leading manufacturers.</p>
                  <Link to="/products/feed-mill-equipment-machinery" className="inline-flex items-center text-xs font-bold text-white hover:text-industrial-amber pt-2">
                    Learn More <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="glass-panel rounded-2xl overflow-hidden hover:border-white/10 transition duration-300 flex flex-col h-full">
                <img src="/assets/images/products/block-machinery.jpg" alt="Cement Plant Equipment" className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <span className="text-xs text-industrial-amber font-bold uppercase tracking-widest">Industrial Machinery</span>
                  <h3 className="text-xl font-bold text-white">Cement Plant Equipment</h3>
                  <p className="text-sm text-gray-400 flex-grow">Heavy-duty cement manufacturing equipment, including ball mills, raw material conveying, and bulk packers.</p>
                  <Link to="/products/cement-plant-equipment" className="inline-flex items-center text-xs font-bold text-white hover:text-industrial-amber pt-2">
                    Learn More <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Industries Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div class="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Key Industrial Sectors</h2>
          <p className="text-sm sm:text-base text-gray-400">Customized engineering supplies tailored to meet the critical requirements of various sectors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industries.map((ind, idx) => (
            <div key={idx} className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${ind.bg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 space-y-3">
                <h3 className="text-2xl font-bold text-white">{ind.title}</h3>
                <p className="text-sm text-gray-300">{ind.desc}</p>
                <Link to={ind.link} className="inline-flex items-center text-xs font-bold text-industrial-amber hover:text-white transition duration-200">
                  Read Industry Details <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by Industry Leaders (Clients) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-industrial-amber font-bold text-xs uppercase tracking-widest">
            <span>Our Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Trusted by Industry Leaders</h2>
          <p className="text-sm sm:text-base text-gray-400">Pioneers who trust Ferrotech Engineering for delivering their turnkey industrial infrastructure.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          <div className="glass-panel p-6 rounded-2xl flex items-center justify-center h-28 hover:border-industrial-amber/20 hover:scale-102 transition-all duration-300">
            <img src="/assets/images/clients/sa-agro.png" alt="SA Agro Feeds" className="max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 filter brightness-110" />
          </div>
          <div className="glass-panel p-6 rounded-2xl flex items-center justify-center h-28 hover:border-industrial-amber/20 hover:scale-102 transition-all duration-300">
            <img src="/assets/images/clients/nourish.png" alt="Nourish Feeds" className="max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 filter brightness-110" />
          </div>
          <div className="glass-panel p-6 rounded-2xl flex items-center justify-center h-28 hover:border-industrial-amber/20 hover:scale-102 transition-all duration-300">
            <img src="/assets/images/clients/provita.png" alt="Provita Feeds" className="max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 filter brightness-110" />
          </div>
          <div className="glass-panel p-6 rounded-2xl flex items-center justify-center h-28 hover:border-industrial-amber/20 hover:scale-102 transition-all duration-300">
            <img src="/assets/images/clients/aristocrat.png" alt="Aristocrat Concrete" className="max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 filter brightness-110" />
          </div>
          <div className="glass-panel p-6 rounded-2xl flex items-center justify-center h-28 hover:border-industrial-amber/20 hover:scale-102 transition-all duration-300">
            <img src="/assets/images/clients/anchor.png" alt="Anchor Cement" className="max-h-16 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300 filter brightness-110" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-industrial-slate to-industrial-card border border-white/5 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Have a Project in Mind?</h2>
            <p className="text-sm sm:text-base text-gray-300 font-light">
              Submit your project specifications or blueprints today, and our engineering team will provide a tailored quotation and timeline.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <Link
              to="/quotation"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-gradient-to-r from-industrial-amber to-industrial-orange hover:shadow-lg hover:shadow-industrial-amber/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
