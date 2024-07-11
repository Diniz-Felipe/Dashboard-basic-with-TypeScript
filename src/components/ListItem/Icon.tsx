import { IconType } from 'react-icons';
import * as IonIcons from 'react-icons/io5';

interface IconProps {
    name: keyof typeof IonIcons;
    color: string;
    size: number;
}

export const Icon = ({ name, color, size }: IconProps & IconType) => {
    const IconComponent = IonIcons[name];

    if (!IconComponent) {
        return null; // Ou algum fallback se o ícone não for encontrado
    }

    return <IconComponent color={color} size={size} />;
};