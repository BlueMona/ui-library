/**
 * This class is intended to wrap the entire app (or at least the portion
 * of it that contains the UI) to provide some context or functionality
 * for PeerUI. Wrapping like this allows us to define certain things that
 * need to be global-ish on the client side, but affect PeerUI.
 *
 * Currently all it contains is a listener that adds or removes a
 * `.keyboard-nav` className on the wrapper div, based on user keyboard/mouse
 * input. This in turn applies outlines and other styles to active/focused
 * elements.
 *
 * Eventually there may be things like theming, or portal management, so
 * we've given it a generic name.
 */
import React from 'react';
export declare class PeerUIWrapper extends React.Component {
    keyboardNavEnabled: boolean;
    private handleKeydown;
    private handleMousemove;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
