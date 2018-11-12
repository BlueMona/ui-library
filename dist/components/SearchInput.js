"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Input_1 = require("./Input");
class SearchInput extends react_1.default.Component {
    render() {
        return react_1.default.createElement(Input_1.Input, Object.assign({}, this.props, { isSearch: true }));
    }
}
exports.default = SearchInput;
//# sourceMappingURL=SearchInput.js.map