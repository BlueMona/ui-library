/**
 * This class is intended to wrap the entire app (or at least the portion
 * of it that contains the UI) to provide some control for global-ish state
 * that affects accessibility of PeerUI components.
 *
 * Currently all it contains is listeners that add or remove a
 * `.keyboard-nav` className on the wrapper div, based on user keyboard/mouse
 * input. This in turn applies outlines and other styles to active/focused
 * elements.
 */
import React from 'react';
export declare class A11yWrapper extends React.Component {
    keyboardNavEnabled: boolean;
    private handleKeydown;
    private handleMousemove;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
