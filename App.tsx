
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import Contact from './pages/Contact';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import FAQPage from './pages/FAQPage';
import About from './pages/About';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Process', path: '/process' },
    { name: 'News', path: '/news' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-indigo-900 text-white p-2 rounded-lg font-bold text-xl">MR</div>
              <div className="flex flex-col">
                <span className="text-indigo-900 font-serif font-bold text-lg leading-tight">marriageregistration.co.in</span>
                <span className="text-slate-500 text-[10px] font-semibold tracking-widest uppercase">Pune | Official Advocate Services</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                    : 'text-slate-600 hover:text-indigo-600 transition-colors'
                } px-1 py-2 text-sm uppercase tracking-wider`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+918888888888" className="bg-indigo-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-800 transition-all flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+918888888888" className="block px-3 py-2 rounded-md text-base font-semibold text-white bg-indigo-900 mt-4 text-center">
              Call Support: +91 88888 88888
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6 text-white">
            <div className="bg-white text-indigo-900 p-2 rounded-lg font-bold text-xl">MR</div>
            <span className="font-serif font-bold text-lg">marriageregistration.co.in</span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Providing expert legal guidance for marriage registration, court marriages, and documentation in Pune and surrounding areas.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-indigo-400" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-indigo-400" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-indigo-400" />
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-indigo-400">Our Services</Link></li>
            <li><Link to="/process" className="hover:text-indigo-400">Process & Documents</Link></li>
            <li><Link to="/news" className="hover:text-indigo-400">Latest News</Link></li>
            <li><Link to="/faqs" className="hover:text-indigo-400">Frequently Asked Questions</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>Office No. 402, Shivajinagar Court Road, Pune, Maharashtra 411005</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>+91 88888 88888</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>info@marriageregistration.co.in</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Office Hours</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-between"><span>Mon - Fri:</span> <span>10:00 AM - 6:30 PM</span></li>
            <li className="flex justify-between"><span>Saturday:</span> <span>10:30 AM - 3:00 PM</span></li>
            <li className="flex justify-between text-indigo-400"><span>Sunday:</span> <span>Closed</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} marriageregistration.co.in. Managed by Adv. Shinde & Associates. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
