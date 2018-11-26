import React, { Component } from 'react';
interface BaseInputProps {
    className?: string;
    label?: string;
    error?: string;
    hint?: string;
    theme?: 'transparent';
    /**
     * default/large = 64px tall
     * small = 48px tall
     */
    size?: 'small' | 'large';
    /** Use to hide error/hint div in cases of very tight positioning. */
    noHelperText?: boolean;
    autoFocus?: boolean;
    maxLength?: number;
    placeholder?: string;
    readOnly?: boolean;
    value?: string;
    /** Label for E2E desktop tests */
    testId?: string;
    onChange?: (val: string) => void;
    onClear?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
interface TextAreaInputProps {
    multiline: true;
}
interface InputInputProps {
    multiline?: false;
    type?: 'text' | 'password';
    disabled?: boolean;
}
export declare type InputProps = BaseInputProps & (TextAreaInputProps | InputInputProps);
export declare class Input extends Component<InputProps> {
    isFocused: boolean;
    inputRef: HTMLInputElement | HTMLTextAreaElement | null;
    componentDidMount(): void;
    handleChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    readonly showClearButton: boolean;
    clearInput: () => void;
    handleFocus(): void;
    handleBlur(): void;
    setRef(ref: HTMLInputElement | HTMLTextAreaElement | null): void;
    focus(): void;
    blur(): void;
    render(): JSX.Element;
}
export {};
