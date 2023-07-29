import React from 'react';
import './styles.scss';

type AccordionProps = {
  children?: React.ReactNode;
};

const AccordionContent: React.FC<AccordionProps> = ({
  children
}: AccordionProps) => {
  return <div className="faq-content">{children}</div>;
};

export default AccordionContent;
