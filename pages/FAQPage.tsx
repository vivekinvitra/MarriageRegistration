
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, Search, MessageCircleQuestion } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = FAQS.filter(f => 
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="bg-indigo-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">Common Questions</h1>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-5 bg-white text-slate-900 rounded-2xl focus:outline-none shadow-xl border-none"
            />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 md:p-10">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="border-b border-slate-100 last:border-0">
                  <button 
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between py-6 text-left hover:text-indigo-600 transition-colors group"
                  >
                    <span className="text-lg font-bold text-slate-800 group-hover:text-indigo-600">{faq.question}</span>
                    <div className={`shrink-0 ml-4 p-2 rounded-lg transition-all ${openId === faq.id ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
                      {openId === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openId === faq.id ? 'max-h-96 pb-8' : 'max-h-0'}`}
                  >
                    <p className="text-slate-600 leading-relaxed pl-2 border-l-4 border-indigo-500 ml-1">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-500">Try adjusting your search terms or contact us directly.</p>
            </div>
          )}
        </div>
      </section>

      {/* Support CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-indigo-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-indigo-100">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <MessageCircleQuestion size={32} className="text-indigo-600" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-900 mb-1">Still have questions?</h4>
            <p className="text-slate-600">Our legal advisors are available to provide specific advice for your unique situation.</p>
          </div>          
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
