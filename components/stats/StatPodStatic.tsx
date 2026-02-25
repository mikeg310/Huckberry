"use client";
import React, { useRef } from 'react';
import { useInView } from '../lib/hooks';
import { cn } from '../lib/utils';
import { ColorSchemeNew } from '../types';
import ColorSchemeWrapper from '../lib/ColorSchemeWrapper';

interface Stat {
  value: string;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

interface Props {
  stats?: Stat[];
  columns?: 2 | 3 | 4;
  colorSchemeNew?: ColorSchemeNew;
}

const StatPodStatic: React.FC<Props> = ({
  stats = [
    { value: '98%', label: 'satisfaction rate' },
    { value: '120M+', label: 'conversations' },
    { value: '<5 min', label: 'average response time' },
  ],
  columns = 3,
  colorSchemeNew = 'white',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const gridCols = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' };

  return (
    <ColorSchemeWrapper colorSchemeNew={colorSchemeNew} padding="sm">
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-1 gap-y-12 gap-x-8 transition-all duration-1000 ease-in-out',
          gridCols[columns],
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            {stat.description && <p className="text-lg mb-2">{stat.description}</p>}
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none" style={{ fontFamily: "var(--font-display, 'Outfit', sans-serif)" }}>
              {stat.prefix && <span className="mr-1">{stat.prefix}</span>}
              {stat.value}
              {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
            </div>
            <p className="text-lg mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </ColorSchemeWrapper>
  );
};

export default StatPodStatic;
