import React, { Component } from 'react';
import { ContactProps } from './helpers/interfaces';
export interface AvatarProps {
    className?: string;
    /** Contact object */
    contact: ContactProps;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'full';
    /** Set true to have a tooltip, which will show user"s username */
    tooltip?: boolean;
    /**
     * `clickable` is only for styling (hover effect), which is automatically
     * applied if !!onClick i.e. only need to put `clickable` if you want the
     * hover effect, but Avatar itself has no onClick event
     */
    clickable?: boolean;
    onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void;
}
export declare class Avatar extends Component<AvatarProps> {
    render(): JSX.Element;
}
