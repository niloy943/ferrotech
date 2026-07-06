import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCog } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <FaCog className="w-8 h-8 text-industrial-amber group-hover:rotate-90 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white">
                FERROTECH
              </span>
              <span className="text-[10px] font-bold tracking-widest text-industrial-amber -mt-1">
                ENGINEERING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-industrial-amber' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-industrial-amber rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Get Quote CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/quotation"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-gradient-to-r from-industrial-amber to-industrial-orange hover:shadow-lg hover:shadow-industrial-amber/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-industrial-card focus:outline-none transition duration-300"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-industrial-dark/95 border-b border-white/5 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-bold tracking-wider uppercase ${location.pathname === link.path ? 'bg-industrial-card text-industrial-amber' : 'text-gray-300 hover:bg-industrial-slate/30 hover:text-white'} transition duration-300`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 px-3">
            <Link
              to="/quotation"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 text-base font-bold rounded-lg text-white bg-gradient-to-r from-industrial-amber to-industrial-orange transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
