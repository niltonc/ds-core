import React, { ButtonHTMLAttributes } from 'react';
import './styles.scss';

type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  size?: 'large' | 'middle' | 'small';
  icon?: any;
};
type ButtonHTMLProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonHTMLProps> = ({
  children,
  variant = 'primary',
  size = 'small',
  icon,
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
