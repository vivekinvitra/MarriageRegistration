
import React from 'react';
import {  BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Flower2 } from 'lucide-react';

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
    { name: 'Our Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Process', path: '/process' },
    { name: 'News', path: '/news' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-orange-500 text-white p-2.5 rounded-2xl shadow-lg shadow-orange-200">
                <Flower2 size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-orange-950 font-serif font-bold text-xl leading-tight">marriageregistration.co.in</span>
                <span className="text-rose-600 text-[10px] font-bold tracking-widest uppercase">Official Advocate • Pune</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-orange-600 font-bold border-b-2 border-orange-500'
                    : 'text-slate-600 hover:text-orange-500 transition-colors'
                } px-1 py-2 text-sm uppercase tracking-wider font-semibold`}
              >
                {link.name}
              </Link>
            ))}           
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-orange-600 hover:bg-orange-50 transition-colors"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-orange-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all"
              >
                {link.name}
              </Link>
            ))}           
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-orange-950 text-orange-50 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-orange-500 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="bg-white text-orange-600 p-2 rounded-xl shadow-lg">
              <Flower2 size={24} />
            </div>
            <span className="font-serif font-bold text-xl text-white">Marriage Registration</span>
          </Link>
          <p className="text-sm leading-relaxed mb-8 text-orange-100/60 font-medium">
            Authorized legal consultancy for marriage registration, specialized in Hindu & Special Marriage Acts since 2012.
          </p>
          <div className="flex space-x-3">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-orange-400 font-bold mb-8 text-xs uppercase tracking-[0.2em]">Our Services</h3>
          <ul className="space-y-4 text-sm font-semibold text-orange-100/80">
            <li><Link to="/services" className="hover:text-orange-400">Court Marriage</Link></li>
            <li><Link to="/services" className="hover:text-orange-400">HMA Registration</Link></li>
            <li><Link to="/process" className="hover:text-orange-400">Document Checklist</Link></li>
            <li><Link to="/faqs" className="hover:text-orange-400">Legal FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-orange-400 font-bold mb-8 text-xs uppercase tracking-[0.2em]">Locate Us</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-orange-400 shrink-0" />
              <span className="text-orange-100/70">Shivajinagar Court Road, Near District Court, Pune 411005</span>
            </li>          
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-orange-400 shrink-0" />
              <span className="text-orange-100/70">info@marriageregistration.co.in</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-orange-400 font-bold mb-8 text-xs uppercase tracking-[0.2em]">Working Hours</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex justify-between"><span>Mon - Sat</span> <span className="text-orange-300">10:00 - 18:30</span></li>
            <li className="flex justify-between text-rose-400 italic"><span>Sunday</span> <span>Closed</span></li>
          </ul>
          <div className="mt-8 p-4 bg-orange-900/50 rounded-2xl border border-orange-800">
            <p className="text-[10px] text-orange-200/50 uppercase tracking-widest leading-relaxed">Verified by Bar Council of Maharashtra & Goa</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 text-center text-xs text-orange-200/30">
        <p>&copy; {new Date().getFullYear()} marriageregistration.co.in. Designed with Mogra aesthetics. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
