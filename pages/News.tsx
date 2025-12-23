
import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS } from '../constants';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

const News: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
              <Newspaper size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-4">Latest Legal News</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest changes in marriage laws, registration procedures, and official notices in Pune.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS.map((item) => (
            <article key={item.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <Link to={`/news/${item.id}`} className="block relative aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Legal Updates
                  </span>
                </div>
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <Link to={`/news/${item.id}`}>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                </Link>
                <p className="text-slate-600 text-sm mb-8 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
                <div className="mt-auto">
                  <Link to={`/news/${item.id}`} className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Read Full Article <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Subscribe to Law Alerts</h3>
            <p className="text-slate-400">Get monthly updates on documentation requirements and legal changes in Pune directly to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="px-6 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-64"
            />
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shrink-0 hover:bg-indigo-700 transition-all">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
