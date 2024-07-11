import { ReactNode } from 'react';
import * as S from './styles';

interface BoxProps {
    children: ReactNode;
};

export const Box = ({ children }: BoxProps) => {
    return <S.Box>{children}</S.Box>
}