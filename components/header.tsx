"use client"

import { useState } from 'react';
import { Terminal as TerminalIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAVIGATION_LINKS } from '@/lib/constants/navigation';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-green-900/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex gap-2 items-center mr-4">
          <TerminalIcon className="h-6 w-6" />
          <span className="font-bold text-xl">Pre-X</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-green-400 hover:bg-green-400/20"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex gap-6">
            {NAVIGATION_LINKS.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/* <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button> */}
            <Button variant="default">Connect Wallet</Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-green-400/20">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-green-400 hover:bg-green-400/20 rounded-md"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button 
                variant="outline" 
                className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}