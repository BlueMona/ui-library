/// <reference types="react" />
import React from "react";
import { ContactProps } from "./helpers/interfaces";
export interface AvatarProps {
    className?: string;
    clickable?: boolean;
    contact: ContactProps;
    size?: "tiny" | "small" | "medium" | "large" | "full";
    tooltip?: boolean;
}
export declare class Avatar extends React.Component<AvatarProps> {
    openContactDialog(ev: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
