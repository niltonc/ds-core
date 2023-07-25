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
        <Button>PRIMARY</Button>
        <Button variant="outline">OUTLINE</Button>
        <Button disabled>DISABLED</Button>
        <Button variant="text">TEXT</Button>
      </div>
    </main>
  );
}
