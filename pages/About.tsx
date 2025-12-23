
import React from 'react';
import { Award, Heart, ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative py-24 bg-slate-900 text-white text-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Advocate Shinde & Associates</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Your trusted legal partners for marriage registration and family law in Pune for over 12 years.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Dedicated to Legal Excellence</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Based in the heart of Pune at Shivajinagar, our firm was founded on the principles of transparency, legal accuracy, and client empathy. We understand that marriage registration is a significant milestone, and legal hurdles shouldn't dampen the joy.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our team consists of senior advocates specializing in the Hindu Marriage Act and Special Marriage Act, ensuring that every registration is handled with the highest standard of professionalism.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="text-indigo-600" />
                <span className="font-bold text-slate-800">ISO Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-indigo-600" />
                <span className="font-bold text-slate-800">5000+ Clients</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
              alt="Office" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-indigo-100 rounded-3xl -z-0"></div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The foundation of our relationship with our clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <ShieldCheck className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-slate-600">No hidden costs, no false promises. We provide a clear legal path with complete transparency.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <Heart className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Empathy</h3>
              <p className="text-slate-600">We understand the personal nature of family law and treat every case with the sensitivity it deserves.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <Award className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Expertise</h3>
              <p className="text-slate-600">Continuous learning and stay up-to-date with the latest amendments in Maharashtra marriage laws.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
