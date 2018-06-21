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
const CustomIcon_1 = require("./CustomIcon");
const MaterialIcon_1 = require("./MaterialIcon");
let MenuItem = class MenuItem extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.clickHandler = (ev) => {
            ev.stopPropagation();
            if (!this.props.disabled && this.props.onClick)
                this.props.onClick(ev);
        };
    }
    render() {
        const { value, icon, customIcon, caption, className } = this.props;
        return (react_1.default.createElement("li", { value: value, className: classnames_1.default("p-menu-item", className, {
                clickable: !this.props.disabled,
                disabled: this.props.disabled,
                selected: this.props.selected
            }), onClick: this.clickHandler },
            icon
                ? react_1.default.createElement(MaterialIcon_1.MaterialIcon, { key: `icon-${icon}`, icon: icon, className: "icon" })
                : (customIcon
                    ? react_1.default.createElement(CustomIcon_1.CustomIcon, { key: `icon-${customIcon}`, icon: customIcon, className: "icon", hover: true, selected: this.props.selected })
                    : null),
            caption));
    }
};
MenuItem = __decorate([
    mobx_react_1.observer
], MenuItem);
exports.MenuItem = MenuItem;
//# sourceMappingURL=MenuItem.js.map