"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
const MaterialIcon_1 = require("./MaterialIcon");
const Tooltip_1 = require("./Tooltip");
let Avatar = class Avatar extends react_1.default.Component {
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
            errorIcon = react_1.default.createElement(MaterialIcon_1.MaterialIcon, { icon: "remove_circle" });
        }
        else if (c.tofuError) {
            errorIcon = react_1.default.createElement(MaterialIcon_1.MaterialIcon, { icon: "error" });
        }
        return (react_1.default.createElement("div", { className: "p-avatar" },
            react_1.default.createElement("div", { className: "contents" },
                react_1.default.createElement("div", { className: classnames_1.default("image-container", this.props.className, `${this.props.size || "medium"}`, { clickable: this.props.clickable }), style: !c.hasAvatar ? { backgroundColor: c.color } : {}, onClick: this.props.clickable ? this.openContactDialog : undefined }, c.hasAvatar
                    ? react_1.default.createElement("img", { src: c.mediumAvatarUrl, alt: c.username })
                    : c.letter)),
            errorIcon,
            this.props.tooltip
                ? react_1.default.createElement(Tooltip_1.Tooltip, { text: c.fullNameAndUsername, position: "top" })
                : null));
    }
};
Avatar = __decorate([
    mobx_react_1.observer
], Avatar);
exports.Avatar = Avatar;
//# sourceMappingURL=Avatar.js.map