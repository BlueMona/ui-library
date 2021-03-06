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
const react_dom_1 = __importDefault(require("react-dom"));
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const classnames_1 = __importDefault(require("classnames"));
const Button_1 = require("./Button");
// FIXME: remove! untestable
const appRoot = document.getElementById('root');
// TODO: there's quite a bit of incidental state and behaviour that's difficult
// to reason about here based around intermediate animation states. it could use
// a closer audit and a pass to simplify it, possibly integrating a react
// library to allow for more declarative animations. (or maybe a future
// css-in-js solution could directly drive animation with less state...?)
/**
 * Usage notes from discussion with Lucas on 30/08/2018: can be invoked either
 * by passing in the prop `active`, OR by getting a ref and calling
 * `showWithoutAnimation`, `setActive()`.
 *
 * (There's at least one story to refactor/audit this:
 * https://app.clubhouse.io/peerio/story/8020/desktop-dialog-manager)
 *
 * WARNING: this component uses the <dialog> dom element, only available in
 * chrome 37+/firefox 53+. it may not be available in other environments.
 */
let Dialog = class Dialog extends react_1.Component {
    // TODO: there's quite a bit of incidental state and behaviour that's difficult
    // to reason about here based around intermediate animation states. it could use
    // a closer audit and a pass to simplify it, possibly integrating a react
    // library to allow for more declarative animations. (or maybe a future
    // css-in-js solution could directly drive animation with less state...?)
    /**
     * Usage notes from discussion with Lucas on 30/08/2018: can be invoked either
     * by passing in the prop `active`, OR by getting a ref and calling
     * `showWithoutAnimation`, `setActive()`.
     *
     * (There's at least one story to refactor/audit this:
     * https://app.clubhouse.io/peerio/story/8020/desktop-dialog-manager)
     *
     * WARNING: this component uses the <dialog> dom element, only available in
     * chrome 37+/firefox 53+. it may not be available in other environments.
     */
    constructor() {
        super(...arguments);
        // Separate "rendered" and "visible" bools to be able to use fade in/out animations
        this.dialogRendered = false;
        this.dialogVisible = false;
        this.activeReaction = null;
        this.mountTimeout = null;
        this.unmountTimeout = null;
    }
    componentDidMount() {
        /*
            These awkward timeouts are used to stagger the dialog's render event
            from its "make visible" event. The .visible class is tied to the
            dialogVisible bool, which is what triggers the opacity transition.
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
            window.removeEventListener('keyup', this.handleEscKey);
            window.removeEventListener('keydown', this.handleTabKey);
        }
        if (this.activeReaction)
            this.activeReaction();
    }
    setActive() {
        if (this.unmountTimeout) {
            clearTimeout(this.unmountTimeout);
            this.unmountTimeout = null;
        }
        this.dialogRendered = true;
        window.addEventListener('keyup', this.handleEscKey, false);
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
        window.removeEventListener('keyup', this.handleEscKey);
        window.removeEventListener('keydown', this.handleTabKey);
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
        return this.dialogRef.querySelectorAll('input:not(:disabled), textarea:not(:disabled), button:not(:disabled)');
    }
    restrictFocus() {
        window.addEventListener('keydown', this.handleTabKey, false);
    }
    handleEscKey(ev) {
        if (!this.dialogVisible || !this.dialogRendered || !this.props.onCancel)
            return;
        if (ev.keyCode === 27) {
            this.props.onCancel();
        }
    }
    /*
        We need to restrict focus to the dialog when it's visible.
  
        Clicking outside dialog closes it, so that's OK, but it's still possible
        to use Tab to escape. For a11y we need to keep Tab key functionality, but
        restrict it to the contents of the dialog. This function makes Tab jump
        back to first focusable element if the last one is currently focused, or
        to the last element if Shift+Tab while the first is focused.
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
        const { actions, className, size, theme, headerImage, noAnimation, children, title, onCancel } = this.props;
        const buttons = [];
        if (actions) {
            for (let i = 0; i < actions.length; i++) {
                buttons.push(react_1.default.createElement(Button_1.Button, { key: `p-dialog-button-${i}`, label: actions[i].label, onClick: actions[i].onClick, theme: i < actions.length - 1 ? 'secondary' : undefined, disabled: actions[i].disabled }));
            }
        }
        const dialogContent = (react_1.default.createElement("div", { className: classnames_1.default('p-dialog-wrapper', {
                visible: noAnimation || this.dialogVisible,
                'with-header-image': !!headerImage
            }), tabIndex: 0, ref: this.setDialogRef },
            react_1.default.createElement("div", { className: "p-dialog-overlay", onClick: onCancel }),
            react_1.default.createElement("dialog", { open: true, className: classnames_1.default('p-dialog', className, size, theme) },
                headerImage ? (react_1.default.createElement("div", { className: "header-image" },
                    react_1.default.createElement("img", { src: headerImage, draggable: false }))) : null,
                react_1.default.createElement("div", { className: "body" },
                    title ? react_1.default.createElement("div", { className: "title" }, title) : null,
                    children),
                actions ? react_1.default.createElement("div", { className: "actions" }, buttons) : null)));
        return react_dom_1.default.createPortal(dialogContent, appRoot);
    }
};
__decorate([
    mobx_1.observable
], Dialog.prototype, "dialogRendered", void 0);
__decorate([
    mobx_1.observable
], Dialog.prototype, "dialogVisible", void 0);
__decorate([
    mobx_1.observable.ref
], Dialog.prototype, "dialogRef", void 0);
__decorate([
    mobx_1.action.bound
], Dialog.prototype, "setActive", null);
__decorate([
    mobx_1.action.bound
], Dialog.prototype, "setInactive", null);
__decorate([
    mobx_1.action.bound
], Dialog.prototype, "setDialogRef", null);
__decorate([
    mobx_1.action.bound
], Dialog.prototype, "showWithoutAnimation", null);
__decorate([
    mobx_1.action.bound
], Dialog.prototype, "hideWithoutAnimation", null);
__decorate([
    mobx_1.computed
], Dialog.prototype, "focusableElements", null);
__decorate([
    mobx_1.action.bound
], Dialog.prototype, "restrictFocus", null);
__decorate([
    mobx_1.action.bound
], Dialog.prototype, "handleEscKey", null);
__decorate([
    mobx_1.action.bound
], Dialog.prototype, "handleTabKey", null);
Dialog = __decorate([
    mobx_react_1.observer
], Dialog);
exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map