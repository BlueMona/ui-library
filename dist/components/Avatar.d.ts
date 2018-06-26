import React from "react";
import { ContactProps } from "./helpers/interfaces";
export interface AvatarProps {
    className?: string;
    contact: ContactProps;
    size?: "tiny" | "small" | "medium" | "large" | "full";
    tooltip?: boolean;
    clickable?: boolean;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
}
export declare class Avatar extends React.Component<AvatarProps> {
    render(): JSX.Element;
}
