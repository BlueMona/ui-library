import { Component } from 'react';
export interface ProgressBarBasicProps {
    className?: string;
    theme?: 'multicolor' | 'light';
    size?: 'small';
}
export declare type ProgressBarCircularProps = ProgressBarBasicProps & {
    circular: true;
};
export declare type ProgressBarIndeterminateProps = ProgressBarBasicProps & {
    circular?: false;
};
export declare type ProgressBarDeterminateProps = ProgressBarBasicProps & {
    circular?: false;
    value: number;
    max: number;
};
export declare type ProgressBarProps = ProgressBarCircularProps | ProgressBarIndeterminateProps | ProgressBarDeterminateProps;
export declare class ProgressBar extends Component<ProgressBarProps> {
    render(): JSX.Element;
}
