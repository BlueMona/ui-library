import React from "react";
import css from "classnames";
import { MaterialIcon } from "./MaterialIcon";
import { getDataProps } from "./helpers/dom";
export class ListItem extends React.Component {
    render() {
        return (React.createElement("li", Object.assign({ className: css("p-list-item", this.props.className, { disabled: this.props.disabled }), onClick: this.props.onClick }, getDataProps(this.props)),
            this.props.leftIcon
                ? React.createElement("div", { className: "side-content left icon" },
                    React.createElement(MaterialIcon, { icon: this.props.leftIcon }))
                : (this.props.leftContent
                    ? React.createElement("div", { className: "side-content left" }, this.props.leftContent)
                    : null),
            this.props.caption
                ? React.createElement("div", { className: "content" },
                    React.createElement("div", { className: "caption" }, this.props.caption),
                    this.props.legend
                        ? React.createElement("div", { className: "legend" }, this.props.legend)
                        : null)
                : React.createElement("div", { className: "content" }, this.props.children),
            this.props.rightIcon
                ? React.createElement("div", { className: "side-content right icon" },
                    React.createElement(MaterialIcon, { icon: this.props.rightIcon }))
                : (this.props.rightContent
                    ? React.createElement("div", { className: "side-content right" }, this.props.rightContent)
                    : null)));
    }
}
//# sourceMappingURL=ListItem.js.map