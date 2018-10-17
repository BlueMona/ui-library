"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const MaterialIcon_1 = require("./MaterialIcon");
const dom_1 = require("./helpers/dom");
class ListItem extends react_1.Component {
    render() {
        return (react_1.default.createElement("li", Object.assign({ className: classnames_1.default('p-list-item', this.props.className, {
                disabled: this.props.disabled
            }), onClick: this.props.onClick }, dom_1.getDataProps(this.props)),
            this.props.leftIcon ? (react_1.default.createElement("div", { className: "side-content left icon" },
                react_1.default.createElement(MaterialIcon_1.MaterialIcon, { icon: this.props.leftIcon }))) : null,
            this.props.leftContent ? (react_1.default.createElement("div", { className: "side-content left" }, this.props.leftContent)) : null,
            this.props.caption ? (react_1.default.createElement("div", { className: "content" },
                react_1.default.createElement("div", { className: "caption" }, this.props.caption),
                this.props.legend ? (react_1.default.createElement("div", { className: "legend" }, this.props.legend)) : null)) : (react_1.default.createElement("div", { className: "content" }, this.props.children)),
            this.props.rightIcon ? (react_1.default.createElement("div", { className: "side-content right icon" },
                react_1.default.createElement(MaterialIcon_1.MaterialIcon, { icon: this.props.rightIcon }))) : null,
            this.props.rightContent ? (react_1.default.createElement("div", { className: "side-content right" }, this.props.rightContent)) : null));
    }
}
exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.js.map