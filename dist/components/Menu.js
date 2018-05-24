var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import React from "react";
import ReactDOM from "react-dom";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import css from "classnames";
import { getDataProps, getParentWithClass } from "./helpers/dom";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";
const appRoot = document.getElementById("root");
let Menu = class Menu extends React.Component {
    constructor() {
        super(...arguments);
        this.menuActive = false;
        this.menuVisible = false;
        this.style = {
            top: "inherit",
            bottom: "inherit",
            left: "inherit",
            right: "inherit"
        };
    }
    setMenuButtonRef(ref) {
        if (ref) {
            this.menuButtonRef = ref;
            this.scrollContainer = getParentWithClass(ref, "scrollable");
        }
    }
    setMenuContentRef(ref) {
        if (ref)
            this.menuVisible = true;
    }
    handleMenuClick() {
        if (this.hideMenuTimeout) {
            this.menuActive = false;
            clearTimeout(this.hideMenuTimeout);
            this.hideMenuTimeout = null;
        }
        this.setStyle();
        this.menuActive = true;
        window.addEventListener("click", this.hideMenu, true);
        window.addEventListener("keyup", this.handleKeyUp);
        if (this.scrollContainer) {
            this.scrollContainer.addEventListener("scroll", this.hideMenu);
        }
    }
    handleKeyUp(ev) {
        if (ev.keyCode === 27)
            this.hideMenu();
    }
    hideMenu() {
        // Need this timeout to delay menu hide so that the hide animation fires
        this.menuVisible = false;
        this.hideMenuTimeout = setTimeout(() => {
            this.menuActive = false;
            this.hideMenuTimeout = null;
        }, 250);
        window.removeEventListener("click", this.hideMenu, true);
        window.removeEventListener("keyup", this.handleKeyUp);
        if (this.scrollContainer) {
            this.scrollContainer.removeEventListener("scroll", this.hideMenu);
        }
    }
    setStyle() {
        const { width, height, left, top } = this.menuButtonRef.getBoundingClientRect();
        const windowX = window.innerWidth;
        const windowY = window.innerHeight;
        const position = !!this.props.position ? this.props.position : "top-left";
        const [posY, posX] = position.split("-");
        if (posY === "top")
            this.style.top = `${top}px`;
        if (posY === "bottom")
            this.style.bottom = `${windowY - top - height}px`;
        if (posX === "left")
            this.style.left = `${left}px`;
        if (posX === "right")
            this.style.right = `${windowX - left - width}px`;
    }
    render() {
        const menuButton = (React.createElement("div", { key: "p-menu", className: css("p-menu", this.props.className, { clickable: this.menuActive }), ref: this.setMenuButtonRef, onClick: this.props.onClick },
            React.createElement(Button, { icon: this.props.icon, customIcon: this.props.customIcon, onClick: this.handleMenuClick, disabled: this.menuActive || this.props.disabled }, this.props.customButton),
            this.props.tooltip
                ? React.createElement(Tooltip, { text: this.props.tooltip, position: this.props.tooltipPosition || "top" })
                : null));
        if (!this.menuActive)
            return menuButton;
        const menuContent = (React.createElement("ul", Object.assign({ key: "p-menu-content", className: css("p-menu-content", this.props.theme, { visible: this.menuVisible }), style: this.style, ref: this.setMenuContentRef }, getDataProps(this.props)), this.props.children));
        return [
            menuButton,
            ReactDOM.createPortal(menuContent, appRoot)
        ];
    }
};
__decorate([
    observable,
    __metadata("design:type", Object)
], Menu.prototype, "menuActive", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], Menu.prototype, "menuVisible", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], Menu.prototype, "style", void 0);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLDivElement]),
    __metadata("design:returntype", void 0)
], Menu.prototype, "setMenuButtonRef", null);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLUListElement]),
    __metadata("design:returntype", void 0)
], Menu.prototype, "setMenuContentRef", null);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Menu.prototype, "handleMenuClick", null);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], Menu.prototype, "handleKeyUp", null);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Menu.prototype, "hideMenu", null);
Menu = __decorate([
    observer
], Menu);
export { Menu };
//# sourceMappingURL=Menu.js.map