"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
function Button({ children, handleClick }) {
    return (<button onClick={handleClick} className="button is-primary">
        {children}
        </button>);
}
//# sourceMappingURL=Button.js.map