"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class ListHeading extends react_1.Component {
    render() {
        return (react_1.default.createElement("li", { className: this.props.className
                ? `p-list-heading ${this.props.className}`
                : 'p-list-heading' }, this.props.caption || this.props.children));
    }
}
exports.ListHeading = ListHeading;
//# sourceMappingURL=ListHeading.js.map