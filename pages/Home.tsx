
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Banner / Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" 
            alt="Marriage Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Legalize Your Love <br />With Ease
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Leading Advocate services for Marriage Registration and Court Marriage in Pune. Professional, transparent, and completely legal processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-lg font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services" 
                className="bg-white text-indigo-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-center transition-all shadow-lg"
              >
                Our Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-indigo-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-indigo-400" size={20} />
                <span>100% Legally Valid</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-indigo-400" size={20} />
                <span>Secure Data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Table */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Marriage Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive legal assistance for all types of marriage documentation and registration in Pune.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase">Service Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase">Description</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase">Estimated Time</th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {SERVICES.map((service) => (
                <tr key={service.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-6 font-bold text-slate-900">{service.title}</td>
                  <td className="px-6 py-6 text-slate-600 max-w-md">{service.description}</td>
                  <td className="px-6 py-6 text-indigo-600 font-medium">{service.duration}</td>
                  <td className="px-6 py-6">
                    <Link to="/contact" className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1">
                      Enquire Now <ArrowRight size={14} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">12+</div>
            <div className="text-indigo-300 uppercase text-xs tracking-widest">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">5000+</div>
            <div className="text-indigo-300 uppercase text-xs tracking-widest">Successful Registrations</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-indigo-300 uppercase text-xs tracking-widest">Legal Experts</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-indigo-300 uppercase text-xs tracking-widest">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-600">Hear from couples who successfully registered their marriage with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to start the registration?</h2>
              <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                Consult with our professional legal team today. We provide a clear roadmap and document checklist.
              </p>
              <Link to="/contact" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-xl">
                Get a Free Consultation
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-700 rounded-full blur-3xl opacity-30 -ml-32 -mb-32"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
