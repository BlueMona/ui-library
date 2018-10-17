import { Component } from 'react';
export interface ProgressBarProps {
    className?: string;
    theme?: 'multicolor' | 'light';
    size?: 'small';
}
export declare class ProgressBar extends Component<ProgressBarProps & ({
    mode?: 'determinate';
    type?: 'linear';
    value: number;
    max: number;
} | {
    mode: 'indeterminate';
    type?: 'linear' | 'circular';
})> {
    render(): JSX.Element;
}
