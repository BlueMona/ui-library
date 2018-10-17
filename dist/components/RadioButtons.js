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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
let RadioButtons = class RadioButtons extends react_1.Component {
    constructor() {
        super(...arguments);
        this.setValue = (ev) => {
            this.props.onChange(ev.currentTarget.getAttribute('data-value'));
        };
    }
    render() {
        const { value, options } = this.props;
        const radioOptions = [];
        for (let i = 0; i < options.length; i++) {
            radioOptions.push(react_1.default.createElement("li", { key: options[i].value },
                react_1.default.createElement("span", { className: value === options[i].value
                        ? 'material-icons clickable selected'
                        : 'material-icons clickable', "data-value": options[i].value, onClick: this.setValue }, value === options[i].value
                    ? 'radio_button_checked'
                    : 'radio_button_unchecked'),
                react_1.default.createElement("span", { className: "label" }, options[i].label)));
        }
        const classNames = this.props.className
            ? `p-radio ${this.props.className}`
            : 'p-radio';
        return react_1.default.createElement("ul", { className: classNames }, radioOptions);
    }
};
RadioButtons = __decorate([
    mobx_react_1.observer
], RadioButtons);
exports.RadioButtons = RadioButtons;
//# sourceMappingURL=RadioButtons.js.map