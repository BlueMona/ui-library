import React from "react";
export interface CustomIconProps {
    className?: string;
    icon: string;
    size?: "small";
    hover?: boolean;
    selected?: boolean;
    active?: boolean;
}
export declare class CustomIcon extends React.Component<CustomIconProps> {
    hoverContainer: any;
    setIconRef(ref: HTMLDivElement): void;
    hovered: boolean;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
