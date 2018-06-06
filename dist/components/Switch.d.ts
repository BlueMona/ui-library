import React from "react";
export interface SwitchProps {
    className?: string;
    label?: string;
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export declare class Switch extends React.Component<SwitchProps> {
    render(): JSX.Element;
}
