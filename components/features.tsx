import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PLATFORM_FEATURES } from '@/lib/constants/features';

export function Features() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PLATFORM_FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="bg-black/50 border-green-900/20">
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
    </section>
  );
}