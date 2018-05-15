import React from "react";
import ReactDOM from "react-dom";

import { action, computed, observable, reaction } from "mobx";
import { observer } from "mobx-react";

import css from "classnames";
import { Button } from "./Button";

const appRoot = document.getElementById("root") as HTMLElement;

interface Properties {
    className?: string
    active: boolean
    noAnimation?: boolean
    title?: any
    theme?: string

    // Behaviour for Esc key or overlay click
    onCancel?: () => void

    // Array of Action objects, each with label, onClick, theme?, disabled?
    actions: Action[]
}

interface Action {
    label: string
    onClick: () => void
    theme?: string
    disabled?: boolean
}

@observer
export class Dialog extends React.Component<Properties> {
    // Separate "rendered" and "visible" bools to be able to use fade in/out animations
    @observable dialogRendered = false;
    @observable dialogVisible = false;

    activeReaction = undefined as any;
    mountTimeout = undefined as any;
    unmountTimeout = undefined as any; // TODO: This seems wrong

    dialogRef = undefined as any;

    componentDidMount() {
        /*
            These awkward timeouts are used to stagger the dialog"s render event from its "make visible" event.
            The .visible class is tied to the dialogVisible bool, which is what triggers the opacity transition.
            Separating these two events ensures that the transition plays.
        */
        this.activeReaction = reaction(() => this.props.active, active => {
            if (active) {
                this.setActive();
            } else {
                this.setInactive();
            }
        }, { fireImmediately: true });

        window.addEventListener("keyup", this.handleEscKey, false);
    }

    componentWillUnmount() {
        this.activeReaction();
        window.removeEventListener("keyup", this.handleEscKey);
        window.removeEventListener("keydown", this.handleTabKey);
    }

    @action.bound setActive() {
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

    @action.bound setInactive() {
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

    @action.bound setDialogRef(ref : HTMLDivElement) {
        if (ref) {
            this.dialogRef = ref;
            ref.focus();
        }
    }

    @computed get focusableElements() {
        return this.dialogRef.querySelectorAll("input:not(:disabled), textarea:not(:disabled), button:not(:disabled)");
    }

    @action.bound restrictFocus() {
        window.addEventListener("keydown", this.handleTabKey, false);
    }

    @action.bound handleEscKey(ev : any) { // TODO: deal with ev : any
        if (!this.dialogVisible || !this.dialogRendered || !this.props.onCancel) return;
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
    @action.bound handleTabKey(ev : any) {
        if (!this.dialogVisible || !this.dialogRendered) return;

        if (ev.keyCode === 9) {
            if (this.focusableElements.length === 0) {
                ev.preventDefault();
            } else {
                const first = this.focusableElements[0] as HTMLElement;
                const last = this.focusableElements[this.focusableElements.length - 1] as HTMLElement;

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
        if (!this.dialogRendered) return null;

        const { actions } = this.props;
        const buttons = [];

        if (actions) {
            for (let i = 0; i < actions.length; i++) {
                buttons.push(
                    <Button
                        key={`p-dialog-button-${i}`}
                        label={actions[i].label}
                        onClick={actions[i].onClick}
                        theme={i < actions.length - 1 ? "secondary" : undefined}
                        disabled={actions[i].disabled}
                    />
                );
            }
        }

        
        const dialogContent = (
            <div
                className={css(
                    "p-dialog-wrapper",
                    { visible: this.props.noAnimation || this.dialogVisible }
                )}
                tabIndex={0}
                ref={this.setDialogRef}
            >

                <div
                    className="p-dialog-overlay"
                    onClick={this.props.onCancel}
                />

                <dialog open
                    className={css(
                        "p-dialog",
                        this.props.className,
                        this.props.theme
                    )}
                >
                    <div className="body">
                        {this.props.title
                            ? <div className="title">{this.props.title}</div>
                            : null
                        }
                        {this.props.children}
                    </div>

                    {this.props.actions
                        ? <div className="actions">{buttons}</div>
                        : null
                    }
                </dialog>
            </div>
        );


        return ReactDOM.createPortal(
            dialogContent,
            appRoot
        );
    }
}