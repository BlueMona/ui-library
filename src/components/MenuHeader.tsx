import React from "react";
import { observer } from "mobx-react";

import css from "classnames";

export interface MenuHeaderProps {
    className?: string

    leftContent?: any
    caption?: string
    legend?: any

    onMouseEnter?: (ev?: React.MouseEvent<HTMLLIElement>) => void;
    onMouseLeave?: (ev?: React.MouseEvent<HTMLLIElement>) => void;

    disabled?: boolean
    selected?: boolean
}

@observer
export class MenuHeader extends React.Component<MenuHeaderProps> {
    render() {
        const { className, leftContent, caption, legend } = this.props;
        return (
            <li
                className={css(
                    "p-menu-header",
                    className
                )}
            >
                <div className="left-content">{leftContent}</div>
                <div className="main-content">
                    <div className="caption">{caption}</div>
                    <div className="legend">{legend}</div>
                </div>
            </li>
        );
    }
}
