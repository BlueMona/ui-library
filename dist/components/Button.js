import React from "react";
import css from "classnames";
import { MaterialIcon } from "./MaterialIcon";
import { CustomIcon } from "./CustomIcon";
import { Tooltip } from "./Tooltip";
export class Button extends React.Component {
    render() {
        const classNames = (css("p-button", this.props.className, this.props.theme, {
            icon: !this.props.label && (!!this.props.icon || !!this.props.customIcon),
            "icon-and-label": !!this.props.label && (!!this.props.icon || !!this.props.customIcon),
            selected: this.props.selected,
            active: this.props.active
        }));
        const buttonContent = [
            (this.props.icon && React.createElement(MaterialIcon, { key: "material-icon", icon: this.props.icon })),
            (this.props.customIcon && React.createElement(CustomIcon, { key: "custom-icon", icon: this.props.customIcon })),
            (this.props.label || this.props.children
                ? React.createElement("span", { key: "label", className: "label" }, this.props.label || this.props.children)
                : null),
            (this.props.tooltip
                ? React.createElement(Tooltip, { text: this.props.tooltip, position: this.props.tooltipPosition || "top", size: this.props.tooltipSize })
                : null)
        ];
        if (this.props.href) {
            return (React.createElement("a", { href: this.props.href, className: classNames, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, style: this.props.style }, buttonContent));
        }
        return (React.createElement("button", { className: classNames, onClick: this.props.onClick, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, disabled: this.props.disabled, style: this.props.style }, buttonContent));
    }
}
//# sourceMappingURL=Button.js.map