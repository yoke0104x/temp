import * as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__ from "react/jsx-runtime";
import "./button.css";
const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props })=>{
    const mode = primary ? 'demo-button--primary' : 'demo-button--secondary';
    return /*#__PURE__*/ (0, __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime__.jsx)("button", {
        type: "button",
        className: [
            'demo-button',
            `demo-button--${size}`,
            mode
        ].join(' '),
        style: {
            backgroundColor
        },
        ...props,
        children: label
    });
};
export { Button };
