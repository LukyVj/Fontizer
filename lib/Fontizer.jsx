"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
/** @jsxRuntime classic */
/** @jsx jsx */
var react_1 = require("react");
var react_2 = require("@emotion/react");
var _BASE_FONT_SIZE_CSS_VARIABLE = "--base-font-size";
var _BASE_FONT_WEIGHT_CSS_VARIABLE = "--base-font-weight";
var Icon = function () { return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fontizer-icon">
    <path d="M4 7V4h16v3M9 20h6M12 4v16"/>
  </svg>); };
var useOnClickOutside = function (ref, handler) {
    react_1.useEffect(function () {
        var listener = function (event) {
            var etn = event.target;
            if (!ref.current || ref.current.contains(etn)) {
                return;
            }
            handler(event);
        };
        if (typeof document !== "undefined") {
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
        }
        return function () {
            if (typeof document !== "undefined") {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            }
        };
    }, [ref, handler]);
};
var Fontizer = function (_a) {
    var _b = _a.position, position = _b === void 0 ? "bl" : _b, callback = _a.callback;
    var _c = react_1.useState(false), panel = _c[0], setPanel = _c[1];
    var fontizerButtonRef = react_1.useRef(null);
    var fontizerPanelRef = react_1.useRef(null);
    var testRef = react_1.useRef(null);
    if (typeof document !== "undefined") {
        var root_1 = document.documentElement;
        var docStyle = react_1.useState(getComputedStyle(root_1))[0];
        var strFontSize = docStyle.getPropertyValue(_BASE_FONT_SIZE_CSS_VARIABLE);
        var strFontWeight = docStyle.getPropertyValue(_BASE_FONT_WEIGHT_CSS_VARIABLE);
        var _d = react_1.useState(parseInt(strFontSize, 0)), baseFontSize_1 = _d[0], setBaseFontSize_1 = _d[1];
        var _e = react_1.useState(parseInt(strFontWeight, 0)), baseFontWeight_1 = _e[0], setBaseFontWeight_1 = _e[1];
        var positioner = function () {
            switch (position) {
                case "bl":
                    return "bottom: 0;left: 0;";
                case "tl":
                    return "top: 0;left: 0;";
                case "br":
                    return "bottom: 0;right: 0;";
                case "tr":
                    return "top: 0;right: 0;";
                default:
                    return "bottom:0;left:0;";
            }
        };
        var setTransform = function () {
            switch (position) {
                case "bl":
                    return "bottom left";
                case "tl":
                    return "top left";
                case "br":
                    return "bottom right";
                case "tr":
                    return "top right";
                default:
                    return "bottom left";
            }
        };
        react_1.useEffect(function () {
            if (fontizerButtonRef.current !== null &&
                fontizerPanelRef.current !== null) {
                var rect = fontizerButtonRef.current.getBoundingClientRect();
                if (position === "bl") {
                    fontizerPanelRef.current.style.bottom = rect.height * 2 + "px";
                    fontizerPanelRef.current.style.left = rect.width + "px";
                }
                if (position === "tl") {
                    fontizerPanelRef.current.style.top = rect.height * 2 + "px";
                    fontizerPanelRef.current.style.left = rect.width + "px";
                }
                if (position === "br") {
                    fontizerPanelRef.current.style.bottom = rect.height * 2 + "px";
                    fontizerPanelRef.current.style.right = rect.width + "px";
                }
                if (position === "tr") {
                    fontizerPanelRef.current.style.top = rect.height * 2 + "px";
                    fontizerPanelRef.current.style.right = rect.width + "px";
                }
            }
        }, [panel, position, docStyle]);
        react_1.useEffect(function () {
            root_1.style.setProperty(_BASE_FONT_SIZE_CSS_VARIABLE, baseFontSize_1 + "px");
            root_1.style.setProperty(_BASE_FONT_WEIGHT_CSS_VARIABLE, "" + baseFontWeight_1);
            var updatedValues = [baseFontSize_1, baseFontWeight_1];
            if (callback)
                callback(updatedValues);
        }, [
            setBaseFontSize_1,
            baseFontSize_1,
            root_1.style,
            callback,
            baseFontWeight_1,
            setBaseFontSize_1,
        ]);
        useOnClickOutside(testRef, function () { return setPanel(false); });
        return (<div ref={testRef} className="fontizer-wrapper">
        {panel && (<div ref={fontizerPanelRef} css={react_2.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n              text-align: left;\n              position: fixed;\n              background: radial-gradient(\n                559.24% 73.25% at 100% 0%,\n                #fff 0%,\n                #efefef 100%\n              );\n              box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),\n                0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n                0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n                0 12.5px 10px rgba(0, 0, 0, 0.035),\n                0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n                0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n                0 100px 80px rgba(0, 0, 0, 0.07);\n              padding: 16px;\n              border-radius: 4px;\n              animation: appear 0.4s ease forwards;\n              will-change: opacity, transform;\n              transform-origin: ", ";\n\n              @keyframes appear {\n                from {\n                  opacity: 0;\n                  transform: scale(0);\n                }\n                to {\n                  opacity: 1;\n                  transform: scale(1);\n                }\n              }\n            "], ["\n              text-align: left;\n              position: fixed;\n              background: radial-gradient(\n                559.24% 73.25% at 100% 0%,\n                #fff 0%,\n                #efefef 100%\n              );\n              box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),\n                0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n                0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n                0 12.5px 10px rgba(0, 0, 0, 0.035),\n                0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n                0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n                0 100px 80px rgba(0, 0, 0, 0.07);\n              padding: 16px;\n              border-radius: 4px;\n              animation: appear 0.4s ease forwards;\n              will-change: opacity, transform;\n              transform-origin: ", ";\n\n              @keyframes appear {\n                from {\n                  opacity: 0;\n                  transform: scale(0);\n                }\n                to {\n                  opacity: 1;\n                  transform: scale(1);\n                }\n              }\n            "])), setTransform())} className="fontizer-panel">
            <h5 css={react_2.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n                padding: 0;\n                margin: 0;\n              "], ["\n                padding: 0;\n                margin: 0;\n              "])))}>
              Global font properties
            </h5>

            <p>Size</p>
            <div css={react_2.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n              "], ["\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n              "])))}>
              <button onClick={function () {
            setBaseFontSize_1(baseFontSize_1 - 1);
        }}>
                -
              </button>
              <strong>{baseFontSize_1}px</strong>
              <button onClick={function () {
            setBaseFontSize_1(baseFontSize_1 + 1);
        }}>
                +
              </button>
            </div>

            <p>Weight</p>
            <div css={react_2.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n              "], ["\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n              "])))}>
              <button onClick={function () {
            setBaseFontWeight_1(baseFontWeight_1 - 100);
        }}>
                -
              </button>
              <strong>{baseFontWeight_1}</strong>
              <button onClick={function () {
            setBaseFontWeight_1(baseFontWeight_1 + 100);
        }}>
                +
              </button>
            </div>
          </div>)}
        <button ref={fontizerButtonRef} css={react_2.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            appearance: none;\n            border: 0;\n            background: radial-gradient(\n              559.24% 73.25% at 100% 0%,\n              #fff 0%,\n              #efefef 100%\n            );\n            border-radius: 100px;\n            box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),\n              0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n              0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n              0 12.5px 10px rgba(0, 0, 0, 0.035),\n              0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n              0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n              0 100px 80px rgba(0, 0, 0, 0.07);\n            color: #555;\n            cursor: pointer;\n            position: fixed;\n            padding: 8px;\n            margin: 16px;\n            width: 40px;\n            height: 40px;\n            box-sizing: border-box;\n            ", "\n\n            &:active {\n              transform: translateY(1px);\n              background: radial-gradient(\n                559.24% 73.25% at 100% 0%,\n                #efefef 0%,\n                #fff 100%\n              );\n            }\n          "], ["\n            appearance: none;\n            border: 0;\n            background: radial-gradient(\n              559.24% 73.25% at 100% 0%,\n              #fff 0%,\n              #efefef 100%\n            );\n            border-radius: 100px;\n            box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),\n              0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n              0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n              0 12.5px 10px rgba(0, 0, 0, 0.035),\n              0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n              0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n              0 100px 80px rgba(0, 0, 0, 0.07);\n            color: #555;\n            cursor: pointer;\n            position: fixed;\n            padding: 8px;\n            margin: 16px;\n            width: 40px;\n            height: 40px;\n            box-sizing: border-box;\n            ", "\n\n            &:active {\n              transform: translateY(1px);\n              background: radial-gradient(\n                559.24% 73.25% at 100% 0%,\n                #efefef 0%,\n                #fff 100%\n              );\n            }\n          "])), positioner())} onClick={function () { return setPanel(!panel); }} className="fontizer-button">
          <Icon />
        </button>
      </div>);
    }
    else {
        return null;
    }
};
exports["default"] = Fontizer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
