import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaCog } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080B13] border-t border-white/5 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Brief */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <FaCog className="w-6 h-6 text-industrial-amber" />
              <span className="text-lg font-extrabold tracking-wider text-white">
                FERROTECH <span className="text-industrial-amber text-xs">ENGINEERING</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Industrial pioneers delivering state-of-the-art access engineering, pre-engineered buildings, automatic block machinery, and agro-livestock feed mill setups globally.
            </p>
            <div className="text-xs text-gray-500">
              Agro-Livestock leader since 1999.
              <br />
              PEB & Block Plants pioneer since 2009.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-industrial-amber transition duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-industrial-amber transition duration-200">Our Services</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-industrial-amber transition duration-200">Products Catalog</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-industrial-amber transition duration-200">Project Portfolio</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-industrial-amber transition duration-200">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-industrial-amber transition duration-200">Target Industries</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-industrial-amber flex-shrink-0 mt-0.5" />
                <span>
                  House 21, Road 04, Sector 05,<br />
                  Uttara, Dhaka 1230, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-4 h-4 text-industrial-amber flex-shrink-0" />
                <a href="tel:+8801711783273" className="hover:text-white transition duration-200">+880 1711 783273</a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-4 h-4 text-industrial-amber flex-shrink-0" />
                <a href="mailto:info@ferrotecheng.com" className="hover:text-white transition duration-200">info@ferrotecheng.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <FiClock className="w-4 h-4 text-industrial-amber flex-shrink-0 mt-0.5" />
                <span>
                  Sat - Thu: 9:00 AM - 6:00 PM<br />
                  Friday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive technical guides, product announcements, and project updates.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-industrial-dark/50 border border-white/10 rounded-lg py-2.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-industrial-amber transition duration-200"
                />
                <button type="submit" className="absolute right-3 top-3 text-industrial-amber hover:text-white transition duration-200">
                  <FiMail className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {currentYear} FERROTECH ENGINEERING. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Industrial Excellence</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
