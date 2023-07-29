'use client';

import Button from '@/components/button';

export default function Home() {
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
        <Button variant="primary">Primary Button</Button>
        <Button variant="primary" disabled>
          Primary Button
        </Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="outline" disabled>
          Outline Button
        </Button>
        <Button variant="text">Primary Button</Button>
      </div>
    </main>
  );
}
