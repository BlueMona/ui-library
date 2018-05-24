"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
class List extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("ul", { className: classnames_1.default("p-list", this.props.className, this.props.theme, { clickable: this.props.clickable }) }, this.props.children));
    }
}
exports.List = List;
//# sourceMappingURL=List.js.map