'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { X } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isHidden) return null;

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="bg-navy-900 border-b border-navy-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-2.5 gap-3">
              <p className="text-center text-sm font-medium text-white/90 tracking-wide">
                New to Alaska Pet Hospital?{' '}
                <span className="font-semibold text-primary-300">
                  Get Your First Pet Checkup Free
                </span>{' '}
                – Limited Time
              </p>

              <motion.button
                onClick={() => setIsVisible(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-4 p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close announcement"
              >
                <X className="w-3.5 h-3.5 text-white/60" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
