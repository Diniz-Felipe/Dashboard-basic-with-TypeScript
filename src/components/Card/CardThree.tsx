import * as S from './styles'

interface ThreeProps {
    children: React.ReactNode;
}

export const CardThree = ({children}: ThreeProps) => {
  return (
    <S.CardThree>{children}</S.CardThree>
  )
}