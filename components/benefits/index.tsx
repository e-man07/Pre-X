"use client"

import { useRef, useState } from 'react';
import { Shield, Zap, Clock, DollarSign } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
  onHover?: () => void;
  onTouch?: () => void;
  isMobile?: boolean;
}

function BenefitCard({ 
  icon, 
  title, 
  description, 
  isActive = false,
  onHover,
  onTouch,
  isMobile = false
}: BenefitCardProps) {
  return (
    <Card 
      onMouseEnter={onHover}
      onTouchStart={onTouch}
      className={`
        bg-black/50 
        transition-all duration-700
        ${isMobile 
          ? `
            mx-auto w-full max-w-[300px]
            ${isActive 
              ? 'scale-105 border-green-400/30 shadow-lg shadow-green-400/20' 
              : 'scale-100 border-green-900/20'
            }
          `
          : `
            border-green-900/20 
            hover:scale-105 
            hover:bg-black/70 
            hover:border-green-400/30 
            hover:shadow-lg 
            hover:shadow-green-400/20
          `
        }
      `}
    >
      <CardHeader>
        <div className={`
          text-[#00FFFF]/70 mb-4
          transition-transform duration-500
          ${isActive && isMobile ? 'scale-110' : ''}
          ${!isMobile ? 'group-hover:scale-110' : ''}
        `}>
          {icon}
        </div>
        <h3 className={`
          text-xl font-bold
          transition-colors duration-500
          ${isActive && isMobile ? 'text-green-400' : ''}
          ${!isMobile ? 'group-hover:text-green-400' : ''}
        `}>
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#C0C0C0]/70">{description}</p>
      </CardContent>
    </Card>
  );
}

export function Benefits() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const benefits = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Secure & Trustless",
      description: "Smart contract-based presales with automated token distribution"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Lightning Fast",
      description: "Launch your token presale in minutes, not days"
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Launch Token ",
      description: "Launch your token in a click"
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Cost Effective",
      description: "Low fees and efficient token distribution process"
    }
  ];

  const handleCardHover = (index: number) => {
    if (window.innerWidth <= 768) {
      if (index < benefits.length - 1) {
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
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Pre-X?</h2>
        <p className="text-green-400/70 max-w-2xl mx-auto">
          Experience the future of token launches with our cutting-edge platform
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard 
            key={index} 
            {...benefit} 
            isMobile={false}
          />
        ))}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div 
          ref={sliderRef}
          className="overflow-x-hidden w-full"
        >
          <div className="flex snap-x snap-mandatory">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="w-full flex-none snap-center px-4"
              >
                <BenefitCard 
                  {...benefit}
                  isActive={currentIndex === index}
                  onHover={() => {
                    handleCardHover(index);
                    scrollToCard(currentIndex);
                  }}
                  onTouch={() => {
                    handleCardHover(index);
                    scrollToCard(currentIndex);
                  }}
                  isMobile={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {benefits.map((_, index) => (
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}