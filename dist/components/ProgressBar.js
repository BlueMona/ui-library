var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { observer } from "mobx-react";
import css from "classnames";
let ProgressBar = class ProgressBar extends React.Component {
    render() {
        let style;
        if (this.props.mode === ("determinate" || undefined)) {
            style = { width: `${this.props.value / this.props.max * 100}%` };
        }
        return (
        /*
            Progress bar itself needs to be position:relative,
            so we need to put everything in a container div to be able to control positioning
        */
        React.createElement("div", { className: css("p-progress-bar", this.props.className, this.props.theme, { circular: this.props.type === "circular" }) }, this.props.type !== "circular"
            ? React.createElement("div", { className: "progress-bar" },
                React.createElement("div", { className: css(this.props.type || "linear", this.props.mode || "determinate", this.props.size, this.props.theme), style: style }))
            : React.createElement("div", { className: css("progress-spinner", this.props.size, this.props.theme) },
                React.createElement("svg", { className: "circular" },
                    React.createElement("circle", { className: "path", cx: this.props.size === "small" ? 10 : 25, cy: this.props.size === "small" ? 10 : 25, r: this.props.size === "small" ? 6 : 20 })))));
    }
};
ProgressBar = __decorate([
    observer
], ProgressBar);
export { ProgressBar };
//# sourceMappingURL=ProgressBar.js.map