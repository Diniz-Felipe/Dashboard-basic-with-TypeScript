import { ReactNode } from 'react';
import * as S from './styles';

interface WrapperProps {
    children: ReactNode
}

export const Wrapper = ({children}: WrapperProps) => {
    return <S.Wrapper>{children}</S.Wrapper>
}