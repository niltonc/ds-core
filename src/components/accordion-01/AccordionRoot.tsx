import React from 'react';
import './styles.scss';

type AccordionProps = {
  children?: React.ReactNode;
};

const AccordionRoot: React.FC<AccordionProps> = ({
  children
}: AccordionProps) => {
  return (
    <div className="faq-container">
      <details>{children}</details>
    </div>
  );
};

export default AccordionRoot;
