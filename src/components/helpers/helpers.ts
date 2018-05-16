// Helper unique to ui-library
export function getPositionInWindow(element: HTMLElement) {
    const { width, height, left, top } = element.getBoundingClientRect();

    return {
        offsetX: width / 2,
        offsetY: height / 2,
        posX: left + (width / 2),
        posY: top + (height / 2)
    };
}

// The following 3 helpers are copied from peerio-desktop and then converted to TS
export function getAttributeInParentChain(element: HTMLElement, attribute: string): string | null {
    let el = element as HTMLElement | null;

    while (el) {
        const ret = el.getAttribute(attribute);
        if (ret) return ret;
        el = el.parentElement;
    }
    return null;
}

export function getParentWithClass(element: HTMLElement, className: string): HTMLElement | null {
    let el = element as HTMLElement | null;

    while (el) {
        const attr = el.classList.contains(className);
        if (attr) return el;
        el = el.parentElement;
    }
    return null;
}

export function getDataProps(props: {[key: string]: string}) {

    const dataProps = {} as {[key: string]: string};

    Object.keys(props).filter(p => p.startsWith('data-')).forEach(key => {
        dataProps[key] = props[key];
    });

    return dataProps;
}
