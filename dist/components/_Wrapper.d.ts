import React from 'react';
export declare class PeerUIWrapper extends React.Component {
    keyboardNavEnabled: boolean;
    readonly keyboardNavClass: "keyboard-nav" | undefined;
    private handleKeydown;
    private handleMousemove;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
