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

function renderValue(value: boolean | string, isGladly: boolean) {
  if (typeof value === 'string') {
    return <span className={cn("text-sm", isGladly ? "text-gray-700" : "text-gray-500")}>{value}</span>;
  }
  return value ? (
    <Check className="h-5 w-5 text-green-500 mx-auto" />
  ) : (
    <X className="h-5 w-5 text-red-500 mx-auto" />
  );
}

const ComparisonChart: React.FC<Props> = ({
  heading = 'A feature-by-feature comparison',
  description = 'See how Gladly stacks up.',
  gladlyLabel = 'Gladly',
  competitorLabel = 'Competitor',
  rows = defaultRows,
  colorSchemeNew = 'white',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <ColorSchemeWrapper colorSchemeNew={colorSchemeNew} padding="none">
      <div ref={ref} className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className={cn('text-center mb-10 sm:mb-12 transition-opacity duration-1000 ease-in', isInView ? 'opacity-100' : 'opacity-0')}>
          <GladlyHeading as="h2" level={2}>{heading}</GladlyHeading>
          {description && <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto">{description}</p>}
        </div>

        {/* Desktop: traditional table layout */}
        <div className="hidden md:block overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200">
          <div className="grid grid-cols-3 font-bold text-left text-sm tracking-wider uppercase">
            <div className="p-4">Feature</div>
            <div className="p-4 text-center bg-green-50">{gladlyLabel}</div>
            <div className="p-4 text-center bg-gray-50">{competitorLabel}</div>
          </div>
          <div className="divide-y divide-gray-200">
            {rows.map((row, index) => (
              <div key={index} className={cn('grid grid-cols-3 items-center transition-all duration-700 ease-in-out', isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')} style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="p-4 font-medium text-gray-900">{row.feature}</div>
                <div className="p-4 text-center bg-green-50">
                  {renderValue(row.gladly, true)}
                </div>
                <div className="p-4 text-center bg-gray-50">
                  {renderValue(row.competitor, false)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked card layout */}
        <div className="md:hidden space-y-4">
          {rows.map((row, index) => (
            <div
              key={index}
              className={cn(
                'rounded-lg shadow-sm bg-white border border-gray-200 overflow-hidden transition-all duration-700 ease-in-out',
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                <h4 className="font-semibold text-gray-900 text-sm">{row.feature}</h4>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="px-4 py-3 bg-green-50/60">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 shrink-0 mt-0.5 min-w-[60px]">{gladlyLabel}</span>
                    <div className="text-sm text-gray-700">{typeof row.gladly === 'string' ? row.gladly : row.gladly ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}</div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 shrink-0 mt-0.5 min-w-[60px]">{competitorLabel}</span>
                    <div className="text-sm text-gray-500">{typeof row.competitor === 'string' ? row.competitor : row.competitor ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ColorSchemeWrapper>
  );
};

export default ComparisonChart;
