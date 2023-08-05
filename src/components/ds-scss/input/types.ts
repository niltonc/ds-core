import { InputHTMLAttributes } from 'react';

type InputProps = {
  Size?: 'large' | 'middle' | 'small';
  type?: 'text' | 'password';
};

export type InputHTMLProps = InputProps & InputHTMLAttributes<HTMLInputElement>;
