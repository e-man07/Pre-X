import { Shield, Zap, Clock, DollarSign } from 'lucide-react';
import { BenefitCard } from './benefit-card';

export function Benefits() {
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
      title: "24/7 Trading",
      description: "Automated market making ensures constant liquidity"
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Cost Effective",
      description: "Low fees and efficient token distribution process"
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Blink?</h2>
        <p className="text-green-400/70 max-w-2xl mx-auto">
          Experience the future of token launches with our cutting-edge platform
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
}