import React from "react";
export class ListHeading extends React.Component {
    render() {
        return (React.createElement("li", { className: this.props.className
                ? `p-list-heading ${this.props.className}`
                : "p-list-heading" }, this.props.caption || this.props.children));
    }
}
//# sourceMappingURL=ListHeading.js.map