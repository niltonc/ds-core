'use client';

import Button from '@/components/button';
import Input from '@/components/input';

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
        <div style={{ width: 200 }}>
          <Input placeholder="User Name" />
          <Input placeholder="Password" type="password" />
        </div>
      </div>
    </main>
  );
}
