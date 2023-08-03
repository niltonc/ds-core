'use client';

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
import Button from '@/components/button';

export default function Home() {
  return (
    <main style={{ gap: 10 }}>
      <Button>PRIMARY</Button>
      <Button disabled>PRIMARY</Button>
      <Button variant="outline">OUTLINE</Button>
      <Button disabled variant="outline">
        OUTLINE
      </Button>
      <Button variant="text">TEXT</Button>
    </main>
  );
}
