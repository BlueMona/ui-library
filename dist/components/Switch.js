import React from "react";
import css from "classnames";
export class Switch extends React.Component {
    render() {
        return (React.createElement("div", { className: css("p-switch", this.props.className) },
            React.createElement("span", { className: "label" }, this.props.label),
            React.createElement("span", { className: css("p-switch-container", { checked: this.props.checked }) },
                React.createElement("input", { type: "checkbox", checked: this.props.checked, onChange: this.props.onChange, className: "clickable" }),
                React.createElement("div", { className: "knob" }))));
    }
}
//# sourceMappingURL=Switch.js.map