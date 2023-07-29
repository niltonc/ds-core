'use client';

import Button from '@/components/button';
import Input from '@/components/input';
import Download from '@/assets/svgs/download.svg';
// import { Galery } from '@/components/galery-01';
import Summer from '@/assets/images/summer.jpg';
import Spring from '@/assets/images/spring.jpg';
import Autumn from '@/assets/images/autumn.jpg';
import Winter from '@/assets/images/winter.jpg';
import { Galery } from '@/components/galery-02';
import ProfileImage from '@/assets/images/profile.jpg';
import Threads from '@/assets/svgs/threads.svg';
import Linkedin from '@/assets/svgs/linkedin.svg';
import Twitter from '@/assets/svgs/twitter.svg';
import Intagram from '@/assets/svgs/instagram.svg';
import { Profile } from '@/components/profile-card';
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
        <Profile.Root>
          <Profile.Image icon={ProfileImage} />
          <Profile.Social>
            <Profile.Icon
              icon={Threads}
              title="Threads"
              href="https://www.threads.net/"
            />
            <Profile.Icon
              icon={Linkedin}
              title="Linkedin"
              href="https://www.threads.net/"
            />
            <Profile.Icon
              icon={Twitter}
              title="Twitter"
              href="https://www.threads.net/"
            />
            <Profile.Icon
              icon={Intagram}
              title="Intagram"
              href="https://www.threads.net/"
            />
          </Profile.Social>
          <Profile.Title title="TITLE" subtitle="Subtitle" />
        </Profile.Root>
      </div>
    </main>
  );
}
