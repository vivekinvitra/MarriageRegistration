
import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    captchaInput: ''
  });
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, result: 0 });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ a, b, result: a + b });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(formData.captchaInput) !== captcha.result) {
      alert('Invalid Captcha. Please try again.');
      generateCaptcha();
      return;
    }

    setStatus('loading');
    // Simulate API call
    try {
      const res = await fetch(
        'https://sendemail.megha-shrivastav.workers.dev/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            description: formData.description
          })
        }
      );

      if (!res.ok) throw new Error();

      setStatus('success');
    } catch {
      alert('Failed to send message');
      setStatus('idle');
    }
    
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-md animate-in fade-in zoom-in duration-500">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold mb-4">Message Sent!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for contacting Marriage Registration Pune. Our advocate team will get back to you within 24 hours.
          </p>
          <button 
            onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', phone: '', description: '', captchaInput: '' }); generateCaptcha(); }}
            className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
            alt="Flower decoration background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Get in Touch</h1>
              <p className="text-slate-300 text-lg">
                Have questions about your marriage registration? Our legal experts are ready to help you navigate the process.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col gap-2 border border-white/20">
                <Phone className="text-orange-400 mb-2" />
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Call Support</div>                
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col gap-2 border border-white/20">
                <Mail className="text-orange-400 mb-2" />
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Email Us</div>
                <div className="font-bold text-lg">info@marriageregistration.co.in</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-orange-100">
          {/* Contact Details Side */}
          <div className="lg:col-span-2 bg-orange-600 p-8 md:p-12 text-white">
            <h3 className="text-2xl font-serif font-bold mb-8">Office Location</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">Pune Main Office</div>
                  <p className="text-orange-100">Office No. 402, Shivajinagar Court Road, Near District Court, Pune 411005</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">Consultation Hours</div>
                  <p className="text-orange-100">Mon - Sat: 10:30 AM to 6:30 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-20 h-64 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center italic text-sm text-orange-100 text-center px-8">
              "Providing reliable legal assistance to Pune's citizens for over a decade."
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="lg:col-span-3 p-8 md:p-12">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Send Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="+91"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Query Description</label>
                <textarea 
                  rows={4} 
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">Spam Protection</label>
                <div className="flex items-center gap-6">
                  <div className="text-xl font-bold font-serif text-orange-600 bg-white px-6 py-2 rounded-lg shadow-sm border border-slate-200 select-none">
                    {captcha.a} + {captcha.b} = ?
                  </div>
                  <input 
                    type="number" 
                    name="captchaInput"
                    required
                    value={formData.captchaInput}
                    onChange={handleChange}
                    className="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="Result"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-orange-700 transition-all disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
