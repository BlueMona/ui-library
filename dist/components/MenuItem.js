var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { observer } from "mobx-react";
import css from "classnames";
import { CustomIcon } from "./CustomIcon";
import { MaterialIcon } from "./MaterialIcon";
let MenuItem = class MenuItem extends React.Component {
    constructor() {
        super(...arguments);
        this.clickHandler = (ev) => {
            ev.stopPropagation();
            if (!this.props.disabled)
                this.props.onClick(ev);
        };
    }
    render() {
        const { value, icon, customIcon, caption, className, onClick } = this.props;
        return (React.createElement("li", { value: value, className: css("p-menu-item", className, {
                clickable: !this.props.disabled,
                disabled: this.props.disabled,
                selected: this.props.selected
            }), onClick: onClick },
            icon
                ? React.createElement(MaterialIcon, { key: `icon-${icon}`, icon: icon, className: "icon" })
                : (customIcon
                    ? React.createElement(CustomIcon, { key: `icon-${customIcon}`, icon: customIcon, className: "icon", hover: true })
                    : null),
            caption));
    }
};
MenuItem = __decorate([
    observer
], MenuItem);
export { MenuItem };
//# sourceMappingURL=MenuItem.js.map