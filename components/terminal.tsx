"use client"

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Terminal() {
  const [text, setText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const terminalTexts = [
    {
      title: "Presale Your Solana Token",
      description: "Create, presale, and launch your Solana SPL token in minutes",
      command: "> Welcome to Pre-X - The Next-Gen Solana SPL Token Platform\n> Initialize your token presale in seconds...\n> $ blink init presale --token \"YOUR_TOKEN\" --amount 1000000"
    },
    {
      title: "Launch Your Solana Token",
      description: "Deploy and launch your token with just a few clicks",
      command: "> Ready to launch your token?\n> Deploying smart contract...\n> $ blink launch --token \"YOUR_TOKEN\" --network mainnet"
    },
    {
      title: "Add Liquidity to Your Token",
      description: "Provide liquidity and enable trading for your token",
      command: "> Adding liquidity pool...\n> Connecting to DEX...\n> $ blink liquidity --token \"YOUR_TOKEN\" --amount 500000 --sol 100"
    },
    {
      title: "Organize TGE Events",
      description: "Set up and manage your Token Generation Event",
      command: "> Initializing TGE setup...\n> Configuring vesting schedule...\n> $ blink tge --token \"YOUR_TOKEN\" --schedule linear --duration 180d"
    },
    {
      title: "Airdrop Tokens in a Click",
      description: "Distribute tokens to multiple wallets efficiently",
      command: "> Loading airdrop addresses...\n> Preparing token distribution...\n> $ blink airdrop --token \"YOUR_TOKEN\" --list addresses.csv"
    }
  ];

  useEffect(() => {
    let index = 0;
    
    const typeText = () => {
      const currentText = terminalTexts[currentTextIndex].command;
      
      const typingInterval = setInterval(() => {
        setText(currentText.slice(0, index));
        index++;
        
        if (index > currentText.length) {
          clearInterval(typingInterval);
          // Wait for 3 seconds before starting the next text
          setTimeout(() => {
            index = 0;
            setCurrentTextIndex((prev) => (prev + 1) % terminalTexts.length);
          }, 3000);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    };

    const typing = typeText();

    return () => {
      if (typing) typing();
    };
  }, [currentTextIndex]);

  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-6 transition-all duration-500">
        {terminalTexts[currentTextIndex].title}
      </h1>
      <p className="text-[#C0C0C0]/70 mb-12 text-lg transition-all duration-500">
        {terminalTexts[currentTextIndex].description}
      </p>
      <Card className="max-w-3xl mx-auto bg-black border-green-900/20 p-6">
        <pre className="font-mono text-left whitespace-pre-wrap">
          <code>{text}</code>
          <span className="animate-pulse">_</span>
        </pre>
      </Card>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg">Create Token</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </div>
  );
}