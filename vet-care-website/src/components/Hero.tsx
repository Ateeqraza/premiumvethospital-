'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Button } from './Button';
import { Star, Shield, Heart, Clock, Users, Award, ArrowRight, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  // Trust indicators data
  const trustIndicators = [
    { icon: Star, value: '4.9', label: 'Rating', color: 'text-amber-500' },
    { icon: Users, value: '200+', label: 'Happy Pets', color: 'text-primary-500' },
    { icon: Shield, value: 'Licensed', label: 'Veterinarians', color: 'text-navy-600' },
    { icon: Award, value: 'Modern', label: 'Equipment', color: 'text-baby-blue-500' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white to-baby-blue-50/50" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d9488' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 50, repeat: Infinity, ease: 'linear' },
        }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/30 to-baby-blue-200/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: -360,
        }}
        transition={{
          scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
        }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-primary-100/40 to-baby-blue-100/40 rounded-full blur-3xl"
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[10%] w-16 h-16 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl blur-xl"
      />
      
      <motion.div
        animate={{ y: [20, -20, 20], x: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 right-[15%] w-24 h-24 bg-gradient-to-br from-baby-blue-400/20 to-baby-blue-600/20 rounded-full blur-xl"
      />

      {/* Paw print decorations */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 0.08, 0],
            y: -150,
            x: Math.sin(i * 1.5) * 30,
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 2.5,
            ease: 'easeOut',
          }}
          className="absolute text-primary-400 text-5xl md:text-6xl"
          style={{
            left: `${15 + i * 20}%`,
            bottom: '5%',
          }}
        >
          🐾
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="text-left"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg shadow-primary-500/10 mb-6 border border-primary-100"
            >
              <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full">
                <Star className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="text-sm font-semibold text-navy-700">
                Voted #1 Pet Hospital 2024
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 leading-[1.1] tracking-tight mb-6"
            >
              Compassionate Care for Your{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-baby-blue-500">
                  Beloved Pets
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary-300 to-baby-blue-300 rounded-full opacity-60"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl text-navy-600/80 leading-relaxed mb-8 max-w-xl"
            >
              Where pet care feels like home. Our experienced veterinarians provide 
              world-class medical services with the warmth and compassion your furry 
              family members deserve.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button 
                variant="cta" 
                size="lg" 
                className="btn-glow shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 group px-8 py-4 text-base sm:text-lg"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="tel:+1234567890">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg border-2 border-navy-200 hover:border-primary-400 hover:bg-primary-50"
                >
                  <Phone className="w-5 h-5 mr-2 text-primary-600" />
                  Call Now
                </Button>
              </a>
            </motion.div>

            {/* Trust Indicators Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
            >
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass-card rounded-xl p-3 text-center"
                >
                  <item.icon className={cn('w-5 h-5 mx-auto mb-1', item.color)} />
                  <p className="text-lg font-bold text-navy-900">{item.value}</p>
                  <p className="text-xs text-navy-600/70 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Social proof section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex items-center gap-5 flex-wrap"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-200 to-baby-blue-200 border-2 border-white shadow-md"
                    style={{ zIndex: 5 - i }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-lg">
                      {['🐕', '🐈', '🐇', '🦜', '🐠'][i]}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Rating */}
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        'w-4 h-4',
                        i < 5 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                      )} 
                    />
                  ))}
                </div>
                <p className="text-sm text-navy-600/80">
                  <strong className="text-navy-900 font-semibold">500+</strong> Happy Pet Parents
                </p>
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
              {/* Gradient overlay on left side for seamless blend */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
              
              {/* Main image placeholder - Replace with actual hero image */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="relative aspect-[4/5] max-w-lg ml-auto rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20">
                  {/* Placeholder for hero image - replace src with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 via-baby-blue-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <span className="text-9xl block mb-4">🏥</span>
                      <p className="text-navy-600/60 font-medium">Hero Image</p>
                      <p className="text-sm text-navy-500/50 mt-2">Upload your veterinary hospital photo</p>
                    </div>
                  </div>
                  
                  {/* Gradient overlay on left for seamless integration */}
                  <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Floating glass card - Experience badge */}
              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 z-30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-600/70 font-medium">Experience</p>
                    <p className="text-xl font-bold text-navy-900">15+ Years</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating glass card - Awards */}
              <motion.div
                animate={{ y: [12, -12, 12] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 z-30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-600/70 font-medium">Awards Won</p>
                    <p className="text-xl font-bold text-navy-900">25+</p>
                  </div>
                </div>
              </motion.div>

              {/* Small floating heart icon */}
              <motion.div
                animate={{ 
                  y: [-15, 15, -15],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-1/2 -left-8 w-14 h-14 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg z-20"
              >
                <Heart className="w-7 h-7 text-white fill-white" />
              </motion.div>

              {/* Clock icon badge */}
              <motion.div
                animate={{ 
                  y: [15, -15, 15],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -right-8 top-1/3 w-12 h-12 bg-gradient-to-br from-baby-blue-400 to-baby-blue-600 rounded-xl flex items-center justify-center shadow-lg z-20"
              >
                <Clock className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
