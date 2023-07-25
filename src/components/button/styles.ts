import styled from 'styled-components';
import { colors } from '@/styles/colors';
import Spinner from '@/components/spinner';

export const Button = styled.button`
  width: 100%;
  border: none;
  display: flex;
  padding: 12px 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.4s;
`;
export const ButtonPrimary = styled(Button)`
  color: ${colors.white};
  background-color: ${colors.violet200};
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 1px ${colors.shadow};
  }
  &:hover {
    transition-duration: 0.1s;
    background-color: ${colors.violet300};
  }
  &:disabled {
    color: ${colors.gray200};
    background-color: ${colors.gray100};
    cursor: not-allowed;
    &:active {
      transform: translateY(0px);
      box-shadow: 0 0px 0px ${colors.shadow};
    }
  }
`;
export const ButtonOutline = styled(Button)`
  color: ${colors.violet200};
  background-color: ${colors.white};
  border: 1px solid ${colors.violet200};
  cursor: not-allowed;
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 1px ${colors.shadow};
  }
  &:hover {
    color: ${colors.violet300};
    transition-duration: 0.1s;
    border: 1px solid ${colors.violet300};
  }
  &:disabled {
    color: ${colors.gray200};
    background-color: ${colors.white};
    border: 1px solid ${colors.gray200};
    &:active {
      transform: translateY(0px);
      box-shadow: 0 0px 0px ${colors.shadow};
    }
  }
`;
export const ButtonText = styled(Button)`
  background-color: transparent;
  color: ${colors.violet200};
  &:active {
    transform: translateY(1px);
  }
  &:hover {
    transition-duration: 0.1s;
    color: ${colors.violet300};
  }
`;
export const Loading = styled(Spinner)``;
