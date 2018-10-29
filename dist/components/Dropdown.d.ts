import React, { Component } from 'react';
import { OptionProps } from './helpers/interfaces';
export interface DropdownProps {
    className?: string;
    onChange: (val: string) => void;
    label?: string;
    value: string;
    options: OptionProps[];
}
export declare class Dropdown extends Component<DropdownProps> {
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
