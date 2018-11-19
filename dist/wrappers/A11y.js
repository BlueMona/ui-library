"use strict";
/**
 * This class is intended to wrap the entire app (or at least the portion
 * of it that contains the UI) to provide some control for global-ish state
 * that affects accessibility of PeerUI components.
 *
 * Currently all it contains is listeners that add or remove a
 * `.keyboard-nav` className on the wrapper div, based on user keyboard/mouse
 * input. This in turn applies outlines and other styles to active/focused
 * elements.
 */
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
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
let A11yWrapper = class A11yWrapper extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.keyboardNavEnabled = true;
    }
    handleKeydown(ev) {
        if (this.keyboardNavEnabled === false && ev.keyCode === 9) {
            this.keyboardNavEnabled = true;
        }
    }
    handleMousemove() {
        if (this.keyboardNavEnabled === true) {
            this.keyboardNavEnabled = false;
        }
    }
    componentWillMount() {
        document.addEventListener('keydown', this.handleKeydown);
        document.addEventListener('mousemove', this.handleMousemove);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
        document.removeEventListener('mousemove', this.handleMousemove);
    }
    render() {
        return (react_1.default.createElement("div", { className: classnames_1.default('peerui-wrapper', {
                'keyboard-nav': this.keyboardNavEnabled
            }) }, this.props.children));
    }
};
__decorate([
    mobx_1.observable
], A11yWrapper.prototype, "keyboardNavEnabled", void 0);
__decorate([
    mobx_1.action.bound
], A11yWrapper.prototype, "handleKeydown", null);
__decorate([
    mobx_1.action.bound
], A11yWrapper.prototype, "handleMousemove", null);
A11yWrapper = __decorate([
    mobx_react_1.observer
], A11yWrapper);
exports.A11yWrapper = A11yWrapper;
//# sourceMappingURL=A11y.js.map