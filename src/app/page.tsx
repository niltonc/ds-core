'use client';

import Button from '@/components/ds-scss/button/import_exemples';
import Input from '@/components/ds-scss/input';
import CustomSelect from '@/components/ds-scss/select';

import { Options } from '@/mock/select-mock';

export default function Home() {
  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

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
      <Input variant="middle" placeholder="Middle" />
      <Input variant="small" placeholder="Small" />

      <h3>Select</h3>
      <CustomSelect
        options={Options}
        onSelect={handleSelect}
        placeholder="Selecione uma opção"
      />

      <Button>oi</Button>
      <Button>oi</Button>
      <Button>oi</Button>
      <Button>oi</Button>
      <Button>oi</Button>
      <Button>oi</Button>
      <Button>oi</Button>
      <Button>oi</Button>
      <Button>oi</Button>
      <Button>oi</Button>
    </div>
  );
}
