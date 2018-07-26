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
let ProgressBar = class ProgressBar extends react_1.default.Component {
    render() {
        let style;
        if (this.props.mode === "determinate" || this.props.mode === undefined) {
            style = { width: `${this.props.value / this.props.max * 100}%` };
        }
        return (
        /*
            Progress bar itself needs to be position:relative,
            so we need to put everything in a container div to be able to control positioning
        */
        react_1.default.createElement("div", { className: classnames_1.default("p-progress-bar", this.props.className, this.props.theme, this.props.size, { circular: this.props.type === "circular" }) }, this.props.type !== "circular"
            ? react_1.default.createElement("div", { className: "progress-bar" },
                react_1.default.createElement("div", { className: classnames_1.default(this.props.type || "linear", this.props.mode || "determinate", this.props.size, this.props.theme), style: style }))
            : react_1.default.createElement("div", { className: classnames_1.default("progress-spinner", this.props.size, this.props.theme) },
                react_1.default.createElement("svg", { className: "circular" },
                    react_1.default.createElement("circle", { className: "path", cx: this.props.size === "small" ? 10 : 25, cy: this.props.size === "small" ? 10 : 25, r: this.props.size === "small" ? 6 : 20 })))));
    }
};
ProgressBar = __decorate([
    mobx_react_1.observer
], ProgressBar);
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map