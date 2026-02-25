"use client";
import React, { useRef } from 'react';
import { Check, X } from 'lucide-react';
import { ColorSchemeNew } from '../types';
import { cn } from '../lib/utils';
import { useInView } from '../lib/hooks';
import { GladlyHeading } from '../lib/GladlyHeading';
import { ColorSchemeWrapper } from '../lib/ColorSchemeWrapper';

interface ComparisonRow {
  feature: string;
  gladly: boolean | string;
  competitor: boolean | string;
}

interface Props {
  heading?: string;
  description?: string;
  gladlyLabel?: string;
  competitorLabel?: string;
  rows?: ComparisonRow[];
  colorSchemeNew?: ColorSchemeNew;
}

const defaultRows: ComparisonRow[] = [
  { feature: 'AI-Powered Self-Service', gladly: true, competitor: true },
  { feature: 'Natively Built-In Voice', gladly: true, competitor: false },
  { feature: 'People-Based, Not Case-Based', gladly: true, competitor: false },
];

const ComparisonChart: React.FC<Props> = ({
  heading = 'A feature-by-feature comparison',
  description = 'See how Gladly stacks up.',
  gladlyLabel = 'Gladly',
  competitorLabel = 'Competitor',
  rows = defaultRows,
  colorSchemeNew = 'white',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <ColorSchemeWrapper colorSchemeNew={colorSchemeNew} padding="none">
      <div ref={ref} className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className={cn('text-center mb-12 transition-opacity duration-1000 ease-in', isInView ? 'opacity-100' : 'opacity-0')}>
          <GladlyHeading as="h2" level={2}>{heading}</GladlyHeading>
          {description && <p className="mt-4 text-lg max-w-2xl mx-auto">{description}</p>}
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200">
          <div className="grid grid-cols-3 font-bold text-left text-sm tracking-wider uppercase">
            <div className="p-4">Feature</div>
            <div className="p-4 text-center bg-green-50">{gladlyLabel}</div>
            <div className="p-4 text-center bg-gray-50">{competitorLabel}</div>
          </div>
          <div className="divide-y divide-gray-200">
            {rows.map((row, index) => (
              <div key={index} className={cn('grid grid-cols-3 items-center transition-all duration-700 ease-in-out', isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
                <div className="p-4 font-medium text-gray-900">{row.feature}</div>
                <div className="p-4 text-center bg-green-50">
                  {typeof row.gladly === 'string' ? (
                    <span className="text-sm text-gray-700">{row.gladly}</span>
                  ) : row.gladly ? (
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="p-4 text-center bg-gray-50">
                  {typeof row.competitor === 'string' ? (
                    <span className="text-sm text-gray-700">{row.competitor}</span>
                  ) : row.competitor ? (
                    <Check className="h-6 w-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-6 w-6 text-red-500 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ColorSchemeWrapper>
  );
};

export default ComparisonChart;
