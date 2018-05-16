import React from "react";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import css from "classnames";

export interface InputProps {
    className?: string
    label?: string
    error?: string
    hint?: string

    ref?: any // TODO: any type
    innerRef?: any // TODO: any type

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
    onChange?: (ev: any) => void // TODO: any type
    onFocus?: () => void
    onBlur?: () => void
    onKeyUp?: (ev: any) => void
    onKeyDown?: (ev: any) => void
    onKeyPress?: (ev: any) => void
}

@observer
export class Input extends React.Component<InputProps> {
    @observable isFocused = false;

    handleChange = (ev: any) => {
        if (!this.props.onChange) return;
        this.props.onChange(ev.target.value);
    }

    @action.bound handleFocus() {
        this.isFocused = true;
        if (!!this.props.onFocus) this.props.onFocus();
    }

    @action.bound handleBlur() {
        this.isFocused = false;
        if (!!this.props.onBlur) this.props.onBlur();
    }

    render() {
        return (
            <div
                className={css(
                    "p-input",
                    this.props.className,
                    {
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

                        ref={this.props.ref || this.props.innerRef}
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
                        autoFocus={this.props.autoFocus} // eslint-disable-line
                        readOnly={this.props.readOnly}
                        disabled={this.props.disabled}

                        ref={this.props.ref || this.props.innerRef}
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
