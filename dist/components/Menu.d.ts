/// <reference types="react" />
import React from "react";
export interface MenuProps {
    className?: string;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    icon?: string;
    customIcon?: string;
    customButton?: any;
    tooltip?: string;
    tooltipPosition?: "top" | "bottom" | "left" | "right";
    theme?: string;
    onClick?: () => void;
    disabled?: boolean;
}
export declare class Menu extends React.Component<MenuProps> {
    menuActive: boolean;
    menuVisible: boolean;
    style: {
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
    menuButtonRef: any;
    scrollContainer: any;
    hideMenuTimeout: any;
    setMenuButtonRef(ref: HTMLDivElement): void;
    setMenuContentRef(ref: HTMLUListElement): void;
    handleMenuClick(): void;
    handleKeyUp(ev: KeyboardEvent): void;
    hideMenu(): void;
    setStyle(): void;
    render(): JSX.Element | (React.ReactPortal | JSX.Element)[];
}
