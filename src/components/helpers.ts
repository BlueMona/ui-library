// Helper functions for PeerUI library

export function getPositionInWindow(element: HTMLElement) {
    const { width, height, left, top } = element.getBoundingClientRect();

    return {
        offsetX: width / 2,
        offsetY: height / 2,
        posX: left + (width / 2),
        posY: top + (height / 2)
    };
}