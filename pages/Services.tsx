
import React from 'react';
// Import Clock from lucide-react
import { Gavel, MapPin, FileText, Heart, ShieldCheck, HelpCircle, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Court Marriage Process",
      icon: <Gavel className="w-10 h-10 text-indigo-600" />,
      description: "Step-by-step guidance for Court Marriage under the Special Marriage Act 1954. We handle the 30-day notice period, objections (if any), and the final ceremony at the Registrar's office.",
      features: ["Notice Filing", "Document Verification", "Witness Arrangement Assistance", "Final Registration"]
    },
    {
      title: "All Venues in Pune",
      icon: <MapPin className="w-10 h-10 text-indigo-600" />,
      description: "Assistance with registration across all key zones in Pune: Shivajinagar Court, Haveli 1-25, PMC and PCMC registrar offices. We help you choose the correct jurisdiction based on your residence.",
      features: ["Haveli Sub-Registrar Offices", "Pimpri Chinchwad Offices", "Pune City Zone", "Rural Pune Jurisdictions"]
    },
    {
      title: "Registration Certificate",
      icon: <FileText className="w-10 h-10 text-indigo-600" />,
      description: "Professional help in obtaining a valid Marriage Certificate for already solemnized marriages (Hindu Marriage Act). Essential for Passport, Visa, Bank Accounts, and Insurance.",
      features: ["Fast-track Processing", "Digital Certificate", "Home Delivery of Copy", "Legacy Records Search"]
    },
    {
      title: "Social Marriage Legalization",
      icon: <Heart className="w-10 h-10 text-indigo-600" />,
      description: "Legalizing traditional ceremonies performed at Temples, Churches, or Community Halls. We convert your religious marriage into a legally recognized government document.",
      features: ["Priest Certificates Validation", "Temple Wedding Legalization", "Social Proof Collection", "Legal Affidavit Preparation"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Providing end-to-end legal solutions for marriage registration and related documentation in Pune.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceCategories.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
              <div className="shrink-0">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  {service.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Why Legal Assistance?</h2>
            <p className="text-slate-600">Avoid common pitfalls and delays in your marriage registration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl">
              {/* Fix: Clock is now imported from lucide-react */}
              <Clock className="w-12 h-12 text-indigo-600 mb-6" />
              <h4 className="text-xl font-bold mb-4">Save Your Time</h4>
              <p className="text-slate-600">We manage the queues, the slot bookings, and the documentation errors that cause months of delay.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <ShieldCheck className="w-12 h-12 text-indigo-600 mb-6" />
              <h4 className="text-xl font-bold mb-4">Error-Free Documentation</h4>
              <p className="text-slate-600">Minor name mismatches on IDs can reject your application. Our legal experts verify every character.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <HelpCircle className="w-12 h-12 text-indigo-600 mb-6" />
              <h4 className="text-xl font-bold mb-4">Post-Marriage Support</h4>
              <p className="text-slate-600">From name changes to passport updates, we provide continuous legal support even after registration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
