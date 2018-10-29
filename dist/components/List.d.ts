import { Component } from 'react';
export interface ListProps {
    className?: string;
    clickable?: boolean;
    theme?: 'large' | 'no-hover' | 'large no-hover' | 'no-hover large';
}
export declare class List extends Component<ListProps> {
    render(): JSX.Element;
}
