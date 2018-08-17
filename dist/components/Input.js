"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
const Button_1 = require("./Button");
let Input = class Input extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.isFocused = false;
        this.inputRef = undefined;
        this.handleChange = (ev) => {
            if (!this.props.onChange)
                return;
            this.props.onChange(ev.currentTarget.value);
        };
        this.clearInput = () => {
            this.inputRef.value = '';
        };
    }
    handleFocus() {
        this.isFocused = true;
        if (!!this.props.onFocus)
            this.props.onFocus();
    }
    handleBlur() {
        this.isFocused = false;
        if (!!this.props.onBlur)
            this.props.onBlur();
    }
    setRef(ref) {
        if (ref) {
            this.inputRef = ref;
            if (this.props.autoFocus) {
                this.focus();
            }
        }
    }
    focus() {
        if (this.inputRef) {
            this.inputRef.focus();
            this.handleFocus();
        }
    }
    blur() {
        if (this.inputRef) {
            this.inputRef.blur();
            this.handleBlur();
        }
    }
    render() {
        return (react_1.default.createElement("div", { className: classnames_1.default("p-input", this.props.className, {
                "has-label": !!this.props.label,
                "has-error": !!this.props.error,
                focused: this.isFocused
            }) },
            this.props.multiline
                ? react_1.default.createElement("textarea", { placeholder: this.props.placeholder, value: this.props.value, maxLength: this.props.maxLength, onChange: this.props.onChange ? this.handleChange : undefined, onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp, onBlur: this.handleBlur, onFocus: this.handleFocus, ref: this.props.innerRef || this.setRef })
                : react_1.default.createElement("input", { placeholder: this.props.placeholder, value: this.props.value, maxLength: this.props.maxLength, onChange: this.props.onChange ? this.handleChange : undefined, onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp, onBlur: this.handleBlur, onFocus: this.handleFocus, type: this.props.type || "text", readOnly: this.props.readOnly, disabled: this.props.disabled, ref: this.props.innerRef || this.setRef }),
            this.props.label
                ? react_1.default.createElement("div", { className: classnames_1.default("label") }, this.props.label)
                : null,
            this.props.hint
                ? react_1.default.createElement("div", { className: classnames_1.default("hint", { visible: this.props.value === "" }) }, this.props.hint)
                : null,
            this.props.error ? react_1.default.createElement("div", { className: "error" }, this.props.error) : null,
            (!this.props.multiline && !!this.props.value)
                ? react_1.default.createElement(Button_1.Button, { className: "clear-button", icon: "close", onClick: this.clearInput })
                : null));
    }
};
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], Input.prototype, "isFocused", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], Input.prototype, "inputRef", void 0);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Input.prototype, "handleFocus", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Input.prototype, "handleBlur", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Input.prototype, "setRef", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Input.prototype, "focus", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Input.prototype, "blur", null);
Input = __decorate([
    mobx_react_1.observer
], Input);
exports.Input = Input;
//# sourceMappingURL=Input.js.map