import { ReactNode } from "react";
import * as S from "./styles";

interface RootProps {
    children: ReactNode;
    onPress: () => void;
};

export const Root = ({ children, onPress }: RootProps) => {
    return <S.ListItem onClick={onPress}>{children}</S.ListItem>
};