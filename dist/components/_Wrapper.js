"use strict";
/**
 * This class is intended to wrap the entire app (or at least the portion
 * of it that contains the UI) to provide some context or functionality
 * for PeerUI. Wrapping like this allows us to define certain things that
 * need to be global-ish on the client side, but affect PeerUI.
 *
 * Currently all it contains is a listener that adds or removes a
 * `.keyboard-nav` className on the wrapper div, based on user keyboard/mouse
 * input. This in turn applies outlines and other styles to active/focused
 * elements.
 *
 * Eventually there may be things like theming, or portal management, so
 * we've given it a generic name.
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
let PeerUIWrapper = class PeerUIWrapper extends react_1.default.Component {
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
], PeerUIWrapper.prototype, "keyboardNavEnabled", void 0);
__decorate([
    mobx_1.action.bound
], PeerUIWrapper.prototype, "handleKeydown", null);
__decorate([
    mobx_1.action.bound
], PeerUIWrapper.prototype, "handleMousemove", null);
PeerUIWrapper = __decorate([
    mobx_react_1.observer
], PeerUIWrapper);
exports.PeerUIWrapper = PeerUIWrapper;
//# sourceMappingURL=_Wrapper.js.map