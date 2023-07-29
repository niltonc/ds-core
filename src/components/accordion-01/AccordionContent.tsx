import React from 'react';
import './styles.scss';

type AccordionProps = {
  children?: React.ReactNode;
  color?: string;
};

const AccordionContent: React.FC<AccordionProps> = ({
  children,
  color = 'grey'
}: AccordionProps) => {
  const colors = ` ${color}`;
  return (
    <div className="faq-content" style={{ color: colors }}>
      {children}
    </div>
  );
};

export default AccordionContent;
