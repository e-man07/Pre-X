"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I create a token on Blink?",
    answer: "Creating a token on Blink is simple. Connect your wallet, click 'Create Token', fill in the token details (name, symbol, supply), and follow the guided process. The platform will handle the smart contract deployment automatically."
  },
  {
    question: "What are the fees for using Blink?",
    answer: "Blink charges a small platform fee of 1% on successful presales. There are no upfront fees for token creation. Network fees (gas) apply for blockchain transactions."
  },
  {
    question: "How does the presale process work?",
    answer: "After creating your token, you can set up a presale by defining parameters like price, soft/hard caps, and duration. Once launched, participants can contribute SOL and automatically receive tokens when the presale ends."
  },
  {
    question: "Is Blink secure?",
    answer: "Yes, Blink prioritizes security. Our smart contracts are audited, and the platform uses automated processes to ensure safe token distribution. All transactions are transparent and verifiable on the Solana blockchain."
  }
];

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-white">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-[#C0C0C0]/70">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}