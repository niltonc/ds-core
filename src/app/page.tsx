'use client';

import Button from '@/components/button';
import Input from '@/components/input';
import Download from '@/assets/svgs/download.svg';
import { Galery } from '@/components/galery-01';
import Summer from '@/assets/images/summer.jpg';
import Spring from '@/assets/images/spring.jpg';
import Autumn from '@/assets/images/autumn.jpg';
import Winter from '@/assets/images/winter.jpg';

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
        <Button variant="primary" icon={Download}>
          Primary Button
        </Button>
        <Button variant="primary" disabled>
          Primary Button
        </Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="outline" disabled>
          Outline Button
        </Button>
        <Button variant="text">Primary Button</Button>

        <Button variant="primary" size="small">
          Primary Button
        </Button>
        <Button variant="primary" size="middle">
          Primary Button
        </Button>
        <Button variant="primary" size="large">
          Primary Button
        </Button>
        <div>
          <Input placeholder="User Name" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="User Large" Size="large" />
          <Input placeholder="User Middle" Size="middle" />
          <Input placeholder="User Smal" Size="small" />
        </div>

        <div
          style={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex'
          }}
        >
          <Galery.Root>
            <Galery.Card icon={Summer} />
            <Galery.Card icon={Autumn} />
            <Galery.Card icon={Spring} />
            <Galery.Card icon={Winter} />
          </Galery.Root>
        </div>
      </div>
    </main>
  );
}
