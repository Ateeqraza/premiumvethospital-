'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Service } from '@/types';
import { Stethoscope, Scissors, Syringe, Heart, Pill, Home } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  scissors: Scissors,
  syringe: Syringe,
  heart: Heart,
  pill: Pill,
  home: Home,
};

interface ServiceCardProps extends Service {
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  index = 0,
}) => {
  const IconComponent = iconMap[icon] || Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      className={cn(
        'bg-white rounded-2xl p-6 shadow-lg border border-gray-100',
        'transition-all duration-300 hover:border-primary-200'
      )}
    >
      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
        <IconComponent className="w-7 h-7 text-primary-600" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      {price && (
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">Starting at</span>
          <span className="text-lg font-bold text-primary-600">{price}</span>
        </div>
      )}
    </motion.div>
  );
};
