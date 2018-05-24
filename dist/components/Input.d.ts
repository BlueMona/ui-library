/// <reference types="react" />
import React from "react";
export interface InputProps {
    className?: string;
    label?: string;
    error?: string;
    hint?: string;
    ref?: (ref: HTMLTextAreaElement | HTMLInputElement | null | undefined) => void;
    innerRef?: (ref: HTMLTextAreaElement | HTMLInputElement | null | undefined) => void;
    autoFocus?: boolean;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
    readOnly?: boolean;
    type?: "text" | "password";
    value?: string;
    multiline?: boolean;
    onChange?: (val: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
export declare class Input extends React.Component<InputProps> {
    isFocused: boolean;
    handleChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleFocus(): void;
    handleBlur(): void;
    render(): JSX.Element;
}
