import React from 'react';

import styled, { keyframes } from 'styled-components';

interface SpinnerStyleProps {
  size?: number;
  bg?: string;
  color?: string;
  border?: number;
}
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerS = styled.div<SpinnerStyleProps>`
  border-width: ${({ border }) => border || 3}px;
  border-style: solid;
  border-color: ${({ bg }) => bg || 'gray'};
  border-top-width: ${({ border }) => border || 3}px;
  border-top-style: solid;
  border-top-color: ${({ color }) => color || '#3498db'};
  border-radius: 50%;
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  animation: ${spin} 1s linear infinite;
`;

interface SpinnerProps {
  size?: number;
  bg?: string;
  color?: string;
  border?: number;
}
const Spinner: React.FC<SpinnerProps> = ({
  bg = '',
  size = 20,
  color = '',
  border = 3
}) => {
  return <SpinnerS size={size} bg={bg} color={color} border={border} />;
};

export default Spinner;
