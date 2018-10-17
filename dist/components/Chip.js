"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
const Button_1 = require("./Button");
let Chip = class Chip extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", { className: this.props.className ? `p-chip ${this.props.className}` : 'p-chip' },
            react_1.default.createElement("span", { className: "content" }, this.props.children),
            this.props.deletable ? (react_1.default.createElement(Button_1.Button, { icon: "remove", onClick: this.props.onDeleteClick, theme: "small" })) : null));
    }
};
Chip = __decorate([
    mobx_react_1.observer
], Chip);
exports.Chip = Chip;
//# sourceMappingURL=Chip.js.map