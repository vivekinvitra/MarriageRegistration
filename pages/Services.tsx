
import React from 'react';
import { Gavel, Heart, ShieldCheck, HelpCircle, Clock, Sparkles, Flower2 } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Court Marriage",
      icon: <Gavel className="w-8 h-8" />,
      description: "Lawful union ceremonies under the Special Marriage Act 1954. We assist with notice filing, verification, and final registration.",
      features: ["Notice Submission", "Verification Check", "Witness Coordination", "Stamp Duty Advice"]
    },
    {
      title: "HMA Registration",
      icon: <Heart className="w-8 h-8" />,
      description: "Validation of existing traditional ceremonies through government certification. We handle documentation for all Hindu, Sikh, Jain, and Buddhist weddings.",
      features: ["Marriage Proofs", "Gazette Support", "Online Filing", "Affidavit Prep"]
    },
    {
      title: "International Unions",
      icon: <Sparkles className="w-8 h-8" />,
      description: "Legal support for marriages where one or both parties are foreign nationals. Handling visa requirements and single status NOCs.",
      features: ["Embassy NOC Help", "Visa Status Audit", "Foreigner Reg (FRRO)", "Global Validity Certs"]
    },
    {
      title: "Legal Add-ons",
      icon: <ShieldCheck className="w-8 h-8" />,
      description: "Essential legal services following your marriage, ensuring all your national identity documents reflect your new marital status.",
      features: ["Gazette Name Change", "Passport Updates", "Joint Property Prep", "Police Verification"]
    }
  ];

  return (
    <div className="bg-jasmine min-h-screen">
      {/* Services Header: Fresh Wedding Decor Banner */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595981267035-7b04ca84a810?q=80&w=2070&auto=format&fit=crop" 
            alt="Beautiful Indian Wedding Floral Decoration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-orange-600/70 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
              <Flower2 size={40} />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Advocacy Services</h1>
          <p className="text-orange-50 max-w-2xl mx-auto text-lg opacity-80 italic font-medium">
            Professional legal pathways for your commitment across Pune, Pimpri, and Chinchwad.
          </p>
        </div>
      </section>

      {/* Services Grid: Jasmine White Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {serviceCategories.map((service, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-8 p-12 bg-white rounded-[3rem] border border-orange-100 shadow-xl shadow-orange-100/30 group hover:border-orange-500 transition-all duration-500">
              <div className="shrink-0">
                <div className="bg-orange-50 p-6 rounded-[2rem] text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
                   {service.icon}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-serif font-bold text-orange-950 mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="bg-white py-24 border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Fixed Timeline', icon: <Clock />, desc: 'Strict adherence to government timelines for minimum delays.' },
              { title: 'Senior Counsel', icon: <Gavel />, desc: 'Direct interaction with experienced marriage advocates.' },
              { title: 'Verified Success', icon: <ShieldCheck />, desc: '8000+ satisfied couples registered since 2012.' }
            ].map((item, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h4 className="text-xl font-bold text-orange-950 mb-3">{item.title}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
