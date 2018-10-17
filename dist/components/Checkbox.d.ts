import { Component } from 'react';
export interface CheckboxProps {
    className?: string;
    checked: boolean;
    onChange?: () => void;
    label?: any;
    disabled?: boolean;
}
export declare class Checkbox extends Component<CheckboxProps> {
    render(): JSX.Element;
}
