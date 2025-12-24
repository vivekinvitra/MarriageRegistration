
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Star, ArrowRight, Flower2, Sparkles } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section: Fresh Flower Theme with Vibrant Banner */}
      <section className="relative h-[650px] flex items-center overflow-hidden bg-flower-jasmine">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
            alt="Vibrant Indian Wedding Flowers - Marigold and Roses" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fffcf2] via-[#fffcf2]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-orange-600 mb-4 font-bold tracking-widest text-sm uppercase">
              <Sparkles size={18} /> Vivah Panjiyan Legal Services
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.1] text-orange-950">
              The Sacred Path to your <span className="text-orange-500 italic">Official Union</span>
            </h1>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
              We translate your traditional vows into legally binding commitments. Trusted advocate services for Marriage Registration in Pune.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+918888888888" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-center transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-3 text-lg"
              >
                Get Expert Advice <ArrowRight size={20} />
              </a>
              <Link 
                to="/services" 
                className="bg-white hover:bg-orange-50 text-orange-600 border border-orange-200 px-10 py-5 rounded-2xl font-bold text-center transition-all shadow-sm"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Decorative Flowers Icon */}
        <div className="absolute top-20 right-[10%] text-orange-500/20 animate-pulse hidden lg:block">
          <Flower2 size={150} strokeWidth={1} />
        </div>
      </section>

      {/* Categories Grid: Fresh Flower Aesthetic */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 mb-6">Marriage Registration Categories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg italic">
            "Legal precision meets personal care. Let us handle the bureaucracy while you plan the celebrations."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white p-10 rounded-[2.5rem] border border-orange-100 hover:border-orange-500 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-orange-100 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Flower2 size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-orange-950 mb-4 leading-snug group-hover:text-orange-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-8 font-medium leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-orange-50">
                  <span className="text-xs font-black uppercase tracking-widest text-orange-400">{service.duration}</span>
                  <Link to="/contact" className="text-orange-600 font-bold flex items-center gap-1 group/btn">
                    Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Stats: Jasmine Green & Marigold Orange */}
      <section className="bg-[#166534] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 floral-pattern pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: 'Successful Registrations', value: '8,500+' },
            { label: 'Years of Practice', value: '12+' },
            { label: 'Client Satisfaction', value: '99%' },
            { label: 'Advocates in Team', value: '5' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-5xl font-serif font-bold mb-3 text-orange-400">{stat.value}</div>
              <div className="text-orange-100/60 font-bold text-[10px] uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials: "Mogra" Style Softness */}
      <section className="py-24 bg-flower-jasmine/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 mb-4">Grateful Couples</h2>
            <div className="flex justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-orange-400 text-orange-400" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-12 rounded-[3rem] shadow-xl shadow-orange-100/50 border border-orange-50 relative">
                <div className="absolute top-8 left-8 text-orange-100">
                   <Flower2 size={40} />
                </div>
                <p className="text-slate-600 italic mb-10 text-center text-lg leading-relaxed relative z-10 font-medium">"{t.comment}"</p>
                <div className="flex flex-col items-center gap-2">
                  <div className="font-bold text-orange-950 text-xl font-serif">{t.name}</div>
                  <div className="text-[10px] text-orange-400 font-bold uppercase tracking-widest">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-orange-500 rounded-[4rem] p-12 md:p-24 text-center text-white shadow-2xl shadow-orange-200 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Ready for your Special Day?</h2>
            <p className="text-orange-50 text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed font-medium">
              Don't let document worries overshadow your joy. Consult with Pune's trusted marriage advocates today.
            </p>
            <a href="tel:+918888888888" className="inline-block bg-white text-orange-600 px-14 py-5 rounded-3xl font-bold text-xl hover:bg-orange-50 transition-all shadow-xl hover:scale-105 active:scale-95">
              Consult Now • +91 88888 88888
            </a>
          </div>
          {/* Flower Blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-400/30 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl -ml-40 -mb-40"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
