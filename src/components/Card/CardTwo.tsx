import * as S from './styles';

interface TwoProps {
  children: React.ReactNode;
}

export const CardTwo = ({children}: TwoProps) => {
  return (
    <S.CardTwo>{children}</S.CardTwo>
  )
}