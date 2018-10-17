import { Component } from 'react';
export interface CustomIconProps {
    className?: string;
    /** The icon"s name, i.e. filename without extension */
    icon: string;
    /** "small" = 16px, or leave blank for default = 24px */
    size?: 'small';
    /**
     * Set true if icon should have hover effects. Requires parent component with
     * class .custom-icon-hover-container
     */
    hover?: boolean;
    selected?: boolean;
    active?: boolean;
}
export declare class CustomIcon extends Component<CustomIconProps> {
    hoverContainer: any;
    setIconRef(ref: HTMLDivElement): void;
    hovered: boolean;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
