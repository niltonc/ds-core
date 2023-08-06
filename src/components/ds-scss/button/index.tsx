import React from 'react';
import { ButtonHTMLProps } from './types';
import styles from './button.module.scss';

const Button: React.FC<ButtonHTMLProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  disabled,
  ...rest
}: ButtonHTMLProps) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${styles[size]}`;

  return (
    <button className={buttonClassName} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
