import React from "react";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import css from "classnames";

export interface InputProps {
    className?: string
    label?: string
    error?: string
    hint?: string
    
    innerRef?: (ref: HTMLTextAreaElement | HTMLInputElement | null | undefined) => void

    // Standard HTML input props
    autoFocus?: boolean
    disabled?: boolean
    maxLength?: number
    placeholder?: string
    readOnly?: boolean
    type?: "text" | "password"
    value?: string
    multiline?: boolean

    // React props
    onChange?: (val: string) => void
    onFocus?: () => void
    onBlur?: () => void
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

@observer
export class Input extends React.Component<InputProps> {
    @observable isFocused = false;
    @observable inputRef = undefined as any;

    handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!this.props.onChange) return;
        this.props.onChange(ev.currentTarget.value);
    }

    @action.bound handleFocus() {
        this.isFocused = true;
        if (!!this.props.onFocus) this.props.onFocus();
    }

    @action.bound handleBlur() {
        this.isFocused = false;
        if (!!this.props.onBlur) this.props.onBlur();
    }

    @action.bound setRef(ref: any) {
        if (ref) {
            this.inputRef = ref;
            if (this.props.autoFocus) {
                this.focus();
            }
        }
    }

    @action.bound focus() {
        if (this.inputRef) {
            this.inputRef.focus();
            this.handleFocus();
        }
    }

    @action.bound blur() {
        if (this.inputRef) {
            this.inputRef.blur();
            this.handleBlur();
        }
    }

    render() {
        return (
            <div
                className={css(
                    "p-input",
                    this.props.className,
                    {
                        "has-label": !!this.props.label,
                        "has-error": !!this.props.error,
                        focused: this.isFocused
                    }
                )}
            >
                {this.props.multiline
                    ? <textarea
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        maxLength={this.props.maxLength}

                        onChange={this.props.onChange ? this.handleChange : undefined}
                        onKeyPress={this.props.onKeyPress}
                        onKeyDown={this.props.onKeyDown}
                        onKeyUp={this.props.onKeyUp}

                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}

                        ref={this.props.innerRef || this.setRef}
                    />
                    : <input
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        maxLength={this.props.maxLength}

                        onChange={this.props.onChange ? this.handleChange : undefined}
                        onKeyPress={this.props.onKeyPress}
                        onKeyDown={this.props.onKeyDown}
                        onKeyUp={this.props.onKeyUp}

                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}

                        type={this.props.type || "text"}
                        readOnly={this.props.readOnly}
                        disabled={this.props.disabled}

                        ref={this.props.innerRef || this.setRef}
                    />
                }
                {this.props.label
                    ? <div
                        className={css(
                            "label",
                            { shrink: this.props.value !== "" || this.isFocused }
                        )}
                    >
                        {this.props.label}
                    </div>
                    : null
                }
                {this.props.hint
                    ? <div
                        className={css(
                            "hint",
                            { visible: this.props.value === "" }
                        )}
                    >
                        {this.props.hint}
                    </div>
                    : null
                }
                {this.props.error ? <div className="error">{this.props.error}</div> : null}
            </div>
        );
    }
}
