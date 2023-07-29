import React from 'react';
import Image from 'next/image';
import PlusIcon from '@/assets/svgs/plus.svg';
import './styles.scss';

type AccordionProps = {
  children?: React.ReactNode;
};

const AccordionTitle: React.FC<AccordionProps> = ({
  children
}: AccordionProps) => {
  return (
    <summary>
      <span className="faq-title">{children}</span>
      <Image
        alt=""
        width={20}
        height={20}
        src={PlusIcon}
        className="expand-icon"
      />
    </summary>
  );
};

export default AccordionTitle;
