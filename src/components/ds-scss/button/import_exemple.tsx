import React from 'react';
import { ButtonHTMLProps } from './types';
import './button.module.scss';

const Button: React.FC<ButtonHTMLProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  ...rest
}: ButtonHTMLProps) => {
  const buttonClassName = `button ${variant} ${size}`;

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
