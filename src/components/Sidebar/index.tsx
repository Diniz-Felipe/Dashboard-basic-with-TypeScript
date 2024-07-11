import React from 'react';

import * as S from './styles';
import { Text } from '../Text';
import { ListItem } from '../ListItem';
import { Icon } from '../Button/Icon';
import * as IonIcons from 'react-icons/io5';

interface DataRenderItemProps {
    name?: string;
    icon?: keyof typeof IonIcons;
    action?: () => '';
}

const RenderItemSidebar = ({ action, name, icon }: DataRenderItemProps) => (
    <ListItem.Root onPress={action}>
        <Icon name={icon} size={23} color='#eee' />
        <Text.P>{name}</Text.P>
    </ListItem.Root>
)

export const Sidebar: React.FC = () => {
    return (
        <S.Sidebar>
            <Text.Span>DealDeck</Text.Span>
            <Text.P>Menu</Text.P>
            <RenderItemSidebar name='Dashboard' icon='IoHomeOutline' action={() => ''} />
            <RenderItemSidebar name='Report' icon='IoTodayOutline' />
            <RenderItemSidebar name='Products' />
            <RenderItemSidebar name='Consumer' icon='IoPersonOutline' />
            
            <Text.P>Financial</Text.P>
            <RenderItemSidebar name='Transactions' icon='IoApps' />
            <RenderItemSidebar name='Invoices' />

            <Text.P>Tools</Text.P>
            <RenderItemSidebar name='Settings' icon='IoSettingsOutline' />
            <RenderItemSidebar name='Feedback' icon='IoCafeOutline' />
            <RenderItemSidebar name='Help' icon='IoHelpCircleOutline' />
        </S.Sidebar>
    );
};