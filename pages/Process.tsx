
import React from 'react';
import { CheckCircle2, AlertCircle, FileStack, Users, Calendar, Award, Clock, Heart } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "First Consultation",
      desc: "Connect with our advocates to discuss your unique case requirements.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Divine Document Set",
      desc: "Detailed verification of your age, residence, and social marriage proofs.",
      icon: <FileStack className="w-6 h-6" />
    },
    {
      title: "Pavitra Filing",
      desc: "Mandatory online application submission and appointment scheduling.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "The Signing Ceremony",
      desc: "Personal appearance before the registrar with witnesses for final signatures.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Eternal Certificate",
      desc: "Issuance of your legally binding Marriage Certificate by the Government.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const docs = [
    "Age Proof (Birth Certificate / School Leaving)",
    "Residence Proof (Aadhar / Passport / Voter ID)",
    "Passport Photographs (Marriage Ready)",
    "ID Proofs of 3 Witnesses",
    "Wedding Invitation Card (Social Proof)",
    "Pooja / Temple Wedding Receipt",
    "Affidavit for Delay (If applicable)",
    "No Objection Certificate (If foreigner)"
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header with Banner Image */}
      <section className="relative py-24 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596193810451-92f768565b93?q=80&w=2070&auto=format&fit=crop" 
            alt="Marigold decorations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#166534]/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 px-4">
          <span className="font-script text-4xl text-orange-400 mb-2 block">Step by Step Guide</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">The Pavitra Process</h1>
          <p className="text-orange-100 max-w-xl mx-auto italic">Navigating the legal threads of your union with grace and precision.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Step Timeline */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-12 flex items-center gap-4 text-orange-950">
              <Clock className="text-orange-500" /> Registration Journey
            </h2>
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-8 group">
                  <div className="relative">
                    <div className="w-14 h-14 bg-orange-100 border-2 border-orange-500 rounded-2xl flex items-center justify-center text-orange-900 shrink-0 font-bold z-10 relative group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg shadow-orange-100">
                      {index + 1}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="absolute top-14 left-1/2 w-0.5 h-[110%] bg-gradient-to-b from-orange-500/50 to-transparent -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-serif font-bold text-orange-950 mb-3 group-hover:text-orange-700 transition-colors">{step.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Checklist Card */}
          <div className="bg-white p-8 md:p-14 rounded-[3rem] border border-orange-100 shadow-2xl shadow-orange-200 h-fit relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-full -mr-20 -mt-20 opacity-50"></div>
            <h2 className="text-3xl font-serif font-bold mb-10 flex items-center gap-4 text-orange-950 relative z-10">
              <FileStack className="text-orange-500" /> Sacred Document List
            </h2>
            <div className="space-y-5 relative z-10">
              {docs.map((doc, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-orange-50/50 rounded-2xl border border-orange-100 hover:border-orange-500 transition-colors">
                  <div className="bg-white p-1 rounded-full border border-orange-500 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-orange-950 font-bold text-sm tracking-tight">{doc}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-orange-50 rounded-3xl border border-orange-100 relative z-10">
              <div className="flex gap-4">
                <AlertCircle className="w-8 h-8 text-orange-700 shrink-0" />
                <div>
                  <h4 className="font-black text-orange-900 mb-2 uppercase tracking-widest text-xs">Vital Proclamation</h4>
                  <p className="text-orange-800 text-sm italic font-medium">As per Indian Law, Groom must be 21+ and Bride 18+. All witnesses must be adults with valid national ID proofs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
