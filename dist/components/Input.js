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
const Button_1 = require("./Button");
const MaterialIcon_1 = require("./MaterialIcon");
let Input = class Input extends react_1.Component {
    constructor() {
        super(...arguments);
        this.isFocused = false;
        this.inputRef = null;
        this.handleChange = (ev) => {
            if (!this.props.onChange)
                return;
            this.props.onChange(ev.currentTarget.value);
        };
        this.clearInput = () => {
            if (this.props.onClear)
                this.props.onClear();
        };
    }
    componentDidMount() {
        if (this.props.autoFocus)
            setTimeout(() => {
                if (!this.inputRef)
                    return;
                // focus does not properly work without setTimeout
                this.inputRef.focus();
            }, 0);
    }
    get showClearButton() {
        return !this.props.multiline && !!this.props.value && !!this.props.onClear;
    }
    handleFocus() {
        if (this.props.onFocus)
            this.props.onFocus();
        this.isFocused = true;
    }
    handleBlur() {
        if (this.props.onBlur)
            this.props.onBlur();
        this.isFocused = false;
    }
    setRef(ref) {
        this.inputRef = ref;
    }
    focus() {
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }
    blur() {
        if (this.inputRef) {
            this.inputRef.blur();
            this.handleBlur();
        }
    }
    render() {
        return (react_1.default.createElement("div", { className: classnames_1.default('p-input', this.props.className, this.props.theme, {
                'has-label': !!this.props.label,
                'has-error': !!this.props.error,
                'has-clear-button': this.showClearButton,
                focused: this.isFocused
            }) },
            this.props.label ? (react_1.default.createElement("div", { className: classnames_1.default('label') }, this.props.label)) : null,
            this.props.multiline ? (react_1.default.createElement("textarea", { placeholder: this.props.placeholder, value: this.props.value, maxLength: this.props.maxLength, onChange: this.props.onChange ? this.handleChange : undefined, onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp, onBlur: this.handleBlur, onFocus: this.handleFocus, ref: this.setRef })) : (react_1.default.createElement("input", { placeholder: this.props.placeholder, value: this.props.value, maxLength: this.props.maxLength, onChange: this.props.onChange ? this.handleChange : undefined, onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp, onBlur: this.handleBlur, onFocus: this.handleFocus, type: this.props.type || 'text', readOnly: this.props.readOnly, disabled: this.props.disabled, ref: this.setRef })),
            this.showClearButton ? (react_1.default.createElement(Button_1.Button, { tabIndex: -1, className: "clear-button", icon: "close", onClick: this.clearInput })) : null,
            this.props.noHelperText ? null : (react_1.default.createElement("div", { className: classnames_1.default('hint-or-error', {
                    error: !!this.props.error,
                    hint: !!this.props.hint,
                    visible: !!this.props.error || (!!this.props.hint && this.isFocused)
                }) }, this.props.error ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(MaterialIcon_1.MaterialIcon, { icon: "error_outline" }),
                this.props.error)) : this.props.hint ? (this.props.hint) : null))));
    }
};
__decorate([
    mobx_1.observable
], Input.prototype, "isFocused", void 0);
__decorate([
    mobx_1.observable
], Input.prototype, "inputRef", void 0);
__decorate([
    mobx_1.computed
], Input.prototype, "showClearButton", null);
__decorate([
    mobx_1.action.bound
], Input.prototype, "handleFocus", null);
__decorate([
    mobx_1.action.bound
], Input.prototype, "handleBlur", null);
__decorate([
    mobx_1.action.bound
], Input.prototype, "setRef", null);
__decorate([
    mobx_1.action.bound
], Input.prototype, "focus", null);
__decorate([
    mobx_1.action.bound
], Input.prototype, "blur", null);
Input = __decorate([
    mobx_react_1.observer
], Input);
exports.Input = Input;
//# sourceMappingURL=Input.js.map