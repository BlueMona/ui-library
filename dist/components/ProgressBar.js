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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
let ProgressBar = class ProgressBar extends react_1.Component {
    render() {
        const { circular, className, theme, size } = this.props;
        let innerBarStyle;
        const hasValue = this.props.value != undefined;
        if (hasValue) {
            const { value, max } = this.props;
            const width = (value / max) * 100;
            innerBarStyle = { width: `${width}%` };
        }
        return (
        /*
         * Progress bar itself needs to be position:relative, so we need to put
         * everything in a container div to be able to control positioning
         */
        react_1.default.createElement("div", { className: classnames_1.default('p-progress-bar', className, theme, size, {
                circular
            }) }, circular ? (react_1.default.createElement(CircularProgress, { size: size, theme: theme })) : (react_1.default.createElement("div", { className: "progress-bar" },
            react_1.default.createElement("div", { className: classnames_1.default('linear', hasValue ? 'determinate' : 'indeterminate', size, theme), style: innerBarStyle })))));
    }
};
ProgressBar = __decorate([
    mobx_react_1.observer
], ProgressBar);
exports.ProgressBar = ProgressBar;
const CircularProgress = ({ size, theme }) => {
    const isSmall = size === 'small';
    return (react_1.default.createElement("div", { className: classnames_1.default('progress-spinner', size, theme) },
        react_1.default.createElement("svg", { className: "circular" },
            react_1.default.createElement("circle", { className: "path", cx: isSmall ? 10 : 25, cy: isSmall ? 10 : 25, r: isSmall ? 6 : 20 }))));
};
//# sourceMappingURL=ProgressBar.js.map