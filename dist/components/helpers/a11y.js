"use strict";
/**
 * This class works as a combined store and helper for a11y functionality.
 * Certain components in PeerUI have a11y-specific styling,
 *  e.g. Button has unique :focus styles when inside the .keyboard-nav class
 *
 * Rather than directly manipulating the classNames on <body> or #root, this
 * helper lets the component create/store a11y state (e.g. keyboardNav) and
 * then access/modify that state directly or use the included functions.
 *
 * The idea is that it can be instantiated with `new` whever it's needed and
 * then the listeners likewise can be added/removed according to the component's
 * needs. (I imagine this will usually be tied to the component lifecycle.)
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
class A11yHelper {
    constructor() {
        this.keyboardNav = true;
        this.addListeners = () => {
            document.addEventListener('keydown', this.handleKeydown);
            document.addEventListener('mousemove', this.handleMousemove);
        };
        this.removeListeners = () => {
            document.addEventListener('keydown', this.handleKeydown);
            document.addEventListener('mousemove', this.handleMousemove);
        };
    }
    get keyboardNavClass() {
        return this.keyboardNav ? '.keyboard-nav' : null;
    }
    handleKeydown(ev) {
        //eslint-disable-next-line no-console
        console.log('handleKeydown');
        if (this.keyboardNav === false && ev.keyCode === 9) {
            this.keyboardNav = true;
        }
    }
    handleMousemove() {
        //eslint-disable-next-line no-console
        console.log('handleMousemove');
        this.keyboardNav = false;
    }
}
__decorate([
    mobx_1.observable
], A11yHelper.prototype, "keyboardNav", void 0);
__decorate([
    mobx_1.computed
], A11yHelper.prototype, "keyboardNavClass", null);
__decorate([
    mobx_1.action.bound
], A11yHelper.prototype, "handleKeydown", null);
__decorate([
    mobx_1.action.bound
], A11yHelper.prototype, "handleMousemove", null);
exports.default = A11yHelper;
//# sourceMappingURL=a11y.js.map