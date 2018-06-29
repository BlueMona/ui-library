import React from "react";
import { observer } from "mobx-react";
import css from "classnames";

export interface CheckboxProps {
  className?: string
  checked: boolean
  onChange?: () => void
  label?: any
  disabled?: boolean
}

@observer
export class Checkbox extends React.Component<CheckboxProps> {
    render() {
        return (
            <span
                className={css(
                    "p-checkbox",
                    this.props.className,
                    { disabled: this.props.disabled }
                )}
            >
                <span className="p-checkbox-container">
                    {/* The true <input> is invisible and overlaid on the Material Icon span */}
                    <input
                        type="checkbox"
                        checked={this.props.checked}
                        onChange={this.props.onChange}
                        className={css({ clickable: !this.props.disabled })}
                    />
                    <span className={css(
                        "material-icons",
                        { selected: this.props.checked }
                    )}>
                        {this.props.checked
                            ? "check_box"
                            : "check_box_outline_blank"
                        }
                    </span>
                </span>

                {this.props.label &&
                    <span className="p-checkbox-label">
                        {this.props.label}
                    </span>
                }
            </span>
        );
    }
}
