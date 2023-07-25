import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

type ButtonProps = {
  variant?: 'primary' | 'outline' | 'text';
  children?: ReactNode;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  loading = false,
  ...rest
}: ButtonProps) => {
  return (
    <>
      {variant === 'primary' && (
        <S.ButtonPrimary {...rest}>
          {loading ? <S.Loading size="12" color="#FFF" /> : children}
        </S.ButtonPrimary>
      )}
      {variant === 'outline' && (
        <S.ButtonOutline {...rest}>
          {loading ? <S.Loading size="12" /> : children}
        </S.ButtonOutline>
      )}
      {variant === 'text' && <S.ButtonText {...rest}>{children}</S.ButtonText>}
    </>
  );
};

export default Button;
