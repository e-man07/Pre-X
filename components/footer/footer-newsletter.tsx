"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function FooterNewsletter() {
  return (
    <div>
      <h3 className="font-semibold mb-4">Stay Updated</h3>
      <p className="text-green-400/70 mb-4">
        Subscribe to our newsletter for the latest updates and features.
      </p>
      <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-black/50 border-green-900/20"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
}