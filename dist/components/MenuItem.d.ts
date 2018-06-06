import React from "react";
export interface MenuItemProps {
    className?: string;
    value: string;
    caption?: string;
    icon?: string;
    customIcon?: string;
    onClick: (ev: React.MouseEvent<HTMLLIElement>) => void;
    disabled?: boolean;
    selected?: boolean;
}
export declare class MenuItem extends React.Component<MenuItemProps> {
    clickHandler: (ev: React.MouseEvent<HTMLLIElement>) => void;
    render(): JSX.Element;
}
