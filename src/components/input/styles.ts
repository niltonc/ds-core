import styled from 'styled-components';
import { colors } from '@/styles/colors';

export const Input = styled.input`
  display: flex;
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${colors.gray100};
  ::placeholder {
    color: ${colors.gray100};
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(5, 145, 255, 0.1);
    border-inline-end-width: 1px;
    outline: 0;
    border: 1px solid ${colors.violet200};
  }
`;
export const EyeIcon = styled.div`
  top: 72%;
  right: 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
