import * as S from "./styles";

interface PProps {
    children: React.ReactNode;
}

export const P = ({children}: PProps) => {
    return <S.P>{children}</S.P> 
}
