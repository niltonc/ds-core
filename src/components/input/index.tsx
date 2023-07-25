import React, { InputHTMLAttributes, useRef, useState } from 'react';
import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;
export const Input: React.FC<InputProps> = ({
  type = '',
  ...rest
}: InputProps) => {
  return (
    <>
      {type === '' && <S.Input {...rest} />}
      {type === 'number' && <S.Input type="number" {...rest} />}
      {type === 'password' && <S.Input type={type} {...rest} />}
    </>
  );
};
