import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { GiGears } from 'react-icons/gi';

function About() {
  const values = [
    {
      icon: <FiAward className="w-6 h-6 text-industrial-amber" />,
      title: 'Unyielding Quality',
      desc: 'We adhere strictly to international manufacturing standards, utilizing robust inspections to deliver long-lasting engineering solutions.',
    },
    {
      icon: <GiGears className="w-6 h-6 text-industrial-amber" />,
      title: 'Custom Engineering',
      desc: 'Every industrial environment is unique. We provide tailored modifications and layouts to match precise plant blueprints.',
    },
    {
      icon: <FiUsers className="w-6 h-6 text-industrial-amber" />,
      title: 'Client Partnership',
      desc: 'We operate as long-term partners, supporting our clients through installation, test runs, and dedicated maintenance.',
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-industrial-amber" />,
      title: 'Continuous Innovation',
      desc: 'We integrate advanced electronics and automation into our machinery, maximizing operational output and lowering energy costs.',
    },
  ];

  const milestones = [
    { year: '1999', title: 'Agro Sector Inception', desc: 'Ferrotech Engineering enters the Bangladesh agro-livestock market, supplying premium hatchery incubators and feed processing components.' },
    { year: '2009', title: 'Expansion to Steel Buildings & Packaging', desc: 'Extends operations into structural steel pre-engineered buildings (PEBs) and plastic packaging equipment fabrication.' },
    { year: '2010', title: 'PP & Non-Woven Solutions', desc: 'Introduces advanced polypropylene and non-woven bag making machinery lines into the product portfolio.' },
    { year: '2015', title: 'ISO Certification & Automation', desc: 'Achieves ISO 9001:2015 registration and integrates PLC automated consoles across feed mills and brick factories.' },
    { year: '2026', title: 'Next-Generation Smart Factory Supplies', desc: 'Deploys smart sensing industrial equipment and remote-monitoring dashboards for client plant operations.' },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Banner */}
      <section className="relative py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-slate/30 via-industrial-dark to-industrial-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">About Our Company</h1>
          <p className="text-base sm:text-lg text-industrial-amber font-semibold uppercase tracking-widest">
            A Legacy of Industrial & Structural Engineering
          </p>
        </div>
      </section>

      {/* Main Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Our Journey & Mission</h2>
          <p className="text-gray-400 leading-relaxed font-light">
            Founded in Dhaka, Bangladesh, FERROTECH ENGINEERING has built a robust reputation by bridging advanced fabrication methodologies with local installation expertise. 
            Over the past two decades, we have evolved from a specialist supplier of agro-livestock machinery into a multi-disciplinary industrial contractor.
          </p>
          <p className="text-gray-400 leading-relaxed font-light">
            Today, our services span access engineering (heavy-duty electro-forged gratings), structural steel buildings (PEBs), concrete brick factories, and turnkey animal feed mill complexes. We focus on delivering high-integrity products that withstand severe operating conditions and maximize structural lifespan.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="space-y-6">
          <div className="glass-panel p-8 rounded-2xl flex gap-6 hover:border-industrial-amber/10 transition-colors duration-300">
            <div className="flex-shrink-0">
              <div className="p-3 bg-industrial-amber/10 rounded-xl">
                <FiTarget className="w-8 h-8 text-industrial-amber" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                To empower industrial growth in Bangladesh by manufacturing and supplying high-performance machinery, safety structural systems, and turnkey engineering solutions that exceed international safety benchmarks.
              </p>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl flex gap-6 hover:border-industrial-amber/10 transition-colors duration-300">
            <div className="flex-shrink-0">
              <div className="p-3 bg-industrial-amber/10 rounded-xl">
                <FiEye className="w-8 h-8 text-industrial-amber" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                To be the most trusted full-service access engineering and industrial machinery partner in South Asia, recognized for engineering innovation, environmental integrity, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <h2 className="text-3xl font-bold tracking-tight text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-xl space-y-4 hover:border-industrial-amber/20 transition-all duration-300"
            >
              <div className="p-3 bg-industrial-amber/5 rounded-lg w-fit">{val.icon}</div>
              <h3 className="text-lg font-bold text-white">{val.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <h2 className="text-3xl font-bold tracking-tight text-center">Company Milestones</h2>
        <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">
          {milestones.map((ms, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative space-y-2"
            >
              {/* Bullet node indicator */}
              <span className="absolute -left-12 top-1.5 w-8 h-8 rounded-full border-4 border-industrial-dark bg-industrial-amber flex items-center justify-center text-xs font-black text-industrial-dark">
                {idx + 1}
              </span>
              <span className="text-2xl font-black text-industrial-amber block">{ms.year}</span>
              <h3 className="text-xl font-bold text-white">{ms.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">{ms.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
