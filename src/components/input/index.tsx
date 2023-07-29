import { InputHTMLAttributes, useState } from 'react';
import Image from 'next/image';
import './styles.scss';

import EyeClosed from '@/assets/svgs/eye-closed.svg';
import EyeOpen from '@/assets/svgs/eye-open.svg';

type InputProps = {
  Size?: 'large' | 'middle' | 'small';
  type?: string; // Explicitly specify the type for 'type' prop
};

type InputHTMLProps = InputProps & InputHTMLAttributes<HTMLInputElement>;
export const Input: React.FC<InputHTMLProps> = ({
  Size = 'small',
  type,
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
