import React, { Component } from 'react';
import { OptionProps } from './helpers/interfaces';
export interface RadioButtonsProps {
    className?: string;
    onChange: (val: string) => void;
    value: string;
    options: OptionProps[];
}
export declare class RadioButtons extends Component<RadioButtonsProps> {
    setValue: (ev: React.MouseEvent<HTMLSpanElement>) => void;
    render(): JSX.Element;
}
