"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
const Input_1 = require("../Input");
describe('<Input>', () => {
    it('should match the snapshot', () => {
        expect(enzyme_1.shallow(react_1.default.createElement(Input_1.Input, { value: "Hello input!" }))).toMatchSnapshot();
    });
    it('should contain a dom <input> if multiline is not specified', () => {
        expect(enzyme_1.shallow(react_1.default.createElement(Input_1.Input, null)).find('input')).toExist();
    });
    it('should contain a dom <textarea> if multiline is specified', () => {
        expect(enzyme_1.shallow(react_1.default.createElement(Input_1.Input, { multiline: true })).find('textarea')).toExist();
    });
    it('should accept an innerRef of the correct type and assign it (input)', () => {
        const ref = react_1.default.createRef();
        enzyme_1.mount(react_1.default.createElement(Input_1.Input, { innerRef: ref }));
        expect(ref.current).not.toBeNull();
    });
    it('should accept an innerRef of the correct type and assign it (textarea)', () => {
        const ref = react_1.default.createRef();
        enzyme_1.mount(react_1.default.createElement(Input_1.Input, { multiline: true, innerRef: ref }));
        expect(ref.current).not.toBeNull();
    });
});
//# sourceMappingURL=Input.js.map