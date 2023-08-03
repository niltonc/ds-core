import React, { ButtonHTMLAttributes } from 'react';
import './_styles.scss';

type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  size?: 'large' | 'middle' | 'small';
};

type ButtonHTMLProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonHTMLProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  ...rest
}: ButtonHTMLProps) => {
  const buttonClassName = `buttonds ${variant} ${size}`;

  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
