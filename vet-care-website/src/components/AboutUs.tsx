'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Button } from './Button';
import { Heart, Star, Stethoscope, Phone, ArrowRight, PawPrint } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background - soft light gray/baby blue transition from Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-baby-blue-50/30 to-white" />
      
      {/* Subtle decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 80, repeat: Infinity, ease: 'linear' },
        }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary-100/30 to-baby-blue-100/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: -360,
        }}
        transition={{
          scale: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 90, repeat: Infinity, ease: 'linear' },
        }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-baby-blue-100/30 to-primary-100/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE - Image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative">
              {/* Placeholder for veterinarian image */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10">
                  {/* Placeholder background gradient */}
                  <div className="w-full h-full bg-gradient-to-br from-navy-100 via-primary-100 to-baby-blue-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <span className="text-7xl block mb-4">👩‍⚕️🐕</span>
                      <p className="text-navy-600/60 font-medium text-lg">Veterinarian Image</p>
                      <p className="text-sm text-navy-500/50 mt-2">Upload your clinic photo</p>
                      <p className="text-xs text-navy-400/50 mt-1">Vet examining happy pet</p>
                    </div>
                  </div>
                  
                  {/* Soft overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/5 to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Floating Card 1 - Experienced Team */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute -top-4 -right-4 lg:-right-8 glass-card rounded-2xl p-5 z-20 shadow-xl max-w-[220px]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-900 mb-1">Experienced Veterinary Team</p>
                    <p className="text-xs text-navy-600/70 leading-relaxed">Compassionate professionals dedicated to exceptional pet care.</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - Trusted by Families */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -bottom-4 -left-4 lg:-left-8 glass-card rounded-2xl p-5 z-20 shadow-xl max-w-[220px]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-900 mb-1">Trusted by Pet Families</p>
                    <p className="text-xs text-navy-600/70 leading-relaxed">Providing personalized care with warmth, compassion, and expertise.</p>
                  </div>
                </div>
              </motion.div>

              {/* Small decorative paw print */}
              <motion.div
                animate={{ 
                  y: [-6, 6, -6],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/4 -left-3 lg:-left-6 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg z-10"
              >
                <PawPrint className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="text-left"
          >
            {/* Section label */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm font-semibold text-primary-600 tracking-wider uppercase mb-4"
            >
              About Alaska Pet Hospital
            </motion.p>

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.1] tracking-tight mb-8"
            >
              Caring for Every Pet Like Family
            </motion.h2>

            {/* Description paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-5 mb-10"
            >
              <p className="text-lg text-navy-600/80 leading-relaxed">
                Founded by passionate veterinarians, Alaska Pet Hospital was built on a simple belief: every pet deserves exceptional, compassionate care. Our modern medical facilities combine cutting-edge technology with a warm, welcoming environment where pets feel safe and owners feel confident.
              </p>
              <p className="text-lg text-navy-600/80 leading-relaxed">
                We don't just treat animals—we build lifelong relationships with pet families. Our experienced team takes the time to understand each pet's unique needs, creating personalized treatment plans that prioritize comfort, health, and happiness.
              </p>
            </motion.div>

            {/* Statistics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
            >
              {/* Stat 1 */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-navy-900 mb-1">200+</p>
                <p className="text-xs lg:text-sm text-navy-600/70 font-medium">Happy Pets</p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-navy-900 mb-1">4.9</p>
                <p className="text-xs lg:text-sm text-navy-600/70 font-medium">Client Rating</p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-navy-400 to-navy-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-navy-900 mb-1">Experienced</p>
                <p className="text-xs lg:text-sm text-navy-600/70 font-medium">Veterinary Team</p>
              </motion.div>

              {/* Stat 4 */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-navy-900 mb-1">24/7</p>
                <p className="text-xs lg:text-sm text-navy-600/70 font-medium">Emergency Care</p>
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="border-t border-navy-200 pt-8"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-6">
                Ready to Give Your Pet the Care They Deserve?
              </h3>
              <Button 
                variant="primary" 
                size="lg" 
                className="btn-glow shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 group px-8 py-4 text-base lg:text-lg"
              >
                Book an Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
