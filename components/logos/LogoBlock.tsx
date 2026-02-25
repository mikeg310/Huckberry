"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '../lib/utils';
import { ColorSchemeNew } from '../types';
import GladlyHeading from '../lib/GladlyHeading';
import ColorSchemeWrapper from '../lib/ColorSchemeWrapper';

interface Logo {
  name: string;
  src: string;
  alt: string;
  href?: string;
}

interface LogoBlockProps {
  logos?: Logo[];
  heading?: string;
  columns?: 3 | 4 | 5 | 6;
  colorSchemeNew?: ColorSchemeNew;
}

const LogoBlock: React.FC<LogoBlockProps> = ({
  logos = [],
  heading = 'Trusted by the world\'s best companies',
  columns = 4,
  colorSchemeNew = 'white',
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const gridCols = { 3: 'grid-cols-3', 4: 'grid-cols-4', 5: 'grid-cols-5', 6: 'grid-cols-6' };

  return (
    <ColorSchemeWrapper colorScheme={colorSchemeNew} padding="none">
      <div ref={ref} className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {heading && <GladlyHeading level={2} className="text-center mb-12">{heading}</GladlyHeading>}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className={cn('grid items-center gap-x-8 gap-y-10 sm:gap-x-12', gridCols[columns])}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: inView ? index * 0.1 : 0 }}
                className="flex items-center justify-center"
              >
                {logo.href ? (
                  <a href={logo.href} target="_blank" rel="noopener noreferrer">
                    <img className="max-h-12 w-full object-contain" src={logo.src} alt={logo.alt} style={{ filter: colorSchemeNew === 'black' ? 'brightness(0) invert(1)' : 'none' }} />
                  </a>
                ) : (
                  <img className="max-h-12 w-full object-contain" src={logo.src} alt={logo.alt} style={{ filter: colorSchemeNew === 'black' ? 'brightness(0) invert(1)' : 'none' }} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </ColorSchemeWrapper>
  );
};

export default LogoBlock;
