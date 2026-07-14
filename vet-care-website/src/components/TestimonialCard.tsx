'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Testimonial } from '@/types';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps extends Testimonial {
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  petName,
  image,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'bg-white rounded-2xl p-8 shadow-lg border border-gray-100',
        'relative overflow-hidden'
      )}
    >
      {/* Quote icon background */}
      <Quote className="absolute top-4 right-4 w-12 h-12 text-primary-100 opacity-50" />
      
      {/* Rating stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-5 h-5',
              i < rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'
            )}
          />
        ))}
      </div>
      
      {/* Testimonial content */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{content}"</p>
      
      {/* Author info */}
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-primary-600 font-bold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
          {petName && (
            <p className="text-xs text-primary-600 mt-1">🐾 Pet parent of {petName}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
