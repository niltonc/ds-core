import styled, { css } from 'styled-components';
import { colors } from '@/styles/colors';
interface ButtonProps {
  variant?: 'primary' | 'outline' | 'text' | string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const defaultButtonProps: ButtonProps = {
  variant: 'primary',
  isDisabled: false
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

Button.defaultProps = defaultButtonProps;
