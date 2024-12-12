import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function HowItWorks() {
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

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="bg-black/50 border-green-900/20">
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
    </section>
  );
}