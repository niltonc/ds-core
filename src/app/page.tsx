'use client';

import { Accordion } from '@/components/accordion-01';
import AccordionContent from '@/components/accordion-01/AccordionContent';

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
      </div>
    </main>
  );
}
