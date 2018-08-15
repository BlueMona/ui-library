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
const react_dom_1 = __importDefault(require("react-dom"));
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
const Button_1 = require("./Button");
const appRoot = document.getElementById("root");
let Dialog = class Dialog extends react_1.default.Component {
    constructor() {
        super(...arguments);
        // Separate "rendered" and "visible" bools to be able to use fade in/out animations
        this.dialogRendered = false;
        this.dialogVisible = false;
        this.activeReaction = undefined;
        this.mountTimeout = undefined;
        this.unmountTimeout = undefined; // TODO: This seems wrong
        this.dialogRef = undefined;
    }
    componentDidMount() {
        /*
            These awkward timeouts are used to stagger the dialog"s render event from its "make visible" event.
            The .visible class is tied to the dialogVisible bool, which is what triggers the opacity transition.
            Separating these two events ensures that the transition plays.
        */
        this.activeReaction = mobx_1.reaction(() => this.props.active, active => {
            if (active) {
                this.setActive();
            }
            else {
                this.setInactive();
            }
        }, { fireImmediately: true });
    }
    componentWillUnmount() {
        if (this.dialogRendered) {
            window.removeEventListener("keyup", this.handleEscKey);
            window.removeEventListener("keydown", this.handleTabKey);
        }
        this.activeReaction();
    }
    setActive() {
        if (this.unmountTimeout) {
            clearTimeout(this.unmountTimeout);
            this.unmountTimeout = null;
        }
        this.dialogRendered = true;
        window.addEventListener("keyup", this.handleEscKey, false);
        this.restrictFocus();
        this.mountTimeout = setTimeout(() => {
            this.dialogVisible = true;
            this.mountTimeout = null;
        }, 1);
    }
    setInactive() {
        if (this.mountTimeout) {
            clearTimeout(this.mountTimeout);
            this.mountTimeout = null;
        }
        this.dialogVisible = false;
        window.removeEventListener("keyup", this.handleEscKey);
        window.removeEventListener("keydown", this.handleTabKey);
        this.unmountTimeout = setTimeout(() => {
            this.dialogRendered = false;
            this.unmountTimeout = null;
        }, 200);
    }
    setDialogRef(ref) {
        if (ref) {
            this.dialogRef = ref;
            ref.focus();
        }
    }
    /**
     * Renders and shows dialog immediately
     * Note: be careful when using it together with "visible" property
     */
    showWithoutAnimation() {
        this.dialogRendered = true;
        this.dialogVisible = true;
    }
    /**
     * Unrenders dialog immediately
     * Note: be careful when using it together with "visible" property
     */
    hideWithoutAnimation() {
        this.dialogRendered = false;
        this.dialogVisible = false;
    }
    get focusableElements() {
        return this.dialogRef.querySelectorAll("input:not(:disabled), textarea:not(:disabled), button:not(:disabled)");
    }
    restrictFocus() {
        window.addEventListener("keydown", this.handleTabKey, false);
    }
    handleEscKey(ev) {
        if (!this.dialogVisible || !this.dialogRendered || !this.props.onCancel)
            return;
        if (ev.keyCode === 27) {
            this.props.onCancel();
        }
    }
    /*
        We need to restrict focus to the dialog when it"s visible.
        Clicking outside dialog closes it, so that"s OK, but it"s still possible to use Tab to escape.
        For a11y we need to keep Tab key functionality, but restrict it to the contents of the dialog.
        This function makes Tab jump back to first focusable element if the last one is currently focused,
        or to the last element if Shift+Tab while the first is focused.
    */
    handleTabKey(ev) {
        if (!this.dialogVisible || !this.dialogRendered)
            return;
        if (ev.keyCode === 9) {
            if (this.focusableElements.length === 0) {
                ev.preventDefault();
            }
            else {
                const first = this.focusableElements[0];
                const last = this.focusableElements[this.focusableElements.length - 1];
                if (ev.shiftKey && document.activeElement === first) {
                    ev.preventDefault();
                    last.focus();
                }
                if (!ev.shiftKey && document.activeElement === last) {
                    ev.preventDefault();
                    first.focus();
                }
            }
        }
    }
    render() {
        if (!this.dialogRendered)
            return null;
        const { actions } = this.props;
        const buttons = [];
        if (actions) {
            for (let i = 0; i < actions.length; i++) {
                buttons.push(react_1.default.createElement(Button_1.Button, { key: `p-dialog-button-${i}`, label: actions[i].label, onClick: actions[i].onClick, theme: i < actions.length - 1 ? "secondary" : undefined, disabled: actions[i].disabled }));
            }
        }
        const dialogContent = (react_1.default.createElement("div", { className: classnames_1.default("p-dialog-wrapper", {
                visible: this.props.noAnimation || this.dialogVisible,
                'with-header-image': !!this.props.headerImage
            }), tabIndex: 0, ref: this.setDialogRef },
            react_1.default.createElement("div", { className: "p-dialog-overlay", onClick: this.props.onCancel }),
            react_1.default.createElement("dialog", { open: true, className: classnames_1.default("p-dialog", this.props.className, this.props.size, this.props.theme) },
                this.props.headerImage
                    ? react_1.default.createElement("div", { className: "header-image" },
                        react_1.default.createElement("img", { src: this.props.headerImage }))
                    : null,
                react_1.default.createElement("div", { className: "body" },
                    this.props.title
                        ? react_1.default.createElement("div", { className: "title" }, this.props.title)
                        : null,
                    this.props.children),
                this.props.actions
                    ? react_1.default.createElement("div", { className: "actions" }, buttons)
                    : null)));
        return react_dom_1.default.createPortal(dialogContent, appRoot);
    }
};
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], Dialog.prototype, "dialogRendered", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], Dialog.prototype, "dialogVisible", void 0);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dialog.prototype, "setActive", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dialog.prototype, "setInactive", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLDivElement]),
    __metadata("design:returntype", void 0)
], Dialog.prototype, "setDialogRef", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dialog.prototype, "showWithoutAnimation", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dialog.prototype, "hideWithoutAnimation", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Dialog.prototype, "focusableElements", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Dialog.prototype, "restrictFocus", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], Dialog.prototype, "handleEscKey", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], Dialog.prototype, "handleTabKey", null);
Dialog = __decorate([
    mobx_react_1.observer
], Dialog);
exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map