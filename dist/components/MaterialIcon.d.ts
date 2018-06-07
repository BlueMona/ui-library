import React from "react";
export interface MaterialIconProps {
    active?: boolean;
    className?: string;
    icon: string;
    onClick?: () => void;
    tooltip?: string;
    tooltipPosition?: "top" | "right" | "bottom" | "left";
}
export declare class MaterialIcon extends React.Component<MaterialIconProps> {
    render(): JSX.Element;
}
