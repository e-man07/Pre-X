import { Check, Clock } from 'lucide-react';

const milestones = [
  {
    date: "Q1 2025",
    title: "Platform Launch",
    description: "Initial release with core token creation and presale features",
    completed: true
  },
  {
    date: "Q1 2025",
    title: "Liquidity Provision",
    description: "Introducting Adding Liquidity Pool to Freshly Created Tokens Feature",
    completed: true
  },
  {
    date: "Q1 2025",
    title: "TGE Feature Release",
    description: "Token Creators Can Organize TGE",
    completed: false
  },
  {
    date: "Q1 2025",
    title: "Cross-chain Integration",
    description: "Support for multiple blockchain networks",
    completed: false
  }
];

export function MilestoneList() {
  return (
    <div className="space-y-8">
      {milestones.map((milestone, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="mt-1">
            {milestone.completed ? (
              <Check className="h-6 w-6 text-green-400" />
            ) : (
              <Clock className="h-6 w-6 text-green-400/50" />
            )}
          </div>
          <div>
            <div className="text-sm text-[#00FFFF]/70 mb-1">{milestone.date}</div>
            <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
            <p className="text-[#C0C0C0]/70">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}