import { FooterLinks } from './footer-links';
import { FooterNewsletter } from './footer-newsletter';
import { FooterSocial } from './footer-social';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-black/90 border-t border-green-900/20">
      <div className="container mx-auto p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterLinks />
          <FooterNewsletter />
          <FooterSocial />
        </div>
        <Separator className="my-8 bg-green-900/20" />
        <div className="text-center text-[#C0C0C0]/70 text-sm">
          © {new Date().getFullYear()} Pre-X. All rights reserved.
        </div>
      </div>
    </footer>
  );
}