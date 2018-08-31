"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Tooltip_1 = require("./Tooltip");
class MaterialIcon extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("span", { className: classnames_1.default('material-icons', this.props.className, {
                active: this.props.active
            }), onClick: this.props.onClick },
            this.props.icon,
            this.props.tooltip ? (react_1.default.createElement(Tooltip_1.Tooltip, { text: this.props.tooltip, position: this.props.tooltipPosition })) : null));
    }
}
exports.MaterialIcon = MaterialIcon;
//# sourceMappingURL=MaterialIcon.js.map