import * as S from "./styles";

interface H1Props {
    children: React.ReactNode;
}

export const H1 = ({children}: H1Props) => {
    return <S.H1>{children}</S.H1> 
}