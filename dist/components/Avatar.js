var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { observer } from "mobx-react";
import css from "classnames";
import { MaterialIcon } from "./MaterialIcon";
import { Tooltip } from "./Tooltip";
let Avatar = class Avatar extends React.Component {
    // When avatar is clickable, click opens ContactProfile dialog
    // TODO: render ContactProfile dialog in here
    openContactDialog(ev) {
        console.log("click");
        console.log(ev);
    }
    render() {
        const c = this.props.contact;
        let errorIcon;
        if (c.isDeleted) {
            errorIcon = React.createElement(MaterialIcon, { icon: "remove_circle" });
        }
        else if (c.tofuError) {
            errorIcon = React.createElement(MaterialIcon, { icon: "error" });
        }
        return (React.createElement("div", { className: "p-avatar" },
            React.createElement("div", { className: "contents" },
                React.createElement("div", { className: css("image-container", this.props.className, `${this.props.size || "medium"}`, { clickable: this.props.clickable }), style: !c.hasAvatar ? { backgroundColor: c.color } : {}, onClick: this.props.clickable ? this.openContactDialog : undefined }, c.hasAvatar
                    ? React.createElement("img", { src: c.mediumAvatarUrl, alt: c.username })
                    : c.letter)),
            errorIcon,
            this.props.tooltip
                ? React.createElement(Tooltip, { text: c.fullNameAndUsername, position: "top" })
                : null));
    }
};
Avatar = __decorate([
    observer
], Avatar);
export { Avatar };
//# sourceMappingURL=Avatar.js.map