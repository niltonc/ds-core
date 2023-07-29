'use client';

import { Accordion } from '@/components/accordion-01';
import Button from '@/components/button';
import Input from '@/components/input';
import { GaleryCard } from '@/components/galery-02';

import Summer from '@/assets/images/summer.jpg';
import Spring from '@/assets/images/spring.jpg';
import Winter from '@/assets/images/winter.jpg';
import Autumn from '@/assets/images/autumn.jpg';

import Facebook from '@/assets/svgs/facebook-color.svg';
import Twitter from '@/assets/svgs/twitter-color.svg';
import Instagram from '@/assets/svgs/instagram-black.svg';
import Github from '@/assets/svgs/github-color.svg';
import Youtube from '@/assets/svgs/youtube-color.svg';
import { Galery } from '@/components/galery-01';

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
        <h4>BUTTONS</h4>
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
        <h4>INPUT</h4>
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
      {/* ACCORDION */}
      <div
        style={{
          display: 'flex',
          marginTop: 20,
          gap: 15,
          flexDirection: 'column'
        }}
      >
        <h4>ACCORDION</h4>
        <Accordion.Root borderColor="#4b0082">
          <Accordion.Title color="#4b0082">Accordion Title</Accordion.Title>
          <Accordion.Content color="#808080">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Content>
        </Accordion.Root>

        <Accordion.Root>
          <Accordion.Title>Accordion Title</Accordion.Title>
          <Accordion.Content>NILTON</Accordion.Content>
        </Accordion.Root>
      </div>{' '}
      <h4>GALERY</h4>
      {/* GALERY TYPE*/}
      <div
        style={{
          gap: 10,
          display: 'flex',
          justifyContent: 'center',
          marginTop: 20,
          background: 'yellow'
        }}
      >
        <GaleryCard.Root>
          <GaleryCard.Card icon={Winter} />
          <GaleryCard.Card icon={Summer} />
          <GaleryCard.Card icon={Spring} />
          <GaleryCard.Card icon={Autumn} />
        </GaleryCard.Root>

        <Galery.Root>
          <Galery.Card icon={Winter} size={200} />
          <Galery.Card icon={Summer} size={200} />
          <Galery.Card icon={Spring} size={200} />
          <Galery.Card icon={Autumn} size={200} />
        </Galery.Root>
      </div>
    </main>
  );
}
