import React, { Component } from 'react';
export interface MenuProps {
    className?: string;
    innerClassName?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    icon?: string;
    customIcon?: string;
    customButton?: any;
    tooltip?: string;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
    theme?: string;
    onClick?: (ev?: React.MouseEvent<HTMLDivElement>) => void;
    onHide?: () => void;
    disabled?: boolean;
}
export declare class Menu extends Component<MenuProps> {
    menuActive: boolean;
    menuVisible: boolean;
    style: React.CSSProperties;
    menuButtonRef: any;
    scrollContainer: any;
    hideMenuTimeout: any;
    setMenuButtonRef(ref: HTMLDivElement): void;
    setMenuContentRef(ref: HTMLUListElement): void;
    handleMenuClick(): void;
    handleKeyUp(ev: KeyboardEvent): void;
    hideMenu(): void;
    setStyle(): void;
    render(): JSX.Element | JSX.Element[];
}
