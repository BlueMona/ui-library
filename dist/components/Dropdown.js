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
let Dropdown = class Dropdown extends react_1.default.Component {
    constructor() {
        super(...arguments);
        // Bool to show or hide the dropdown
        this.isActive = false;
        // Make the dropdown close when you click away
        this.isHover = false;
    }
    activate() {
        this.isActive = true;
    }
    // Function to change the value, relies on parent component"s onChange function
    setValue(ev) {
        this.props.onChange(ev.currentTarget.getAttribute("data-value"));
        this.isActive = false;
    }
    handleMouseEnter() {
        this.isHover = true;
    }
    handleMouseLeave() {
        this.isHover = false;
    }
    componentDidMount() {
        window.addEventListener("click", this.handleClick, false);
    }
    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick);
    }
    handleClick() {
        if (this.isActive && !this.isHover) {
            this.isActive = false;
        }
    }
    render() {
        const { value, options } = this.props;
        const dropdownOptions = [];
        const labels = {};
        for (let i = 0; i < options.length; i++) {
            dropdownOptions.push(react_1.default.createElement("li", { key: options[i].value, "data-value": options[i].value, onClick: this.setValue }, options[i].label));
            labels[options[i].value] = options[i].label;
        }
        const classNames = this.props.className
            ? `p-dropdown ${this.props.className}`
            : "p-dropdown";
        return (react_1.default.createElement("div", { className: classNames },
            this.props.label &&
                react_1.default.createElement("span", { className: "label" },
                    this.props.label,
                    ":"),
            react_1.default.createElement("div", { className: "inputs-container", onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave },
                react_1.default.createElement("div", { className: "selector clickable", onClick: this.activate },
                    react_1.default.createElement("span", { className: "input" }, labels[value]),
                    react_1.default.createElement("span", { className: "material-icons" }, "arrow_drop_down")),
                this.isActive &&
                    react_1.default.createElement("ul", { className: this.isActive ? "active" : undefined }, dropdownOptions))));
    }
};
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], Dropdown.prototype, "isActive", void 0);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dropdown.prototype, "activate", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Dropdown.prototype, "setValue", null);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], Dropdown.prototype, "isHover", void 0);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dropdown.prototype, "handleMouseEnter", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dropdown.prototype, "handleMouseLeave", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dropdown.prototype, "handleClick", null);
Dropdown = __decorate([
    mobx_react_1.observer
], Dropdown);
exports.Dropdown = Dropdown;
//# sourceMappingURL=Dropdown.js.map