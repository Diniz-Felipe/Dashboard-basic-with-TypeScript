import { HTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface RootProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onPress: () => void;
};

export const Root = ({children, onPress}: RootProps) => {
    return <S.Button onClick={onPress}>{children}</S.Button>
}