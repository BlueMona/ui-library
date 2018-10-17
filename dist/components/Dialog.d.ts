import React, { Component } from 'react';
import { ActionProps } from './helpers/interfaces';
export interface DialogProps {
    /** Buttons at the bottom of the dialog, if any */
    actions?: ActionProps[];
    /** Boolean in the parent that will trigger dialog on `true`, hide on `false`. */
    active: boolean;
    /** Additional classname(s) applied to the inner <dialog> element. */
    className?: string;
    /** No fade in/out transition e.g. when opening a dialog from another dialog */
    noAnimation?: boolean;
    /** Behaviour for Esc key or overlay click */
    onCancel?: () => void;
    /** "Small" sets width to 360px. Default is 50vw. */
    size?: 'small';
    /** Adds a stripe to the top of the dialog. */
    theme?: 'warning' | 'error' | 'primary';
    /** Title displayed at the top of the dialog. */
    title?: string;
    /** URL to header image */
    headerImage?: string;
}
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
export declare class Dialog extends Component<DialogProps> {
    private dialogRendered;
    private dialogVisible;
    private activeReaction;
    private mountTimeout;
    private unmountTimeout;
    private dialogRef?;
    componentDidMount(): void;
    componentWillUnmount(): void;
    setActive(): void;
    setInactive(): void;
    private setDialogRef;
    /**
     * Renders and shows dialog immediately
     * Note: be careful when using it together with "visible" property
     */
    showWithoutAnimation(): void;
    /**
     * Unrenders dialog immediately
     * Note: be careful when using it together with "visible" property
     */
    hideWithoutAnimation(): void;
    readonly focusableElements: NodeListOf<Element>;
    restrictFocus(): void;
    handleEscKey(ev: KeyboardEvent): void;
    handleTabKey(ev: KeyboardEvent): void;
    render(): React.ReactPortal | null;
}
