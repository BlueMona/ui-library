import React, { Component } from 'react';
export interface ListItemProps {
    className?: string;
    disabled?: boolean;
    caption?: any;
    legend?: any;
    leftContent?: any;
    leftIcon?: string;
    rightContent?: any;
    rightIcon?: string;
    onClick?: (ev?: React.MouseEvent<HTMLLIElement>) => void;
}
export declare class ListItem extends Component<ListItemProps> {
    render(): JSX.Element;
}
