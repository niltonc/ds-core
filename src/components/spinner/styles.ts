import styled from 'styled-components';

interface SpinnerProps {
  size?: string | number;
  color?: string;
}

const defaultSpinnerProps: SpinnerProps = {
  size: '30px',
  color: '#8A2BE2'
};

export const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: 2px solid;
  border-color: ${(props) => props.color};
  border-right-color: transparent;
  animation: rot 1s linear infinite;

  @keyframes rot {
    100% {
      transform: rotate(360deg);
    }
  }
`;

Spinner.defaultProps = defaultSpinnerProps;