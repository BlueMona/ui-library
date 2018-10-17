import React, { Component } from 'react';
export interface SwitchProps {
    className?: string;
    label?: string;
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export declare class Switch extends Component<SwitchProps> {
    render(): JSX.Element;
}
