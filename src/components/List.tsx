import React from "react";
import css from "classnames";

interface Properties {
    className?: string
    clickable?: boolean
    theme?: 'large' | 'no-hover'
}

export class List extends React.Component<Properties> {
    render() {
        return (
            <ul className={css(
                "p-list",
                this.props.className,
                this.props.theme,
                { clickable: this.props.clickable }
            )}>
                {this.props.children}
            </ul>
        );
    }
}