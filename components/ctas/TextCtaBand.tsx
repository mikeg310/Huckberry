"use client";
import React, { useRef } from 'react';
import type { ColorSchemeNew, ButtonVariant } from '../types';
import { cn, getColorScheme, getMutedTextColor } from '../lib/utils';
import { useInView } from '../lib/hooks';
import GladlyButton from '../lib/GladlyButton';
import GladlyHeading from '../lib/GladlyHeading';
import ColorSchemeWrapper from '../lib/ColorSchemeWrapper';

interface Cta {
  text: string;
  href: string;
  variant: ButtonVariant;
}

export interface TextCtaBandProps {
  heading?: string;
  text?: string;
  primaryCTA?: Cta;
  secondaryCTA?: Cta;
  colorSchemeNew?: ColorSchemeNew;
}

const TextCtaBand: React.FC<TextCtaBandProps> = ({
  heading = 'Ready to get started?',
  text = 'Create your account and start collaborating.',
  primaryCTA = { text: 'Sign Up Now', href: '#', variant: 'newBlack' },
  secondaryCTA = { text: 'Request a Demo', href: '#', variant: 'linkArrowBlack' },
  colorSchemeNew = 'lightgrey',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const colorScheme = getColorScheme(colorSchemeNew);

  return (
    <ColorSchemeWrapper colorSchemeNew={colorSchemeNew} padding="none">
      <section
        ref={ref}
        className={cn('w-full py-16 px-6 md:py-24 md:px-8', 'transition-opacity duration-1000 ease-in-out', isInView ? 'opacity-100' : 'opacity-0', colorScheme.bg)}
      >
        <div className={cn('container mx-auto max-w-4xl text-center transition-transform duration-1000 ease-in-out', isInView ? 'translate-y-0' : 'translate-y-10')}>
          <GladlyHeading level="h2" className={cn('mb-4', colorScheme.text)}>{heading}</GladlyHeading>
          <p className={cn('text-lg md:text-xl mb-8', getMutedTextColor(colorSchemeNew))}>{text}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && <GladlyButton href={primaryCTA.href} variant={primaryCTA.variant}>{primaryCTA.text}</GladlyButton>}
            {secondaryCTA && <GladlyButton href={secondaryCTA.href} variant={secondaryCTA.variant}>{secondaryCTA.text}</GladlyButton>}
          </div>
        </div>
      </section>
    </ColorSchemeWrapper>
  );
};

export default TextCtaBand;
