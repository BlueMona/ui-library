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
let MenuHeader = class MenuHeader extends react_1.default.Component {
    render() {
        const { className, leftContent, caption, legend } = this.props;
        return (react_1.default.createElement("li", { className: classnames_1.default("p-menu-header", className) },
            react_1.default.createElement("div", { className: "left-content" }, leftContent),
            react_1.default.createElement("div", { className: "main-content" },
                react_1.default.createElement("div", { className: "caption" }, caption),
                react_1.default.createElement("div", { className: "legend" }, legend))));
    }
};
MenuHeader = __decorate([
    mobx_react_1.observer
], MenuHeader);
exports.MenuHeader = MenuHeader;
//# sourceMappingURL=MenuHeader.js.map