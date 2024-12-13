"use client"

import { useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PLATFORM_FEATURES } from '@/lib/constants/features';

export function Features() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardHover = (index: number) => {
    if (window.innerWidth <= 768) {
      if (index < PLATFORM_FEATURES.length - 1) {
        setCurrentIndex(index + 1);
      } else {
        setCurrentIndex(0);
      }
    }
  };

  const scrollToCard = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
      
      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLATFORM_FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={index} 
              className="bg-black/50 border-green-900/20 transition-all duration-500 
                hover:scale-105 hover:bg-black/70 hover:border-green-400/30 
                hover:shadow-lg hover:shadow-green-400/20"
            >
              <CardHeader>
                <div className="mb-4 text-[#00FFFF]/70">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-[#C0C0C0]/70">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div 
          ref={sliderRef}
          className="overflow-x-hidden w-full"
        >
          <div className="flex snap-x snap-mandatory">
            {PLATFORM_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="w-full flex-none snap-center px-4"
                >
                  <Card 
                    onMouseEnter={() => {
                      handleCardHover(index);
                      scrollToCard(currentIndex);
                    }}
                    onTouchStart={() => {
                      handleCardHover(index);
                      scrollToCard(currentIndex);
                    }}
                    className={`
                      bg-black/50 border-green-900/20 
                      transition-all duration-700
                      mx-auto w-full max-w-[300px]
                      ${currentIndex === index 
                        ? 'scale-105 border-green-400/30 shadow-lg shadow-green-400/20' 
                        : 'scale-100'
                      }
                    `}
                  >
                    <CardHeader>
                      <div className={`
                        mb-4 text-[#00FFFF]/70 
                        transition-transform duration-500
                        ${currentIndex === index ? 'scale-110' : 'scale-100'}
                      `}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className={`
                        transition-colors duration-500
                        ${currentIndex === index ? 'text-green-400' : ''}
                      `}>
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-[#C0C0C0]/70">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {PLATFORM_FEATURES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToCard(index);
              }}
              className={`
                transition-all duration-500
                rounded-full
                ${currentIndex === index 
                  ? 'w-8 h-3 bg-green-400' 
                  : 'w-3 h-3 bg-green-400/30'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}