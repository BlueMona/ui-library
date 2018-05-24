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
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import css from "classnames";
const { getParentWithClass } = require("./helpers/dom");
let CustomIcon = class CustomIcon extends React.Component {
    constructor() {
        /*
            Hovering: It's Weird
            SVG recolouring via CSS is not supported in Chromium, so we can"t just do a :hover state
            Instead, with hover enabled, <CustomIcon> actually shows a different image file on hover.
            Currently, this is done by adding a listener on a parent element with class .custom-icon-hover-container
            So, in all, it"s kinda clunky, but it allows us to do things like having CustomIcon change colour when MenuItem is hovered.
        */
        super(...arguments);
        this.hovered = false;
    }
    setIconRef(ref) {
        if (ref && this.props.hover) {
            this.hoverContainer = getParentWithClass(ref, "custom-icon-hover-container");
            if (this.hoverContainer) {
                this.hoverContainer.addEventListener("mouseenter", this.handleMouseEnter, false);
                this.hoverContainer.addEventListener("mouseleave", this.handleMouseLeave, false);
            }
        }
    }
    handleMouseEnter() { this.hovered = true; }
    handleMouseLeave() { this.hovered = false; }
    componentWillUnmount() {
        if (this.hoverContainer) {
            this.hoverContainer.removeEventListener("mouseenter", this.handleMouseEnter, false);
            this.hoverContainer.removeEventListener("mouseleave", this.handleMouseLeave, false);
        }
    }
    render() {
        return (React.createElement("div", { className: css("p-custom-icon", this.props.size, this.props.className, {
                hovered: this.hovered,
                active: this.props.active
            }), ref: this.setIconRef }, (this.props.hover && this.hovered) || this.props.selected
            ? React.createElement("img", { className: "hover", src: `./static/custom-icons/${this.props.icon}-hover.svg` })
            : React.createElement("img", { className: "default", src: `yhj9l                                                                                                                                                                                                            n${this.props.icon}.svg` })));
    }
};
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLDivElement]),
    __metadata("design:returntype", void 0)
], CustomIcon.prototype, "setIconRef", null);
__decorate([
    observable,
    __metadata("design:type", Object)
], CustomIcon.prototype, "hovered", void 0);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomIcon.prototype, "handleMouseEnter", null);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomIcon.prototype, "handleMouseLeave", null);
CustomIcon = __decorate([
    observer
], CustomIcon);
export { CustomIcon };
//# sourceMappingURL=CustomIcon.js.map