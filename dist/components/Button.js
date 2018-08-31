"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const MaterialIcon_1 = require("./MaterialIcon");
const CustomIcon_1 = require("./CustomIcon");
const Tooltip_1 = require("./Tooltip");
class Button extends react_1.default.Component {
    render() {
        const classNames = classnames_1.default('p-button', this.props.className, this.props.theme, {
            icon: !this.props.label && (!!this.props.icon || !!this.props.customIcon),
            'icon-and-label': !!this.props.label && (!!this.props.icon || !!this.props.customIcon),
            selected: this.props.selected,
            active: this.props.active
        });
        const buttonContent = [
            this.props.icon && (react_1.default.createElement(MaterialIcon_1.MaterialIcon, { key: `button-material-icon-${this.props.icon}`, icon: this.props.icon })),
            this.props.customIcon && (react_1.default.createElement(CustomIcon_1.CustomIcon, { key: `button-custom-icon-${this.props.customIcon}`, icon: this.props.customIcon })),
            this.props.label || this.props.children ? (react_1.default.createElement("span", { key: `button-label-${this.props.label || this.props.children}`, className: "label" }, this.props.label || this.props.children)) : null,
            this.props.tooltip ? (react_1.default.createElement(Tooltip_1.Tooltip, { key: `button-tooltip-${this.props.tooltip}`, text: this.props.tooltip, position: this.props.tooltipPosition || 'top', size: this.props.tooltipSize })) : null
        ];
        if (this.props.href) {
            return (react_1.default.createElement("a", { href: this.props.href, className: classNames, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, style: this.props.style }, buttonContent));
        }
        return (react_1.default.createElement("button", { className: classNames, onClick: this.props.onClick, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, disabled: this.props.disabled, style: this.props.style }, buttonContent));
    }
}
exports.Button = Button;
//# sourceMappingURL=Button.js.map