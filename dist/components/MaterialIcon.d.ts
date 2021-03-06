import React, { Component } from 'react';
export interface MaterialIconProps {
    active?: boolean;
    className?: string;
    icon: string;
    onClick?: (ev?: React.MouseEvent<HTMLSpanElement>) => void;
    tooltip?: string;
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
}
export declare class MaterialIcon extends Component<MaterialIconProps> {
    render(): JSX.Element;
}
