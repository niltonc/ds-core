import React, { InputHTMLAttributes, useState } from 'react';
import EyeClosed from './assets/eye-closed.svg';
import EyeOpen from './assets/eye-open.svg';
import Image from 'next/image';
import { InputWrapper, InputField, EyeIcon, Exception, Text } from './styles';
type InputProps = {
  type?: any;
  placeholder?: any;
  label?: any;
  width?: any;
  height?: any;
  fontSize?: any;
  error?: any;
  disabled?: any;
  style?: any;
  exception?: any;
  onChange?: () => void;
  onKeyDown?: () => void;
  value?: any;
} & InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<InputProps> = ({
  type = '',
  width,
  style,
  label,
  error,
  disabled,
  placeholder,
  height,
  fontSize,
  onKeyDown,
  onChange,
  value
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <InputWrapper width={width} style={{ ...style }}>
      {label && <Text>{label}</Text>}
      <InputField
        error={error}
        disabled={disabled}
        type={isPasswordVisible ? 'text' : type}
        placeholder={placeholder}
        height={height}
        fontSize={fontSize}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
      {type === 'password' && (
        <EyeIcon onClick={togglePasswordVisibility}>
          {isPasswordVisible ? (
            <Image src={EyeClosed} width={24} height={24} alt="invisible" />
          ) : (
            <Image src={EyeOpen} width={24} height={24} alt="visible" />
          )}
        </EyeIcon>
      )}
    </InputWrapper>
  );
};

export default Input;
