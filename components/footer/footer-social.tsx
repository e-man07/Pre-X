import { Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FooterSocial() {
  return (
    <div>
      <h3 className="font-semibold mb-4">Connect With Us</h3>
      <div className="flex gap-4">
        <Button variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Github className="h-4 w-4" />
        </Button>
        {/* <Button variant="outline" size="icon">
          <Discord className="h-4 w-4" />
        </Button> */}
      </div>
    </div>
  );
}