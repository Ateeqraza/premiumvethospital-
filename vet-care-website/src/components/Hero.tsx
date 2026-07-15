'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Button } from './Button';
import { Heart, Clock, Award, Stethoscope, MessageCircle, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28 pb-16"
    >
      {/* Background - Soft Baby Blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-baby-blue-50 via-white to-baby-blue-50/50" />
      
      {/* Subtle decorative element */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--primary-500) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="text-left pt-8 lg:pt-0"
          >
            {/* Main headline with accent */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 leading-[1.15] tracking-tight mb-8"
            >
              Where{' '}
              <span className="block">
                Pet Care
              </span>
              <span className="block mt-1">
                Feels Like Home
              </span>
            </motion.h1>

            {/* Elegant accent line under headline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="w-24 h-0.5 bg-primary-500 rounded-full mb-8"
            />

            {/* Short description - 2-3 lines */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-navy-600/80 leading-relaxed mb-2 max-w-md"
            >
              Compassionate care from experienced veterinarians in modern facilities.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg sm:text-xl text-navy-600/80 leading-relaxed mb-10 max-w-md"
            >
              Personalized treatment plans your pet deserves.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button 
                variant="primary"
                size="lg"
                className="px-7 py-3.5 text-base sm:text-lg bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                Contact Us
                <MessageCircle className="w-5 h-5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                className="px-7 py-3.5 text-base sm:text-lg border border-navy-300 text-navy-700 hover:bg-navy-50 hover:border-primary-400 transition-all duration-300"
              >
                Book Online Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Trust indicators - minimal horizontal row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap items-center gap-6 sm:gap-8"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Award className="w-4.5 h-4.5 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-navy-700">Experienced Vets</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Heart className="w-4.5 h-4.5 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-navy-700">Compassionate Care</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Stethoscope className="w-4.5 h-4.5 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-navy-700">Modern Facilities</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Clock className="w-4.5 h-4.5 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-navy-700">24/7 Emergency</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Hero Image with seamless blend */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Image container with organic mask and soft fade */}
            <div className="relative">
              {/* Gradient mask for seamless blend on left side */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-baby-blue-50 to-transparent z-20 pointer-events-none" />
              
              {/* Main hero image placeholder */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="relative aspect-[4/5] max-w-lg ml-auto rounded-[2rem] overflow-hidden shadow-2xl shadow-navy-900/10">
                  {/* Placeholder for veterinary hospital photo */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 via-baby-blue-100 to-primary-50 flex items-center justify-center">
                    <div className="text-center p-10">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-200 to-baby-blue-200 flex items-center justify-center">
                        <svg viewBox="0 0 64 64" className="w-14 h-14 text-primary-600" fill="currentColor">
                          <path d="M32 8c-8.837 0-16 7.163-16 16v4h-4c-2.209 0-4 1.791-4 4v16c0 2.209 1.791 4 4 4h40c2.209 0 4-1.791 4-4V28c0-2.209-1.791-4-4-4h-4v-4c0-8.837-7.163-16-16-16zm-8 16v-4c0-4.418 3.582-8 8-8s8 3.582 8 8v4H24zm8 8c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z"/>
                        </svg>
                      </div>
                      <p className="text-navy-700 font-semibold text-lg mb-1">Veterinary Care Photo</p>
                      <p className="text-sm text-navy-500/70">Professional vet with happy pets</p>
                    </div>
                  </div>
                  
                  {/* Soft gradient overlay on left edge for blend */}
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-baby-blue-50 to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Floating Card 1 - Emergency Care */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute -top-4 -left-4 glass-card rounded-xl p-4 z-30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-navy-500 uppercase tracking-wide">Available</p>
                    <p className="text-sm font-bold text-navy-900">24/7 Emergency</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - Expert Team */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 z-30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-navy-500 uppercase tracking-wide">Team</p>
                    <p className="text-sm font-bold text-navy-900">Expert Vets</p>
                  </div>
                </div>
              </motion.div>

              {/* Small floating icon - Heart */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/4 -right-3 w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center shadow-lg z-20"
              >
                <Heart className="w-5 h-5 text-white fill-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
