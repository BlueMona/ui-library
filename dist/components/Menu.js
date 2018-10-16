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
const react_dom_1 = __importDefault(require("react-dom"));
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
const dom_1 = require("./helpers/dom");
const Button_1 = require("./Button");
const Tooltip_1 = require("./Tooltip");
const appRoot = document.getElementById('root');
let Menu = class Menu extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.menuActive = false;
        this.menuVisible = false;
        this.style = {
            top: 'inherit',
            bottom: 'inherit',
            left: 'inherit',
            right: 'inherit'
        };
    }
    setMenuButtonRef(ref) {
        if (ref) {
            this.menuButtonRef = ref;
            this.scrollContainer = dom_1.getParentWithClass(ref, 'scrollable');
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
        window.addEventListener('click', this.hideMenu, true);
        window.addEventListener('blur', this.hideMenu);
        window.addEventListener('keyup', this.handleKeyUp);
        if (this.scrollContainer) {
            this.scrollContainer.addEventListener('scroll', this.hideMenu);
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
        if (this.props.onHide) {
            this.props.onHide();
        }
        window.removeEventListener('click', this.hideMenu, true);
        window.removeEventListener('blur', this.hideMenu);
        window.removeEventListener('keyup', this.handleKeyUp);
        if (this.scrollContainer) {
            this.scrollContainer.removeEventListener('scroll', this.hideMenu);
        }
    }
    setStyle() {
        const { width, height, left, top } = this.menuButtonRef.getBoundingClientRect();
        const windowX = window.innerWidth;
        const windowY = window.innerHeight;
        const position = this.props.position || 'top-left';
        const [posY, posX] = position.split('-');
        if (posY === 'top')
            this.style.top = `${top}px`;
        if (posY === 'bottom')
            this.style.bottom = `${windowY - top - height}px`;
        if (posX === 'left')
            this.style.left = `${left}px`;
        if (posX === 'right')
            this.style.right = `${windowX - left - width}px`;
    }
    render() {
        const menuButton = (react_1.default.createElement("div", { key: "p-menu", className: classnames_1.default('p-menu', this.props.className, {
                clickable: this.menuActive
            }), ref: this.setMenuButtonRef, onClick: this.props.onClick },
            react_1.default.createElement(Button_1.Button, { icon: this.props.icon, customIcon: this.props.customIcon, onClick: this.handleMenuClick, disabled: this.menuActive || this.props.disabled }, this.props.customButton),
            this.props.tooltip ? (react_1.default.createElement(Tooltip_1.Tooltip, { text: this.props.tooltip, position: this.props.tooltipPosition || 'top' })) : null));
        if (!this.menuActive)
            return menuButton;
        const menuContent = (react_1.default.createElement("ul", Object.assign({ key: "p-menu-content", className: classnames_1.default('p-menu-content', this.props.theme, this.props.innerClassName, { visible: this.menuVisible }), style: this.style, ref: this.setMenuContentRef }, dom_1.getDataProps(this.props)), this.props.children));
        return [menuButton, react_dom_1.default.createPortal(menuContent, appRoot)];
    }
};
__decorate([
    mobx_1.observable
], Menu.prototype, "menuActive", void 0);
__decorate([
    mobx_1.observable
], Menu.prototype, "menuVisible", void 0);
__decorate([
    mobx_1.observable
], Menu.prototype, "style", void 0);
__decorate([
    mobx_1.action.bound
], Menu.prototype, "setMenuButtonRef", null);
__decorate([
    mobx_1.action.bound
], Menu.prototype, "setMenuContentRef", null);
__decorate([
    mobx_1.action.bound
], Menu.prototype, "handleMenuClick", null);
__decorate([
    mobx_1.action.bound
], Menu.prototype, "handleKeyUp", null);
__decorate([
    mobx_1.action.bound
], Menu.prototype, "hideMenu", null);
__decorate([
    mobx_1.action
], Menu.prototype, "setStyle", null);
Menu = __decorate([
    mobx_react_1.observer
], Menu);
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map