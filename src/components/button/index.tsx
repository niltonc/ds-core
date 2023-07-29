import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
};
type ButtonHTMLProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonHTMLProps> = ({
  variant,
  children,
  ...rest
}: ButtonHTMLProps) => {
  const buttonClassName = `button ${variant}`;
  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
