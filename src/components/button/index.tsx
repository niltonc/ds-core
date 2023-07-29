import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  const buttonClassName = `button ${variant}`;
  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
