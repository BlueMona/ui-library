import React from "react";

interface Properties {
    className?: string

    // Caption will override child content
    caption?: any
}

export class ListHeading extends React.Component<Properties> {
    render() {
        return (
            <li className={this.props.className
                ? `p-list-heading ${this.props.className}`
                : "p-list-heading"
            }>
                {this.props.caption || this.props.children}
            </li>
        );
    }
}