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
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
const dom_1 = require("./helpers/dom");
const CustomIconSvg_1 = __importDefault(require("./CustomIconSvg"));
let CustomIcon = class CustomIcon extends react_1.Component {
    constructor() {
        /*
         * Hovering: It's Weird
         *
         * Direct SVG recolouring via CSS is tricky and not the most well supported,
         * so we can't just do a :hover state.
         *
         * Instead, with hover enabled, <CustomIcon> actually shows a different SVG
         * on hover. Currently, this is done by adding a listener on a parent
         * element with class .custom-icon-hover-container
         *
         * So, in all, it's kinda clunky, but it does allow us to do things like having
         * CustomIcon change colour when MenuItem is hovered, where MenuItem is
         * way up the parent tree.
         */
        super(...arguments);
        this.hovered = false;
    }
    setIconRef(ref) {
        if (ref && this.props.hover) {
            this.hoverContainer = dom_1.getParentWithClass(ref, 'custom-icon-hover-container');
            if (this.hoverContainer) {
                this.hoverContainer.addEventListener('mouseenter', this.handleMouseEnter, false);
                this.hoverContainer.addEventListener('mouseleave', this.handleMouseLeave, false);
            }
        }
    }
    handleMouseEnter() {
        this.hovered = true;
    }
    handleMouseLeave() {
        this.hovered = false;
    }
    componentWillUnmount() {
        if (this.hoverContainer) {
            this.hoverContainer.removeEventListener('mouseenter', this.handleMouseEnter, false);
            this.hoverContainer.removeEventListener('mouseleave', this.handleMouseLeave, false);
        }
    }
    render() {
        return (react_1.default.createElement("div", { className: classnames_1.default('p-custom-icon', this.props.size, this.props.className, {
                selected: this.props.selected,
                hovered: this.hovered,
                active: this.props.active
            }), ref: this.setIconRef },
            CustomIconSvg_1.default[this.props.icon].default,
            CustomIconSvg_1.default[this.props.icon].hover || null));
    }
};
__decorate([
    mobx_1.action.bound
], CustomIcon.prototype, "setIconRef", null);
__decorate([
    mobx_1.observable
], CustomIcon.prototype, "hovered", void 0);
__decorate([
    mobx_1.action.bound
], CustomIcon.prototype, "handleMouseEnter", null);
__decorate([
    mobx_1.action.bound
], CustomIcon.prototype, "handleMouseLeave", null);
CustomIcon = __decorate([
    mobx_react_1.observer
], CustomIcon);
exports.CustomIcon = CustomIcon;
//# sourceMappingURL=CustomIcon.js.map