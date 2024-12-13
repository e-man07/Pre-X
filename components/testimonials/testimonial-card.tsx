"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  isActive?: boolean;
}

export function TestimonialCard({ 
  name, 
  role, 
  content, 
  avatar,
  isActive = false 
}: TestimonialCardProps) {
  return (
    <Card className={`
      bg-black/50 border-green-900/20 h-full
      transition-all duration-500
      ${isActive ? 'scale-105 border-green-400/30 shadow-lg shadow-green-400/20' : 'scale-100'}
    `}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className={`
              font-semibold
              transition-colors duration-500
              ${isActive ? 'text-green-400' : ''}
            `}>
              {name}
            </h4>
            <p className="text-sm text-[#00FFFF]/70">{role}</p>
          </div>
        </div>
        <p className="text-[#C0C0C0]/70">{content}</p>
      </CardContent>
    </Card>
  );
}