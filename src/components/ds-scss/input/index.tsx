import Image from 'next/image';
import React, { useState } from 'react';
import { InputHTMLProps } from './types';
import EyeClosed from '@/assets/svgs/eye-closed.svg';
import EyeOpen from '@/assets/svgs/eye-open.svg';
import styles from './input.module.scss';

export const Input: React.FC<InputHTMLProps> = ({
  variant = 'large',
  type = 'text',
  ...rest
}: InputHTMLProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={`${styles.container} ${styles[variant]}`}>
      <input
        className={`${styles.input}`}
        type={isPasswordVisible ? 'text' : type}
        {...rest}
      />
      <div className={`${styles.icon}`} onClick={togglePasswordVisibility}>
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
