
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NEWS } from '../constants';
import { Calendar, User, Clock, Share2, MessageSquare, Send, ChevronLeft } from 'lucide-react';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = NEWS.find(item => item.id === id);
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([
    { id: 1, author: 'Suresh Patil', text: 'Very helpful information, especially the part about the new digital signature requirements.', date: 'Oct 25, 2023' },
    { id: 2, author: 'Pooja K.', text: 'Does this apply to Pimpri Chinchwad area as well?', date: 'Oct 26, 2023' }
  ]);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <Link to="/news" className="text-indigo-600 hover:underline">Back to News</Link>
        </div>
      </div>
    );
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    const newComment = {
      id: Date.now(),
      author: 'Anonymous User',
      text: comment,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    
    setCommentsList([newComment, ...commentsList]);
    setComment('');
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <span className="text-slate-300">/</span>
          <Link to="/news" className="hover:text-indigo-600">News</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 truncate">{newsItem.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* H1 Title */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
          {newsItem.title}
        </h1>

        {/* Editor Data / Meta Info */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-slate-100 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
               <User className="text-indigo-600 w-6 h-6" />
            </div>
            <div>
              <div className="text-slate-900 font-bold text-sm">Advocate Shinde</div>
              <div className="flex items-center gap-3 text-slate-500 text-xs">
                <span className="flex items-center gap-1"><Calendar size={12} /> {newsItem.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> 4 min read</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors">
              <Share2 size={18} />
            </button>
            <button className="p-2 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors">
              <MessageSquare size={18} />
            </button>
          </div>
        </div>

        {/* News Image */}
        <div className="rounded-3xl overflow-hidden mb-10 shadow-lg border border-slate-100">
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-auto aspect-video object-cover"
          />
        </div>

        {/* News Description / Content */}
        <div className="prose prose-slate max-w-none text-slate-700 text-lg leading-relaxed space-y-6">
          <p className="font-semibold text-slate-900 text-xl">
            {newsItem.summary}
          </p>
          <p>
            The legal landscape for marriage registration in Pune is evolving rapidly. As part of the government's digital transformation initiative, several key changes have been implemented to ensure transparency and reduce the bureaucratic hurdles faced by couples.
          </p>
          <p>
            {newsItem.content}
          </p>
          <h3 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">Key Takeaways for Applicants</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure all primary identification documents match the names on school leaving certificates.</li>
            <li>Witnesses must be physically present and carry original Aadhar cards.</li>
            <li>Booking a slot through the online portal is now mandatory for all sub-registrar offices in Pune.</li>
            <li>Digital signatures of advocates help expedite the verification process at the court level.</li>
          </ul>
          <p>
            For further clarification on these updates or to seek legal assistance for your specific case, please visit our contact page or call our help desk. We remain committed to providing professional guidance through every step of your legal journey.
          </p>
        </div>

        {/* Comments Section */}
        <div className="mt-20 border-t border-slate-100 pt-12 pb-24">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="text-indigo-600" size={24} />
            <h2 className="text-2xl font-serif font-bold text-slate-900">Reader Comments ({commentsList.length})</h2>
          </div>

          {/* Comment Form */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-12">
            <h4 className="font-bold text-slate-900 mb-4">Add a comment</h4>
            <form onSubmit={handleAddComment}>
              <textarea 
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts or ask a question..."
                className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none mb-4"
                rows={3}
              ></textarea>
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-md"
                >
                  Post Comment <Send size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Comments List */}
          <div className="space-y-8">
            {commentsList.map((c) => (
              <div key={c.id} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0 flex items-center justify-center font-bold text-slate-500">
                  {c.author.charAt(0)}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900">{c.author}</span>
                    <span className="text-xs text-slate-400">{c.date}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {c.text}
                  </p>
                  <div className="mt-2">
                    <button className="text-xs text-indigo-600 hover:underline font-semibold">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Back to News CTA */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between text-white">
          <Link to="/news" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <ChevronLeft /> Back to all News
          </Link>
          <div className="hidden sm:block text-slate-400 text-sm">
            © {new Date().getFullYear()} marriageregistration.co.in
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
