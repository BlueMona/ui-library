import React from 'react';
import { ActionProps } from './helpers/interfaces';
export interface DialogProps {
    actions: ActionProps[];
    active: boolean;
    className?: string;
    noAnimation?: boolean;
    onCancel?: () => void;
    size?: 'small';
    theme?: 'warning' | 'error' | 'primary';
    title?: any;
    headerImage?: string;
}
export declare class Dialog extends React.Component<DialogProps> {
    dialogRendered: boolean;
    dialogVisible: boolean;
    activeReaction: any;
    mountTimeout: any;
    unmountTimeout: any;
    dialogRef: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    setActive(): void;
    setInactive(): void;
    setDialogRef(ref: HTMLDivElement): void;
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
    readonly focusableElements: any;
    restrictFocus(): void;
    handleEscKey(ev: KeyboardEvent): void;
    handleTabKey(ev: KeyboardEvent): void;
    render(): React.ReactPortal | null;
}
