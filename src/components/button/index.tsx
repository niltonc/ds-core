import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';
import Spinner from '../spinner';

type ButtonProps = {
  variant?: 'primary' | 'outline' | 'text' | string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant,
  disabled,
  loading,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button variant={variant} isDisabled={disabled} {...rest}>
      {loading ? <Spinner size="13px" color="#fff" /> : children}
    </S.Button>
  );
};

export default Button;
