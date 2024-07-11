import * as S from "./styles";

interface H2Props {
    children: React.ReactNode;
}

export const H2 = ({children}: H2Props) => {
    return <S.H2>{children}</S.H2> 
}