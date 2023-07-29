import React from 'react';
import Image from 'next/image';
import PlusIcon from '@/assets/svgs/plus.svg';
import './styles.scss';

type AccordionProps = {
  children?: React.ReactNode;
  color?: string;
};

const AccordionTitle: React.FC<AccordionProps> = ({
  children,
  color = 'black'
}: AccordionProps) => {
  const colors = ` ${color}`;
  return (
    <summary>
      <span className="faq-title" style={{ color: colors }}>
        {children}
      </span>
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
