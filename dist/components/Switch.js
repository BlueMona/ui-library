"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
class Switch extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: classnames_1.default('p-switch', this.props.className) },
            react_1.default.createElement("span", { className: "label" }, this.props.label),
            react_1.default.createElement("span", { className: classnames_1.default('p-switch-container', { checked: this.props.checked }) },
                react_1.default.createElement("input", { type: "checkbox", checked: this.props.checked, onChange: this.props.onChange, className: "clickable" }),
                react_1.default.createElement("div", { className: "knob" }))));
    }
}
exports.Switch = Switch;
//# sourceMappingURL=Switch.js.map