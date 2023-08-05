import Image from 'next/image';
import React, { useState } from 'react';
import { InputHTMLProps } from './types';
import EyeClosed from '@/assets/svgs/eye-closed.svg';
import EyeOpen from '@/assets/svgs/eye-open.svg';
import './_input.scss';

export const Input: React.FC<InputHTMLProps> = ({
  Size = 'large',
  type = 'text',
  ...rest
}: InputHTMLProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const containerClassName = `container ${Size}`;
  return (
    <div className={containerClassName}>
      <input
        className="input"
        type={isPasswordVisible ? 'text' : type}
        {...rest}
      />
      <div className="icon" onClick={togglePasswordVisibility}>
        {type === 'password' && (
          <>
            {isPasswordVisible ? (
              <Image src={EyeClosed} width={24} height={24} alt="invisible" />
            ) : (
              <Image src={EyeOpen} width={24} height={24} alt="visible" />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
