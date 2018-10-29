import React, { Component } from 'react';
export interface MenuItemProps {
    className?: string;
    value?: string;
    caption?: string;
    icon?: string;
    customIcon?: string;
    onClick?: (ev?: React.MouseEvent<HTMLLIElement>) => void;
    onMouseEnter?: (ev?: React.MouseEvent<HTMLLIElement>) => void;
    onMouseLeave?: (ev?: React.MouseEvent<HTMLLIElement>) => void;
    disabled?: boolean;
    selected?: boolean;
}
export declare class MenuItem extends Component<MenuItemProps> {
    clickHandler: (ev: React.MouseEvent<HTMLLIElement>) => void;
    render(): JSX.Element;
}
