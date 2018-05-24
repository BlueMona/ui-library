/// <reference types="react" />
import React from "react";
import { OptionProps } from "./helpers/interfaces";
export interface DropdownProps {
    className?: string;
    onChange: (val: string) => void;
    label?: string;
    value: string;
    options: OptionProps[];
}
export declare class Dropdown extends React.Component<DropdownProps> {
    isActive: boolean;
    activate(): void;
    setValue(ev: React.MouseEvent<HTMLLIElement>): void;
    isHover: boolean;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClick(): void;
    render(): JSX.Element;
}