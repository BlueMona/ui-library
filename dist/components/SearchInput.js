"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
const Input_1 = require("./Input");
const MaterialIcon_1 = require("./MaterialIcon");
let SearchInput = class SearchInput extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { className: "p-search-input-container" },
            react_1.default.createElement(MaterialIcon_1.MaterialIcon, { icon: "search", className: "search-icon" }),
            react_1.default.createElement(Input_1.Input, Object.assign({}, this.props, { className: classnames_1.default(this.props.className, this.props.size, 'p-search-input'), noHelperText: true }))));
    }
};
SearchInput = __decorate([
    mobx_react_1.observer
], SearchInput);
exports.SearchInput = SearchInput;
//# sourceMappingURL=SearchInput.js.map