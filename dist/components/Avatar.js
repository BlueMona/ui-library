"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
const MaterialIcon_1 = require("./MaterialIcon");
const Tooltip_1 = require("./Tooltip");
let Avatar = class Avatar extends react_1.Component {
    render() {
        const c = this.props.contact;
        let errorIcon;
        if (c.isDeleted) {
            errorIcon = react_1.default.createElement(MaterialIcon_1.MaterialIcon, { icon: "remove_circle" });
        }
        else if (c.tofuError) {
            errorIcon = react_1.default.createElement(MaterialIcon_1.MaterialIcon, { icon: "error" });
        }
        return (react_1.default.createElement("div", { className: "p-avatar", "data-test-id": this.props.contact.username },
            react_1.default.createElement("div", { className: "contents" },
                react_1.default.createElement("div", { className: classnames_1.default('image-container', this.props.className, `${this.props.size || 'medium'}`, {
                        clickable: this.props.clickable || !!this.props.onClick,
                        'light-bg': !c.hasAvatar && c.color.isLight
                    }), style: !c.hasAvatar ? { backgroundColor: c.color.value } : {}, onClick: this.props.onClick }, c.hasAvatar ? (react_1.default.createElement("img", { src: c.mediumAvatarUrl, alt: c.username, draggable: false })) : (c.letter))),
            errorIcon,
            this.props.tooltip ? (react_1.default.createElement(Tooltip_1.Tooltip, { className: "p-avatar-tooltip", text: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("span", { className: "full-name" }, `${c.fullName}`),
                    "\u00A0",
                    react_1.default.createElement("span", { className: "username" }, c.username)), position: "top" })) : null));
    }
};
Avatar = __decorate([
    mobx_react_1.observer
], Avatar);
exports.Avatar = Avatar;
//# sourceMappingURL=Avatar.js.map