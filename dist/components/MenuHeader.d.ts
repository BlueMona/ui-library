import React, { Component } from 'react';
export interface MenuHeaderProps {
    className?: string;
    leftContent?: any;
    caption?: string;
    legend?: any;
    onMouseEnter?: (ev?: React.MouseEvent<HTMLLIElement>) => void;
    onMouseLeave?: (ev?: React.MouseEvent<HTMLLIElement>) => void;
    disabled?: boolean;
    selected?: boolean;
}
export declare class MenuHeader extends Component<MenuHeaderProps> {
    render(): JSX.Element;
}
