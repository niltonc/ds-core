import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';
import EyeClosed from './assets/eye-closed.svg';
import EyeOpen from './assets/eye-open.svg';
import Image from 'next/image';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<InputProps> = ({ type = '', ...rest }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <>
      {type === '' && <S.Input {...rest} />}
      {type === 'number' && <S.Input type="number" {...rest} />}
      {type === 'password' && (
        <>
          <S.Input type={isPasswordVisible ? 'text' : type} {...rest}></S.Input>
          <S.EyeIcon onClick={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <Image src={EyeClosed} width={24} height={24} alt="invisible" />
            ) : (
              <Image src={EyeOpen} width={24} height={24} alt="visible" />
            )}
          </S.EyeIcon>
        </>
      )}
    </>
  );
};

export default Input;
