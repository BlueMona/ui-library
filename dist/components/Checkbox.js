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
let Checkbox = class Checkbox extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("span", { className: classnames_1.default('p-checkbox', this.props.className, {
                disabled: this.props.disabled
            }) },
            react_1.default.createElement("span", { className: "p-checkbox-container" },
                react_1.default.createElement("input", { type: "checkbox", checked: this.props.checked, onChange: this.props.onChange, className: classnames_1.default({ clickable: !this.props.disabled }) }),
                react_1.default.createElement("span", { className: classnames_1.default('material-icons', { selected: this.props.checked }) }, this.props.checked ? 'check_box' : 'check_box_outline_blank')),
            this.props.label && (react_1.default.createElement("span", { className: "p-checkbox-label" }, this.props.label))));
    }
};
Checkbox = __decorate([
    mobx_react_1.observer
], Checkbox);
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map