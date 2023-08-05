import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  size?: 'large' | 'middle' | 'small';
};

export type ButtonHTMLProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
