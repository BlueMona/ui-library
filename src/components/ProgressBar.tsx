import React from "react";
import { observer } from "mobx-react";

import css from "classnames";

export interface ProgressBarProps {
    className?: string
    theme?: "multicolor" | "light"
    size?: "small"
}

@observer
export class ProgressBar extends React.Component<
    ProgressBarProps & (
        { mode?: "determinate", type?: "linear", value: number, max: number } |
        { mode: "indeterminate", type?: "linear" | "circular" }
    )
> {
    render() {
        let style;
        if (this.props.mode === ("determinate" || undefined)) {
            style = { width: `${this.props.value / this.props.max * 100}%` };
        }

        return (
            /*
                Progress bar itself needs to be position:relative,
                so we need to put everything in a container div to be able to control positioning
            */
            <div className={css(
                "p-progress-bar",
                this.props.className,
                this.props.theme,
                { circular: this.props.type === "circular" }
            )}>
                { this.props.type !== "circular"
                    ? <div className="progress-bar">
                        <div
                            className={css(
                                this.props.type || "linear",
                                this.props.mode || "determinate",
                                this.props.size,
                                this.props.theme
                            )}
                            style={style}
                        />
                    </div>
                    : <div className={css(
                        "progress-spinner",
                        this.props.size,
                        this.props.theme
                    )}>
                        <svg className="circular">
                            <circle
                                className="path"
                                cx={this.props.size === "small" ? 10 : 25 }
                                cy={this.props.size === "small" ? 10 : 25 }
                                r={this.props.size === "small" ? 6 : 20 }
                            />
                        </svg>
                    </div>
                }
            </div>
        );
    }
}
