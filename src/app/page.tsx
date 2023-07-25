'use client';
import { useState } from 'react';
import Button from '@/components/button';
import Spinner from '@/components/spinner';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // Função para simular um carregamento assíncrono (por exemplo, uma chamada à API)
  const simulateAsyncCall = () => {
    setIsLoading(true);

    // Simulando uma operação assíncrona com setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Aqui, após 2 segundos, simulamos que a operação foi concluída e definimos isLoading para false.
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
        <Button>PRIMARY</Button>
        <Button variant="outline">OUTLINE</Button>
        <Button disabled>DISABLED</Button>
        <Button variant="text">TEXT</Button>
        <Button loading={isLoading} onClick={simulateAsyncCall}>
          TEXT
        </Button>
        ===============
        <Spinner />
      </div>
    </main>
  );
}
