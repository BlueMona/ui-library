var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { observer } from "mobx-react";
import css from "classnames";
let Checkbox = class Checkbox extends React.Component {
    render() {
        return (React.createElement("span", { className: css("p-checkbox", this.props.className, { disabled: this.props.disabled }) },
            React.createElement("span", { className: "p-checkbox-container" },
                React.createElement("input", { type: "checkbox", checked: this.props.checked, onChange: this.props.onChange, className: css({ clickable: !this.props.disabled }) }),
                React.createElement("span", { className: css("material-icons", { selected: this.props.checked }) }, this.props.checked
                    ? "check_box"
                    : "check_box_outline_blank")),
            this.props.label &&
                React.createElement("span", { className: "p-checkbox-label" }, this.props.label)));
    }
};
Checkbox = __decorate([
    observer
], Checkbox);
export { Checkbox };
//# sourceMappingURL=Checkbox.js.map