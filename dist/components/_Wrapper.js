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
const mobx_1 = require("mobx");
const lodash_1 = __importDefault(require("lodash"));
class PeerUIWrapper extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.keyboardNavEnabled = true;
        this.handleKeydown = lodash_1.default.throttle((ev) => {
            if (this.keyboardNavEnabled === false && ev.keyCode === 9) {
                this.keyboardNavEnabled = true;
            }
        }, 100);
        this.handleMousemove = lodash_1.default.throttle(() => {
            if (this.keyboardNavEnabled === true) {
                this.keyboardNavEnabled = false;
            }
        }, 100);
    }
    get keyboardNavClass() {
        return this.keyboardNavEnabled ? 'keyboard-nav' : undefined;
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
        return react_1.default.createElement("div", { className: this.keyboardNavClass }, this.props.children);
    }
}
__decorate([
    mobx_1.observable
], PeerUIWrapper.prototype, "keyboardNavEnabled", void 0);
__decorate([
    mobx_1.computed
], PeerUIWrapper.prototype, "keyboardNavClass", null);
__decorate([
    mobx_1.action.bound
], PeerUIWrapper.prototype, "handleKeydown", void 0);
__decorate([
    mobx_1.action.bound
], PeerUIWrapper.prototype, "handleMousemove", void 0);
exports.PeerUIWrapper = PeerUIWrapper;
//# sourceMappingURL=_Wrapper.js.map