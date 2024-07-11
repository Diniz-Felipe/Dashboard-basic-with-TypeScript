import { ReactNode } from 'react';
import * as S from './styles';

interface RootProps {
    children: ReactNode;
}

export const Root = ({children}: RootProps) => {
    return (
        <S.Container>{children}</S.Container>
    )
}