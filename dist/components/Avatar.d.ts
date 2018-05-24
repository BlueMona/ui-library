/// <reference types="react" />
import React from "react";
import { ContactProps } from "./helpers/interfaces";
export interface AvatarProps {
    className?: string;
    contact: ContactProps;
    size?: "tiny" | "small" | "medium" | "large" | "full";
    tooltip?: boolean;
}
export declare class Avatar extends React.Component<AvatarProps & ({
    clickable: true;
    onClick: () => void;
} | {
    clickable?: false;
})> {
    render(): JSX.Element;
}
