import * as S from './styles'

interface FourProps {
    children: React.ReactNode;
}

export const CardFour = ({ children }:FourProps) => {
  return (
    <S.CardFour>{children}</S.CardFour>
  )
}
