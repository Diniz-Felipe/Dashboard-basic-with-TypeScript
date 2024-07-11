import * as S from './styles';

interface OneProps {
    children: React.ReactNode;
}

export const CardOne = ({children}: OneProps) => {
  return (
    <S.CardOne>{children}</S.CardOne>
  )
}