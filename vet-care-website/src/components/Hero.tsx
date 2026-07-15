'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Button } from './Button';
import { Star, Heart, Clock, Award, ArrowRight, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background gradient - bright and clean */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-baby-blue-50/40" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d9488' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated background orbs - subtle and premium */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
        }}
        className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-primary-100/40 to-baby-blue-100/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: -360,
        }}
        transition={{
          scale: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 70, repeat: Infinity, ease: 'linear' },
        }}
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-baby-blue-100/40 to-primary-100/30 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="text-left"
          >
            {/* Main headline with accent line */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 leading-[1.1] tracking-tight mb-6"
            >
              Where Pet Care{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Feels Like Home</span>
                {/* Elegant accent line under "Feels Like Home" */}
                <motion.span
                  className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 via-primary-500 to-baby-blue-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                />
              </span>
            </motion.h1>

            {/* Two short lines of premium marketing copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-navy-600/80 leading-relaxed mb-3 max-w-lg"
            >
              Compassionate veterinary care from experienced veterinarians who treat your pets like family.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-lg sm:text-xl text-navy-600/80 leading-relaxed mb-10 max-w-lg"
            >
              Modern medical facilities and personalized treatment plans you can trust.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="btn-glow shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 group px-8 py-4 text-base sm:text-lg"
              >
                Contact Us
                <MessageCircle className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg border-2 border-navy-200 hover:border-primary-400 hover:bg-primary-50"
              >
                Book Online Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Trust indicators - minimal and elegant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg">
                  <Star className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-sm font-semibold text-navy-700">4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-sm font-semibold text-navy-700">200+ Happy Pets</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-baby-blue-400 to-baby-blue-600 rounded-lg">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-navy-700">Licensed Vets</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Hero Image with seamless blend */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main hero image container with gradient mask for seamless blend */}
            <div className="relative">
              {/* Gradient overlay on left side for seamless blend into page background */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/90 to-white/70 z-20 pointer-events-none" />
              
              {/* Main image placeholder - Replace with actual hero image */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="relative aspect-square max-w-xl ml-auto rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/15">
                  {/* Placeholder for hero image featuring happy pets (dog, cat, bird) */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 via-baby-blue-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <span className="text-8xl block mb-4">🐕🐈🦜</span>
                      <p className="text-navy-600/60 font-medium text-lg">Hero Image</p>
                      <p className="text-sm text-navy-500/50 mt-2">Upload your veterinary hospital photo</p>
                      <p className="text-xs text-navy-400/50 mt-1">Featuring happy pets</p>
                    </div>
                  </div>
                  
                  {/* Gradient overlay on left for seamless integration */}
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Floating Badge - Rating */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 z-30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy-900">4.9</p>
                    <p className="text-xs text-navy-600/70 font-medium">Rating</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Happy Pets */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 z-30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy-900">200+</p>
                    <p className="text-xs text-navy-600/70 font-medium">Happy Pets</p>
                  </div>
                </div>
              </motion.div>

              {/* Small floating heart icon */}
              <motion.div
                animate={{ 
                  y: [-12, 12, -12],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-1/4 -left-4 w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg z-20"
              >
                <Heart className="w-6 h-6 text-white fill-white" />
              </motion.div>

              {/* Clock icon badge */}
              <motion.div
                animate={{ 
                  y: [12, -12, 12],
                  rotate: [-3, 3, -3],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -right-4 top-1/3 w-11 h-11 bg-gradient-to-br from-baby-blue-400 to-baby-blue-600 rounded-xl flex items-center justify-center shadow-lg z-20"
              >
                <Clock className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
