import React from "react";
export interface ChipProps {
    className?: string;
}
export declare class Chip extends React.Component<ChipProps & ({
    deletable: true;
    onDeleteClick: () => void;
} | {
    deletable?: false;
})> {
    render(): JSX.Element;
}
