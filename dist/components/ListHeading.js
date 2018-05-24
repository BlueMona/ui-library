"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class ListHeading extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("li", { className: this.props.className
                ? `p-list-heading ${this.props.className}`
                : "p-list-heading" }, this.props.caption || this.props.children));
    }
}
exports.ListHeading = ListHeading;
//# sourceMappingURL=ListHeading.js.map