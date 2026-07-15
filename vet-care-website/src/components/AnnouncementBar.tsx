'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { X } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'relative overflow-hidden',
        'bg-gradient-to-r from-primary-600 via-primary-500 to-baby-blue-500'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-2.5 sm:py-3 gap-4">
          {/* Animated icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="hidden sm:flex items-center justify-center w-6 h-6"
          >
            <span className="text-white text-sm">🎉</span>
          </motion.div>

          {/* Announcement text */}
          <p className="text-center text-sm sm:text-base font-medium text-white leading-relaxed">
            New to Alaska Pet Hospital?{' '}
            <span className="font-semibold underline decoration-white/60 underline-offset-2">
              Get Your First Pet Checkup Free
            </span>{' '}
            – Limited Time Offer
          </p>

          {/* Close button */}
          <motion.button
            onClick={() => setIsVisible(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close announcement"
          >
            <X className="w-4 h-4 text-white/90" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
