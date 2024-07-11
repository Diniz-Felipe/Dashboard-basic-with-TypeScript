import { ReactNode } from "react";
import * as S from "./styles";

interface ContentProps {
    children: ReactNode
}

export const Content = ({children}: ContentProps) => {
    return <S.Content>{children}</S.Content> 
}