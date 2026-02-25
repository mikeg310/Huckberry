"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ColorSchemeNew } from '../types';
import { cn } from '../lib/utils';
import { GladlyHeading } from '../lib/GladlyHeading';
import { ColorSchemeWrapper } from '../lib/ColorSchemeWrapper';

interface FreeTextPodsProps {
  heading?: string;
  pods?: { title: string; description: string }[];
  columns?: 2 | 3 | 4;
  colorSchemeNew?: ColorSchemeNew;
}

const defaultPods = [
  { title: 'Global by Design', description: 'Engage customers in their native language with built-in translation.' },
  { title: 'Radically Personal', description: 'Create tailored experiences with a complete view of the customer.' },
];

const FreeTextPods: React.FC<FreeTextPodsProps> = ({
  heading = 'A Radically Personal Customer Service Platform',
  pods = defaultPods,
  columns = 3,
  colorSchemeNew = 'white',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const gridCols = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  return (
    <ColorSchemeWrapper colorScheme={colorSchemeNew} padding="none">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants}>
          {heading && (
            <div className="mb-12 text-center">
              <GladlyHeading level={2} className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</GladlyHeading>
            </div>
          )}
          <motion.div className={cn('grid grid-cols-1 gap-8', gridCols[columns])} variants={containerVariants}>
            {pods.map((pod, index) => (
              <motion.div key={index} className="rounded-lg p-6" variants={itemVariants}>
                <h3 className="text-lg font-bold mb-2">{pod.title}</h3>
                <p className="text-base text-gray-500">{pod.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </ColorSchemeWrapper>
  );
};

export default FreeTextPods;
