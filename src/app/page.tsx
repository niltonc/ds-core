'use client';

import { Accordion } from '@/components/accordion-01';
import AccordionContent from '@/components/accordion-01/AccordionContent';
import SocialMediaIcons from '@/components/social-media-tooltip';
import Facebook from '@/assets/svgs/facebook-color.svg';
import Twitter from '@/assets/svgs/twitter-color.svg';
import Instagram from '@/assets/svgs/instagram-black.svg';
import Github from '@/assets/svgs/github-color.svg';
import Youtube from '@/assets/svgs/youtube-color.svg';
import Button from '@/components/button';
import Input from '@/components/input';
import { Galery } from '@/components/galery-01';

import Summer from '@/assets/images/autumn.jpg';
import Spring from '@/assets/images/spring.jpg';
import Winter from '@/assets/images/winter.jpg';
import Autumn from '@/assets/images/autumn.jpg';

export default function Home() {
  return (
    <main>
      {/* BUTTON TYPE*/}
      <div
        style={{
          gap: 10,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Button>Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button disabled>Primary</Button>
        <Button disabled variant="outline">
          Outline
        </Button>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button size="small">SMALL</Button>
          <Button size="small" variant="outline">
            SMALL
          </Button>
          <Button disabled size="small">
            SMALL
          </Button>
          <Button variant="outline" disabled size="small">
            SMALL
          </Button>
          <Button variant="text">Text</Button>
        </div>
      </div>

      {/* INPUT TYPE*/}
      <div
        style={{
          gap: 10,
          display: 'flex',
          flexDirection: 'column',
          marginTop: 20
        }}
      >
        <Input placeholder="Basic Input" />
        <Input placeholder="Basic Input" disabled />
        <Input type="password" placeholder="Password" />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Input placeholder="Basic Input" Size="small" />
          <Input
            placeholder="Basic Input"
            Size="small"
            disabled
            value="TESTE DO ELLIPSSELLIPSSELLIPSSELLIPSSELLIPSS"
          />
          <Input placeholder="Basic Input" Size="small" type="password" />
        </div>
      </div>

      {/* GALERY TYPE*/}
      <div
        style={{
          gap: 10,
          display: 'flex',
          justifyContent: 'center',
          background: 'yellow',
          marginTop: 20
        }}
      >
        <Galery.Root>
          <Galery.Card icon={Summer} />
          <Galery.Card icon={Winter} />
          <Galery.Card icon={Spring} />
          <Galery.Card icon={Autumn} />
        </Galery.Root>
      </div>
    </main>
  );
}
