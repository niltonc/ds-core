import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

type ButtonProps = {
  variant?: 'primary' | 'outline' | 'text' | string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant, disabled, loading }: ButtonProps) => {
  return (
    <S.Button variant={variant} isDisabled={disabled}>
      {children}
    </S.Button>
  );
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false
};

export default Button;
