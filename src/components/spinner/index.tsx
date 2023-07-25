import * as S from './styles';

type SpinnerProps = {
  size?: string | number;
  color?: string;
};
const Spinner = ({ size, color }: SpinnerProps) => {
  return <S.Spinner size={size} color={color} />;
};
export default Spinner;
