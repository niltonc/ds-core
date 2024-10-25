import { InputHTMLAttributes } from 'react';

type InputProps = {
  variant?: 'large' | 'middle' | 'small';
  type?: 'text' | 'password';
};

export type InputHTMLProps = InputProps & InputHTMLAttributes<HTMLInputElement>;
