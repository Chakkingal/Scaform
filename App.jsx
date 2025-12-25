import React, { useState, useEffect } from 'react';
import { 
  Building2, Settings, PenTool, ShieldCheck, Mail, Phone, 
  Globe2, Database, Layers, CheckCircle, Menu, X, 
  FileText, ArrowRight, Download, Clock, HardHat 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ServiceCard = ({ icon: Icon, title, description, features }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
        <Icon className="text-orange-600 group-hover:text-white transition-colors duration-300" size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-xs font-medium text-slate-500">
            <CheckCircle className="text-orange-500 mr-2" size={14} /> {f}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <Layers className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              SCAFORM <span className="text-orange-600 text-lg font-light tracking-widest ml-1 uppercase">Engineering</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <a href="#services" className="hover:text-orange-600 transition-colors">Services</a>
            <a href="#projects" className="hover:text-orange-600 transition-colors">Projects</a>
            <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition-all shadow-lg">Request Proposal</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-full text-orange-700 text-xs font-bold tracking-widest uppercase">
              <ShieldCheck size={16} /> Tier-1 Formwork Engineering
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
              Precision Design & <span className="text-orange-600">CAD Detailing.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Specialized outsourced engineering for major GCC contractors. Delivering high-precision shop drawings and static analysis for complex concrete structures.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all flex items-center shadow-xl shadow-orange-200">
                Discuss Project <ArrowRight className="ml-2" />
              </a>
              <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                <Download size={18} /> Download Profile
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-slate-100">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="p-12 h-full flex flex-col justify-end relative z-10">
                <p className="text-orange-500 font-mono text-xs mb-2">CAD_ID: SCA-FW-2025</p>
                <h2 className="text-white text-3xl font-bold leading-tight">Complex Climbing Wall Shuttering Details</h2>
              </div>
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <PenTool className="text-orange-500 animate-pulse" size={32} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-black text-slate-900">Engineering Core</h2>
            <p className="text-slate-600">Eliminating site bottlenecks through meticulous technical submittals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={PenTool}
              title="CAD Shop Drawings"
              description="Full detailing for Doka, Peri, and proprietary systems. Clear, site-ready assembly layouts."
              features={["Climbing Systems", "Slab/Wall Layouts", "Bridge Parapets"]}
            />
            <ServiceCard 
              icon={Settings}
              title="Static Calculations"
              description="Structural stability analysis and static calculations for shoring and scaffolding systems."
              features={["Shoring Capacity", "Wind Load Analysis", "Design Checking"]}
            />
            <ServiceCard 
              icon={Database}
              title="Rebar & BBS"
              description="Professional reinforcement detailing and Bar Bending Schedules as per BS/ACI standards."
              features={["Automated BBS", "Material Take-offs", "Section Details"]}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">Global Expertise, Regional Impact.</h2>
              <p className="text-slate-600 leading-relaxed">Our leaders have contributed to the GCC's most iconic infrastructure and high-rise developments.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Bluewaters Island, UAE', 'Ras Abu Fontas, Qatar', 'Business Bay, UAE', 'Msheireb Downtown, Qatar'].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Building2 className="text-orange-600" size={20} />
                    <span className="font-bold text-slate-900 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Technical Proficiency</h3>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400 text-sm">Design Standards</span>
                  <span className="font-bold">BS / ACI / EN</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400 text-sm">CAD Platform</span>
                  <span className="font-bold">AutoCAD / Microstation</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400 text-sm">Calculations</span>
                  <span className="font-bold">Static & Wind Load</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-orange-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-8 text-white">
            <h2 className="text-4xl lg:text-5xl font-black">Partner with Scaform.</h2>
            <p className="text-orange-100 text-lg max-w-xl mx-auto">Discuss your project requirements with our engineering team today.</p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a href="mailto:info@scaform.com" className="flex items-center gap-3 text-white font-bold text-xl hover:text-slate-900 transition-colors">
                <Mail size={24} /> info@scaform.com
              </a>
              <a href="tel:+9710000000" className="flex items-center gap-3 text-white font-bold text-xl hover:text-slate-900 transition-colors">
                <Phone size={24} /> UAE / KSA Regional
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm">
        <p>© 2025 Scaform Design & Engineering Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;