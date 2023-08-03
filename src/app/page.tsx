'use client';

import Button from '@/components/button';

export default function Home() {
  return (
    <div
      style={{
        gap: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h3>Button</h3>
      <Button>PRIMARY</Button>
      <Button disabled>PRIMARY</Button>
      <Button variant="outline">OUTLINE</Button>
      <Button disabled variant="outline">
        OUTLINE
      </Button>
      <Button variant="text">TEXT</Button>
      <Button size="large">Large Button</Button>
      <Button size="middle">Middle Button</Button>
      <Button size="small">Small Button</Button>

      <h3>Input / TextField</h3>
    </div>
  );
}
