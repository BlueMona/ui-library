import React from "react";
import { OptionProps } from "./helpers/interfaces";
export interface RadioButtonsProps {
    className?: string;
    onChange: (val: string) => void;
    value: string;
    options: OptionProps[];
}
export declare class RadioButtons extends React.Component<RadioButtonsProps> {
    setValue: (ev: React.MouseEvent<HTMLSpanElement>) => void;
    render(): JSX.Element;
}
