/*
    To use this component, place <Tooltip> in the render of any component.
    To prevent cutoffs in elements with `overflow:hidden`, tooltip is rendered `position:fixed`.
    So, tooltip"s position is calculated based on parentElement"s.
    This means that tooltip"s position will be relative to position and width/height of its ~immediate parent~.

    This is important for 2 reasons:
    1. Make sure parentElement"s width/height matches the actual size of the entire parent component.
    2. Known Chromium bug: parent with `transform:translate` will mess up positioning of fixed-position children.

    See <Avatar> for example use.
*/
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
import { getPositionInWindow } from "./helpers/dom";
let Tooltip = class Tooltip extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = undefined; // TODO: another ref placeholder
        this.isVisible = false;
        this.style = {
            left: "",
            top: ""
        };
    }
    setRef(ref) {
        if (ref) {
            this.ref = ref;
            if (!ref.parentElement)
                return;
            ref.parentElement.addEventListener("mouseenter", this.showTooltip, false);
            ref.parentElement.addEventListener("mouseleave", this.hideTooltip, false);
            ref.parentElement.addEventListener("click", this.hideTooltip, false);
        }
    }
    componentWillUnmount() {
        if (!this.ref || !this.ref.parentElement)
            return;
        this.ref.parentElement.removeEventListener("mouseenter", this.showTooltip);
        this.ref.parentElement.removeEventListener("mouseleave", this.hideTooltip);
        this.ref.parentElement.removeEventListener("click", this.hideTooltip);
    }
    showTooltip() {
        if (!this.ref)
            return;
        const tooltipParent = this.ref.parentElement;
        const { width, height } = this.ref.getBoundingClientRect();
        const { offsetX, offsetY, posX, posY } = getPositionInWindow(tooltipParent);
        const margin = 5;
        switch (this.props.position) {
            default:
            case "top":
                this.style.left = `${posX - width / 2}px`;
                this.style.top = `${posY - offsetY - height - margin}px`;
                break;
            case "bottom":
                this.style.left = `${posX - width / 2}px`;
                this.style.top = `${posY + offsetY + margin}px`;
                break;
            case "left":
                this.style.left = `${posX - offsetX - width - margin}px`;
                this.style.top = `${posY - height / 2}px`;
                break;
            case "right":
                this.style.left = `${posX + offsetX + margin}px`;
                this.style.top = `${posY - height / 2}px`;
                break;
        }
        this.isVisible = true;
    }
    hideTooltip() {
        this.isVisible = false;
    }
    render() {
        return (React.createElement("div", { ref: this.setRef, className: css("p-tooltip", this.props.className, this.props.size), style: this.isVisible
                ? this.style
                : {
                    /*
                        Need to move hidden tooltip to top-left in order to calculate width/height correctly.
                        (Tooltip near right/bottom of screen may get cut off, which affects calculated bounding box)
                    */
                    left: 0,
                    top: 0,
                    visibility: "hidden"
                } }, this.props.text));
    }
};
__decorate([
    observable,
    __metadata("design:type", Object)
], Tooltip.prototype, "ref", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], Tooltip.prototype, "isVisible", void 0);
__decorate([
    observable,
    __metadata("design:type", Object)
], Tooltip.prototype, "style", void 0);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLDivElement]),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "setRef", null);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "showTooltip", null);
__decorate([
    action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "hideTooltip", null);
Tooltip = __decorate([
    observer
], Tooltip);
export { Tooltip };
//# sourceMappingURL=Tooltip.js.map