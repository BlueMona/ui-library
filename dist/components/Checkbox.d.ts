import React from "react";
export interface CheckboxProps {
    className?: string;
    checked: boolean;
    onChange?: () => void;
    label?: any;
    disabled?: boolean;
}
export declare class Checkbox extends React.Component<CheckboxProps> {
    render(): JSX.Element;
}
