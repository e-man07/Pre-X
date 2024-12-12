"use client"

import { useState, useCallback } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

export function useWallet() {
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);
  const [connected, setConnected] = useState(false);

  const connect = useCallback(async () => {
    try {
      if ('solana' in window) {
        const provider = (window as any).solana;
        if (provider?.isPhantom) {
          const response = await provider.connect();
          const pubKey = new PublicKey(response.publicKey.toString());
          setPublicKey(pubKey);
          setConnected(true);
        }
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  }, []);

  const disconnect = useCallback(() => {
    setPublicKey(null);
    setConnected(false);
  }, []);

  return {
    publicKey,
    connected,
    connect,
    disconnect
  };
}