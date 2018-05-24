import React from "react";
import css from "classnames";
import { Tooltip } from "./Tooltip";
export class MaterialIcon extends React.Component {
    render() {
        return (React.createElement("span", { className: css("material-icons", this.props.className, { active: this.props.active }) },
            this.props.icon,
            this.props.tooltip
                ? React.createElement(Tooltip, { text: this.props.tooltip, position: this.props.tooltipPosition })
                : null));
    }
}
//# sourceMappingURL=MaterialIcon.js.map