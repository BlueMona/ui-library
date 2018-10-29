import { Component } from 'react';
export interface ChipProps {
    className?: string;
}
export declare class Chip extends Component<ChipProps & ({
    deletable: true;
    onDeleteClick: () => void;
} | {
    deletable?: false;
})> {
    render(): JSX.Element;
}
