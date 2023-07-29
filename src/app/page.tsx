'use client';

import { Accordion } from '@/components/accordion-01';
import AccordionContent from '@/components/accordion-01/AccordionContent';
import SocialMediaIcons from '@/components/social-media-tooltip';
import Facebook from '@/assets/svgs/facebook-color.svg';
import Twitter from '@/assets/svgs/twitter-color.svg';
import Instagram from '@/assets/svgs/instagram-black.svg';
import Github from '@/assets/svgs/github-color.svg';
import Youtube from '@/assets/svgs/youtube-color.svg';

// 'facebook' | 'twitter' | 'instagram' | 'github' | 'youtube';
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
        <Accordion.Root>
          <Accordion.Title>Title do Accordion</Accordion.Title>
          <AccordionContent>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações para testar e ajustar aspectos
            visuais antes de utilizar conteúdo real.
          </AccordionContent>
        </Accordion.Root>
        <div>
          <SocialMediaIcons icon={Facebook} type="facebook">
            Facebook
          </SocialMediaIcons>
          <SocialMediaIcons icon={Twitter} type="github">
            Twitter
          </SocialMediaIcons>
        </div>
      </div>
    </main>
  );
}
