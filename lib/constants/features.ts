import { Rocket, Lock, Coins, Twitter } from 'lucide-react';

export const PLATFORM_FEATURES = [
  {
    icon: Rocket,
    title: "Token Creation",
    description: "Effortlessly create Solana SPL tokens with ease."
  },
  {
    icon: Lock,
    title: "Presale Management",
    description: "Transparent and secure blockchain-based presale campaigns using blinks."
  },
  {
    icon: Coins,
    title: "Liquidity Provision",
    description: "Add liquidity easily for smooth token trading."
  },
  {
    icon: Twitter,
    title: "Solana Ecosystem",
    description: "Harness Solana's speed for efficient transactions."
  },
  {
    icon: Twitter,
    title: "Presale Blinks",
    description: "Simplify participation with unique, shareable twitter links."
  },
  
  {
    icon: Twitter,
    title: "TGE",
    description: "Organize and manage successful token launches."
  },
  {
    icon: Twitter,
    title: "Airdrop Feature",
    description: "Airdrop tokens to contributors effortlessly with a single click."
  },
  {
    icon: Twitter,
    title: "Real-Time Analytics",
    description: "Track presale performance with detailed insights."
  },
] as const;