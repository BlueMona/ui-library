export declare function getPositionInWindow(element: HTMLElement): {
    offsetX: number;
    offsetY: number;
    posX: number;
    posY: number;
};
export declare function getAttributeInParentChain(element: HTMLElement, attribute: string): string | null;
export declare function getParentWithClass(element: HTMLElement, className: string): HTMLElement | null;
export declare function getDataProps(props: {
    [key: string]: any;
}): {
    [key: string]: string;
};
