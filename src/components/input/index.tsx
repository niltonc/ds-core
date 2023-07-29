import { InputHTMLAttributes, useState } from 'react';
import Image from 'next/image';
import './styles.scss';

import EyeClosed from '@/assets/eye-closed.svg';
import EyeOpen from '@/assets/eye-open.svg';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ type, ...rest }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="container">
      <input
        className={'input'}
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
