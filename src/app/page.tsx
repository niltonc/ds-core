'use client';

import Image from 'next/image';
import Input from '@/components/input';
import Button from '@/components/button';
import { Galery } from '@/components/galery-01';
import { GaleryCard } from '@/components/galery-02';
import IconTooltip from '@/components/icon-tooltip';
import { Profile } from '@/components/profile-card';
import { Accordion } from '@/components/accordion-01';
//.jpg
import Summer from '@/assets/images/summer.jpg';
import Spring from '@/assets/images/spring.jpg';
import Winter from '@/assets/images/winter.jpg';
import Autumn from '@/assets/images/autumn.jpg';
import ProfileIcon from '@/assets/images/profile.jpg';
//.svg
import Facebook from '@/assets/svgs/facebook-color.svg';
import Twitter from '@/assets/svgs/twitter-color.svg';
import Instagram from '@/assets/svgs/instagram-black.svg';
import Github from '@/assets/svgs/github-color.svg';
import Youtube from '@/assets/svgs/youtube-color.svg';

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
      {/* GALERY TYPE*/}
      <h4>GALERY</h4>
      <div
        style={{
          gap: 10,
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 20
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
      <h4>PROFILE CARD / SOCIAL MEDIA TOOLTIP</h4>
      <div
        style={{
          gap: 10,
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 20,
          padding: '20px 80px 20px 80px'
        }}
      >
        <Profile.Root size={250}>
          <Profile.Image>
            <Image src={ProfileIcon} width={300} height={300} alt="" />
          </Profile.Image>
          <Profile.Container>
            <Profile.Icon icon={Twitter} title="Twitter" href="" />
            <Profile.Icon icon={Github} title="Github" href="" />
            <Profile.Icon icon={Youtube} title="Youtube" href="" />
            <Profile.Icon icon={Facebook} title="Facebook" href="" />
          </Profile.Container>
          <Profile.Title title="Profile Title" color="#333">
            Profile Title
          </Profile.Title>
        </Profile.Root>

        <IconTooltip tooltip="Facebook" type="facebook">
          <Image src={Facebook} width={20} height={20} alt="" />
        </IconTooltip>
        <IconTooltip tooltip="Twitter" type="twitter">
          <Image src={Twitter} width={20} height={20} alt="" />
        </IconTooltip>
        <IconTooltip tooltip="Instagram" type="instagram">
          <Image src={Instagram} width={20} height={20} alt="" />
        </IconTooltip>
        <IconTooltip tooltip="Github">
          <Image src={Github} width={20} height={20} alt="" />
        </IconTooltip>
        <IconTooltip tooltip="Youtube" type="youtube">
          <Image src={Youtube} width={20} height={20} alt="" />
        </IconTooltip>
      </div>
    </main>
  );
}
