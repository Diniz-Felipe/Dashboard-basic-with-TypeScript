import * as S from "./styles";

interface SpanProps {
    children: React.ReactNode;
}

export const Span = ({children}: SpanProps) => {
    return <S.Span>{children}</S.Span> 
}