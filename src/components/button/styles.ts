import styled, { css } from 'styled-components';
import Image from 'next/image';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'text' | string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const colors = {
  white: '#FFF',
  black: '#000',
  cian: '#00FFFF',
  yellow: '#FFFF00',
  gray200: '#808080',
  gray100: '#D3D3D3',
  violet300: '#4B0082',
  violet200: '#8A2BE2',
  violet100: '#B980F0',
  shadow: 'rgba(0, 0, 0, 0.2)'
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  border: none;
  display: flex;
  padding: 12px 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    props.variant === 'primary' &&
    css`
      color: ${colors.white};
      background-color: ${colors.violet200};
      &:active {
        transform: translateY(1px);
        box-shadow: 0 1px 1px ${colors.shadow};
      }
      &:hover {
        background-color: ${colors.violet100};
      }
    `}
  ${(props) =>
    props.variant === 'outline' &&
    css`
      color: ${colors.violet200};
      background-color: ${colors.white};
      border: 1px solid ${colors.violet200};
      &:active {
        transform: translateY(1px);
        box-shadow: 0 1px 1px ${colors.shadow};
      }
      &:hover {
        color: ${colors.violet100};
        border: 1px solid ${colors.violet100};
      }
    `}
    ${(props) =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      background-color: ${colors.gray100};
      color: ${colors.gray200};
      &:active {
        transform: translateY(0px);
        box-shadow: 0 0px 0px ${colors.shadow};
      }
      &:hover {
        background-color: ${colors.gray100};
        color: ${colors.gray200};
      }
    `}
    ${(props) =>
    props.variant === 'text' &&
    css`
      background-color: transparent;
      color: ${colors.violet200};
      &:active {
        transform: translateY(1px);
      }
      &:hover {
        color: ${colors.violet100};
      }
    `}
`;
