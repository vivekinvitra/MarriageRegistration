
import React from 'react';
import { CheckCircle2, AlertCircle, FileStack, Users, Calendar, Award } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Initial Consultation",
      desc: "Connect with our advocates to discuss your specific case (Court Marriage or HMA Registration).",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Document Collection",
      desc: "We provide a customized checklist and verify your IDs, age proofs, and address proofs.",
      icon: <FileStack className="w-6 h-6" />
    },
    {
      title: "Application Filing",
      desc: "Our team files the online application and books the slot at the relevant Sub-Registrar office.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Verification Visit",
      desc: "Both parties and witnesses visit the Registrar office with our advocate for physical verification.",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Certificate Issuance",
      desc: "Once approved, the digital or physical Marriage Certificate is issued by the Government.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const docs = [
    "Age Proof (Birth Certificate / School Leaving / SSC Certificate)",
    "Address Proof (Aadhar Card / Voter ID / Passport / Ration Card)",
    "Passport Size Photographs (6 copies of each party)",
    "Identity Proof of 3 Witnesses (Aadhar Card / PAN / Passport)",
    "Wedding Card (if marriage already solemnized)",
    "Priest Certificate (if marriage performed in Temple/Church)",
    "Divorce Decree (if applicable)",
    "Death Certificate of Spouse (if applicable for widow/widower)"
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-indigo-900 py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">The Process</h1>
        <p className="text-indigo-200">A clear, transparent roadmap to your legal marriage registration.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Step Timeline */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-12 flex items-center gap-3">
              <Clock className="text-indigo-600" /> Registration Steps
            </h2>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shrink-0 font-bold z-10 relative">
                      {index + 1}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-full bg-slate-200 -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Checklist */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 h-fit">
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
              <FileStack className="text-indigo-600" /> Required Documents
            </h2>
            <p className="text-slate-600 mb-8 italic">Please ensure all documents are original and clearly legible. Self-attested copies will be required for the file.</p>
            <div className="space-y-4">
              {docs.map((doc, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{doc}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">Important Note</h4>
                  <p className="text-amber-800 text-sm">Age for Groom should be 21+ and Bride should be 18+. Witnesses must be over 18 years of age with valid ID proof.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default Process;
