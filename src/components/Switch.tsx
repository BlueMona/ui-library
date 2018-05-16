import React from "react";
import css from "classnames";

export interface SwitchProps {
    className?: string
    label?: string
    checked: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export class Switch extends React.Component<SwitchProps> {
    render() {
        return (
            <div className={css(
                "p-switch",
                this.props.className
            )}>
                <span className="label">{this.props.label}</span>
                <span className={css(
                    "p-switch-container",
                    { checked: this.props.checked }
                )}>
                    {/* The true <input> is invisible and overlaid on the custom "slider" */}
                    <input
                        type="checkbox"
                        checked={this.props.checked}
                        onChange={this.props.onChange}
                        className="clickable"
                    />
                    <div className="knob" />
                </span>
            </div>
        );
    }
}
