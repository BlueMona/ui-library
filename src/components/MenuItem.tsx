import React from "react";
import { observer } from "mobx-react";

import css from "classnames";
import { CustomIcon } from "./CustomIcon";
import { MaterialIcon } from "./MaterialIcon";

export interface MenuItemProps {
    className?: string
    value: string
    caption?: string

    icon?: string
    customIcon?: string

    onClick: () => void

    disabled?: boolean
    selected?: boolean
}

@observer
export class MenuItem extends React.Component<MenuItemProps> {
    render() {
        const { value, icon, customIcon, caption, className, onClick } = this.props;
        return (
            <li
                value={value}
                className={css(
                    "p-menu-item",
                    className,
                    {
                        clickable: !this.props.disabled,
                        disabled: this.props.disabled,
                        selected: this.props.selected
                    }
                )}
                onClick={onClick}
            >
                {icon
                    ? <MaterialIcon
                        key={`icon-${icon}`}
                        icon={icon}
                        className="icon"
                    />
                    : (customIcon
                        ? <CustomIcon
                            key={`icon-${customIcon}`}
                            icon={customIcon}
                            className="icon"
                            hover
                        />
                        : null
                    )
                }
                {caption}
            </li>
        );
    }
}
