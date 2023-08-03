'use client';

import Button from '@/components/ds-scss/button';
import Input from '@/components/ds-scss/input';
import Select from '@/components/ds-scss/select';

export default function Home() {
  return (
    <div
      style={{
        gap: 5,
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
      <Input placeholder="Basic Input / large" />
      <Input placeholder="Password Input" type="password" />
      <Input Size="middle" placeholder="Middle" />
      <Input Size="small" placeholder="Small" />

      <h3>Select</h3>
      <Select />
    </div>
  );
}
