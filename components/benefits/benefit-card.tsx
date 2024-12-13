"use client"

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

export function BenefitCard({ 
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