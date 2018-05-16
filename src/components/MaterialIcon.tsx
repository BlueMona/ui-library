import React from "react";
import css from "classnames";
import { Tooltip } from "./Tooltip";

// TODO: size prop?
export interface MaterialIconProps {
    active?: boolean
    className?: string
    icon: string
    tooltip?: string
    tooltipPosition?: "top" | "right" | "bottom" | "left"
}

export class MaterialIcon extends React.Component<MaterialIconProps> {
    render() {
        return (
            <span className={css(
                "material-icons",
                this.props.className,
                { active: this.props.active }
            )}>
                {this.props.icon}
                {this.props.tooltip
                    ? <Tooltip text={this.props.tooltip}
                        position={this.props.tooltipPosition}
                    />
                    : null
                }
            </span>
        );
    }
}