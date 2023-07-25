'use client';
import { useState } from 'react';
import Button from '@/components/button';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const simulateAsyncCall = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 400,
          gap: 10
        }}
      >
        <Button>Primary</Button>
        <Button loading={isLoading} onClick={simulateAsyncCall}>
          Primary Loading ...
        </Button>
        <Button disabled>Primary</Button>

        <Button variant="outline">Outline</Button>
        <Button
          variant="outline"
          loading={isLoading}
          onClick={simulateAsyncCall}
        >
          Outline Loading ...
        </Button>
        <Button variant="outline" disabled>
          Outline
        </Button>

        <Button variant="text">Text</Button>
      </div>
    </main>
  );
}