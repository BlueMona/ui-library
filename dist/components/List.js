import React from "react";
import css from "classnames";
export class List extends React.Component {
    render() {
        return (React.createElement("ul", { className: css("p-list", this.props.className, this.props.theme, { clickable: this.props.clickable }) }, this.props.children));
    }
}
//# sourceMappingURL=List.js.map