"use client";
import React, { useRef } from 'react';
import { Dices, Gem, Heart } from 'lucide-react';
import { ColorSchemeNew } from '../types';
import { cn } from '../lib/utils';
import { useInView } from '../lib/hooks';
import { GladlyButton } from '../lib/GladlyButton';
import { GladlyHeading } from '../lib/GladlyHeading';
import { ColorSchemeWrapper } from '../lib/ColorSchemeWrapper';

interface DifferentiatorPod {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface DifferentiatorPodsProps {
  heading: string;
  description?: string;
  pods: DifferentiatorPod[];
  columns?: 2 | 3;
  colorSchemeNew: ColorSchemeNew;
}

const defaultPods: DifferentiatorPod[] = [
  { icon: <Gem size={24} />, title: 'Feature 1', description: 'Lorem ipsum dolor sit amet.' },
  { icon: <Heart size={24} />, title: 'Feature 2', description: 'Lorem ipsum dolor sit amet.' },
  { icon: <Dices size={24} />, title: 'Feature 3', description: 'Lorem ipsum dolor sit amet.' },
];

export default function DifferentiatorPods({
  heading = 'Why Us?',
  description = 'Here are some of our key differentiators.',
  pods = defaultPods,
  columns = 3,
  colorSchemeNew = 'white',
}: DifferentiatorPodsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const gridCols = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3' };

  return (
    <ColorSchemeWrapper colorScheme={colorSchemeNew} padding="none">
      <section ref={ref} className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className={cn('text-center transition-all duration-700 ease-in-out', isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')}>
            <GladlyHeading size="h2" as="h2">{heading}</GladlyHeading>
            {description && <p className="mx-auto mt-4 max-w-2xl text-lg text-body">{description}</p>}
          </div>
          <div className={cn('mt-12 grid gap-8 sm:grid-cols-1', gridCols[columns], 'transition-all duration-700 ease-in-out delay-200', isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')}>
            {pods.map((pod, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#D8F4D8] text-[#009b00]">
                  {pod.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900" style={{ fontFamily: "var(--font-display, 'Outfit', sans-serif)" }}>{pod.title}</h3>
                <p className="mt-2 text-base text-[#6b7280]">{pod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ColorSchemeWrapper>
  );
}
