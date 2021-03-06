import { Component } from 'react';
export interface TooltipProps {
    className?: string;
    text?: string | JSX.Element;
    position?: 'top' | 'right' | 'bottom' | 'left';
    size?: 'small';
}
export declare class Tooltip extends Component<TooltipProps> {
    ref: any;
    isVisible: boolean;
    style: {
        left: string;
        top: string;
    };
    setRef(ref: HTMLDivElement): void;
    componentWillUnmount(): void;
    showTooltip(): void;
    hideTooltip(): void;
    render(): JSX.Element;
}
