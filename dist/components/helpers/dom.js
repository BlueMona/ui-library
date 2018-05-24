// Helper unique to ui-library
export function getPositionInWindow(element) {
    const { width, height, left, top } = element.getBoundingClientRect();
    return {
        offsetX: width / 2,
        offsetY: height / 2,
        posX: left + (width / 2),
        posY: top + (height / 2)
    };
}
// The following 3 helpers were copied from peerio-desktop and then converted to TS
export function getAttributeInParentChain(element, attribute) {
    let el = element;
    while (el) {
        const ret = el.getAttribute(attribute);
        if (ret)
            return ret;
        el = el.parentElement;
    }
    return null;
}
export function getParentWithClass(element, className) {
    let el = element;
    while (el) {
        const attr = el.classList.contains(className);
        if (attr)
            return el;
        el = el.parentElement;
    }
    return null;
}
export function getDataProps(props) {
    const dataProps = {};
    Object.keys(props).filter(p => p.startsWith('data-')).forEach(key => {
        dataProps[key] = props[key];
    });
    return dataProps;
}
//# sourceMappingURL=dom.js.map