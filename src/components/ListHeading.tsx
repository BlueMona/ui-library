import React from "react";

export interface ListHeadingProps {
    className?: string

    // Caption will override child content
    caption?: any
}

export class ListHeading extends React.Component<ListHeadingProps> {
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