"use client"

import { useRef, useState } from 'react';
import { TestimonialCard } from './testimonial-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "DeFi Project Founder",
      content: "Pre-X made our token launch process incredibly smooth. The automated presale feature saved us countless hours.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      content: "The best platform for token presales I've used. The interface is intuitive and the process is completely transparent.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Roberts",
      role: "Blockchain Developer",
      content: "Outstanding platform with robust features. The technical implementation is top-notch.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  const handleCardHover = (index: number) => {
    if (window.innerWidth <= 768) {
      if (index < testimonials.length - 1) {
        setCurrentIndex(index + 1);
      } else {
        setCurrentIndex(0);
      }
      scrollToCard(currentIndex);
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
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-green-400/70 max-w-2xl mx-auto">
          Join thousands of satisfied users who have launched their tokens with Pre-X
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div 
          ref={sliderRef}
          className="overflow-x-hidden w-full"
        >
          <div className="flex snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full flex-none snap-center px-4"
              >
                <div 
                  className="max-w-[300px] mx-auto"
                  onMouseEnter={() => handleCardHover(index)}
                  onTouchStart={() => handleCardHover(index)}
                >
                  <TestimonialCard 
                    {...testimonial}
                    isActive={currentIndex === index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, index) => (
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