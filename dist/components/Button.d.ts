import React from 'react';
export interface ButtonProps {
    className?: string;
    style?: object;
    href?: string;
    label?: any;
    icon?: string;
    customIcon?: string;
    disabled?: boolean;
    selected?: boolean;
    active?: boolean;
    tabIndex?: number;
    testId?: string;
    onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (ev?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    onMouseLeave?: (ev?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    tooltip?: string;
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
    tooltipSize?: 'small';
    theme?: string;
}
export declare class Button extends React.Component<ButtonProps> {
    render(): JSX.Element;
}
