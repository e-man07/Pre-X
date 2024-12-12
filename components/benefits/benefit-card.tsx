import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="bg-black/50 border-green-900/20 hover:border-green-400/50 transition-colors">
      <CardHeader>
        <div className="text-[#00FFFF]/70 mb-4">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#C0C0C0]/70">{description}</p>
      </CardContent>
    </Card>
  );
}