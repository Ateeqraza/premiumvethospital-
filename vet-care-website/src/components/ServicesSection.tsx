'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Syringe, 
  Scissors, 
  Pill, 
  Sparkles, 
  Home, 
  HeartPulse, 
  Phone, 
  MessageCircle,
  Activity,
  ShieldCheck
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Emergency Care',
      description: '24/7 immediate medical attention for critical situations and urgent health concerns.',
      icon: HeartPulse,
      featured: true,
      color: 'text-rose-600',
      bg: 'bg-rose-50'
    },
    {
      id: 2,
      title: 'Wellness & Preventive',
      description: 'Comprehensive check-ups and health monitoring to keep your pet thriving year-round.',
      icon: ShieldCheck,
      featured: false,
      color: 'text-teal-600',
      bg: 'bg-teal-50'
    },
    {
      id: 3,
      title: 'Vaccinations',
      description: 'Essential immunizations tailored to your pet\'s lifestyle and local health requirements.',
      icon: Syringe,
      featured: false,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 4,
      title: 'Surgery',
      description: 'Advanced surgical procedures performed with precision, safety, and compassionate care.',
      icon: Scissors,
      featured: false,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    },
    {
      id: 5,
      title: 'Dental Care',
      description: 'Professional cleaning and oral health treatments to prevent disease and ensure comfort.',
      icon: Sparkles,
      featured: false,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50'
    },
    {
      id: 6,
      title: 'Pet Pharmacy',
      description: 'Convenient access to prescribed medications and nutritional supplements on-site.',
      icon: Pill,
      featured: false,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      id: 7,
      title: 'Grooming',
      description: 'Professional bathing, trimming, and styling to keep your pet clean, healthy, and comfortable.',
      icon: Activity,
      featured: false,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      id: 8,
      title: 'Boarding',
      description: 'Safe, comfortable, and supervised stays for your pet while you are away from home.',
      icon: Home,
      featured: false,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Subtle Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-60 pointer-events-none" />
      <div className="absolute -left-20 top-40 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="block text-teal-600 font-semibold tracking-widest text-xs uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Complete Veterinary Care <br />
            <span className="text-slate-600 font-serif italic">Under One Roof</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            From routine wellness checks to complex surgeries, our state-of-the-art facility 
            provides comprehensive medical solutions tailored to your pet's unique needs.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Services Grid (Left/Center) */}
          <div className="lg:col-span-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                  className={`
                    group relative p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-300
                    ${service.featured ? 'md:col-span-2 bg-gradient-to-r from-slate-50 to-white shadow-lg border-l-4 border-l-rose-400' : 'shadow-sm hover:shadow-md'}
                  `}
                >
                  <div className="flex items-start gap-5">
                    <div className={`p-3 rounded-xl ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual & Floating Elements (Right) */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                   <img 
                    src="/api/placeholder/600/800" 
                    alt="Veterinarian treating a pet" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                
                {/* Floating Badge 1 */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-rose-100 text-rose-600 rounded-full">
                      <HeartPulse size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Availability</p>
                      <p className="text-slate-800 font-bold">24/7 Emergency Care</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 max-w-[180px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-100 text-teal-600 rounded-full">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-slate-800 font-bold text-sm">Advanced Equipment</p>
                      <p className="text-slate-500 text-xs mt-1">Modern diagnostics</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                Not Sure Which Service Your Pet Needs?
              </h3>
              <p className="text-slate-600 text-lg">
                Our experienced veterinary team is here to guide you and recommend the best care path for your beloved companion.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Contact Us
              </button>
              <button className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-xl font-semibold hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
