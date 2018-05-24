/// <reference types="react" />
import React from "react";
export interface ListProps {
    className?: string;
    clickable?: boolean;
    theme?: "large" | "no-hover";
}
export declare class List extends React.Component<ListProps> {
    render(): JSX.Element;
}
