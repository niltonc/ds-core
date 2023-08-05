import React from 'react';
import { ButtonHTMLProps } from './types';
// import './button.module.scss';
import styles from './button.module.scss';

const Button: React.FC<ButtonHTMLProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  disabled,
  ...rest
}: ButtonHTMLProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
