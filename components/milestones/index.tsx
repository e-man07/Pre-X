import { MilestoneList } from './milestone-list';
import { Card } from '@/components/ui/card';

export function Milestones() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Platform Milestones</h2>
        <p className="text-green-400/70 max-w-2xl mx-auto">
          Track our journey and upcoming features
        </p>
      </div>
      <Card className="bg-black/50 border-green-900/20 p-8">
        <MilestoneList />
      </Card>
    </section>
  );
}