"use client";
import React from 'react';
import { cn } from '../lib/utils';
import { useInView } from '../lib/hooks';
import { ColorSchemeNew, ButtonVariant, ImageWithAlt } from '../types';
import { GladlyButton } from '../lib/GladlyButton';
import { GladlyHeading } from '../lib/GladlyHeading';
import { ColorSchemeWrapper } from '../lib/ColorSchemeWrapper';

interface HeroNewProps {
  heading?: string;
  text?: string;
  primaryCTA?: { text: string; link: string; variant: ButtonVariant };
  secondaryCTA?: { text: string; link: string; variant: ButtonVariant };
  image?: ImageWithAlt;
  video?: string;
  colorSchemeNew?: ColorSchemeNew;
}

const HeroNew: React.FC<HeroNewProps> = ({
  heading = 'This is a new hero component',
  text = 'This is the default body text for the new hero component.',
  primaryCTA = { text: 'Primary CTA', link: '#', variant: 'newBlack' },
  secondaryCTA = { text: 'Secondary CTA', link: '#', variant: 'linkArrowBlack' },
  image = { src: 'https://via.placeholder.com/800x600', alt: 'Placeholder Image' },
  video,
  colorSchemeNew = 'white',
}) => {
  const { ref, inView } = useInView();

  return (
    <ColorSchemeWrapper colorScheme={colorSchemeNew} padding="none">
      <section ref={ref} className={cn('w-full', {
        'bg-white text-gray-800': colorSchemeNew === 'white',
        'bg-gray-50 text-gray-800': colorSchemeNew === 'lightgrey',
        'bg-black text-white': colorSchemeNew === 'black',
        'bg-green-600 text-white': colorSchemeNew === 'green',
        'bg-purple-600 text-white': colorSchemeNew === 'purple',
        'bg-green-100 text-gray-800': colorSchemeNew === 'greenTint',
        'bg-purple-100 text-gray-800': colorSchemeNew === 'purpleTint',
        'bg-green-50 text-gray-600': colorSchemeNew === 'greenTintMuted',
        'bg-gradient-to-r from-green-400 to-teal-500 text-white': colorSchemeNew === 'greenGradient',
      })}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center py-12 lg:py-24">
            <div className={`lg:w-3/5 lg:pr-16 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <GladlyHeading size="h1" text={heading} />
              <p className="mt-4 text-lg text-body">{text}</p>
              <div className="mt-8 flex space-x-4">
                {primaryCTA && (
                  <GladlyButton href={primaryCTA.link} variant={primaryCTA.variant}>
                    {primaryCTA.text}
                  </GladlyButton>
                )}
                {secondaryCTA && (
                  <GladlyButton href={secondaryCTA.link} variant={secondaryCTA.variant}>
                    {secondaryCTA.text}
                  </GladlyButton>
                )}
              </div>
            </div>
            <div className={`lg:w-2/5 mt-12 lg:mt-0 transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {video ? (
                <video src={video} autoPlay loop muted playsInline className="rounded-lg shadow-2xl w-full" />
              ) : (
                <img src={image.src} alt={image.alt} className="rounded-lg shadow-2xl w-full" />
              )}
            </div>
          </div>
        </div>
      </section>
    </ColorSchemeWrapper>
  );
};

export default HeroNew;
