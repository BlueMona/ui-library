import { Component } from 'react';
export interface ListProps {
    className?: string;
    clickable?: boolean;
    theme?: 'large' | 'no-hover';
}
export declare class List extends Component<ListProps> {
    render(): JSX.Element;
}
