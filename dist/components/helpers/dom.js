"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Helper unique to ui-library
function getPositionInWindow(element) {
    const { width, height, left, top } = element.getBoundingClientRect();
    return {
        offsetX: width / 2,
        offsetY: height / 2,
        posX: left + width / 2,
        posY: top + height / 2
    };
}
exports.getPositionInWindow = getPositionInWindow;
// The following 3 helpers were copied from peerio-desktop and then converted to TS
function getAttributeInParentChain(element, attribute) {
    let el = element;
    while (el) {
        const ret = el.getAttribute(attribute);
        if (ret)
            return ret;
        el = el.parentElement;
    }
    return null;
}
exports.getAttributeInParentChain = getAttributeInParentChain;
function getParentWithClass(element, className) {
    let el = element;
    while (el) {
        const attr = el.classList.contains(className);
        if (attr)
            return el;
        el = el.parentElement;
    }
    return null;
}
exports.getParentWithClass = getParentWithClass;
function getDataProps(props) {
    const dataProps = {};
    Object.keys(props)
        .filter(p => p.startsWith('data-'))
        .forEach(key => {
        dataProps[key] = props[key];
    });
    return dataProps;
}
exports.getDataProps = getDataProps;
//# sourceMappingURL=dom.js.map