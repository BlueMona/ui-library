import React from 'react';
interface BaseInputProps {
    className?: string;
    label?: string;
    error?: string;
    hint?: string;
    autoFocus?: boolean;
    maxLength?: number;
    placeholder?: string;
    value?: string;
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
    innerRef?: React.Ref<HTMLTextAreaElement>;
}
interface InputInputProps {
    multiline?: false;
    type?: 'text' | 'password';
    readOnly?: boolean;
    disabled?: boolean;
    innerRef?: React.Ref<HTMLInputElement>;
}
export declare type InputProps = BaseInputProps & (TextAreaInputProps | InputInputProps);
export declare class Input extends React.Component<InputProps> {
    isFocused: boolean;
    inputRef: HTMLInputElement | HTMLTextAreaElement | null;
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
