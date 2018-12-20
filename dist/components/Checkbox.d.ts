import React, { Component } from 'react';
export interface CheckboxProps {
    className?: string;
    checked: boolean;
    onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    label?: any;
    disabled?: boolean;
}
export declare class Checkbox extends Component<CheckboxProps> {
    render(): JSX.Element;
}
