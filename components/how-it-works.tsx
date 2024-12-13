"use client"

import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function HowItWorks() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Create Your Token",
      description: "Design and launch your SPL token easily."
    },
    {
      number: "02",
      title: "Setup Presale",
      description: "Set token price, supply, and duration."
    },
    {
      number: "03",
      title: "Generate a Presale Blink",
      description: "Share your presale link on twitter."
    },
    {
      number: "04",
      title: "Add Liquidity",
      description: "Provide liquidity for token trading post-presale."
    },
    {
      number: "05",
      title: "Distribute or Stake Tokens",
      description: "Deliver or stake tokens post-presale completion."
    },
  ];

  const handleCardHover = (index: number) => {
    if (window.innerWidth <= 768) {
      if (index < steps.length - 1) {
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
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      
      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card 
            key={index} 
            className="bg-black/50 border-green-900/20 transition-all duration-500 
              hover:scale-105 hover:bg-black/70 hover:border-green-400/30 
              hover:shadow-lg hover:shadow-green-400/20"
          >
            <CardHeader>
              <div className="text-4xl font-bold text-[#00FFFF]/70 mb-4">
                {step.number}
              </div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#C0C0C0]/70">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div 
          ref={sliderRef}
          className="overflow-x-hidden w-full"
        >
          <div className="flex snap-x snap-mandatory">
            {steps.map((step, index) => (
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
                      text-4xl font-bold text-[#00FFFF]/70 mb-4
                      transition-transform duration-500
                      ${currentIndex === index ? 'scale-110' : 'scale-100'}
                    `}>
                      {step.number}
                    </div>
                    <CardTitle className={`
                      transition-colors duration-500
                      ${currentIndex === index ? 'text-green-400' : ''}
                    `}>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#C0C0C0]/70">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {steps.map((_, index) => (
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