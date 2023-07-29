import React from 'react';
import './styles.scss';

type AccordionProps = {
  children?: React.ReactNode;
  borderColor?: string;
};

const AccordionRoot: React.FC<AccordionProps> = ({
  children,
  borderColor = 'black'
}: AccordionProps) => {
  const color = ` ${borderColor}`;
  return (
    <div className="faq-container">
      <details style={{ borderColor: color }}>{children}</details>
    </div>
  );
};

export default AccordionRoot;
