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
var Icon = function () { return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return function () {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};
var Fontizer = function (_a) {
    var _b = _a.position, position = _b === void 0 ? "bl" : _b, callback = _a.callback;
    var _c = react_1.useState(false), panel = _c[0], setPanel = _c[1];
    var fontizerButtonRef = react_1.useRef(null);
    var fontizerPanelRef = react_1.useRef(null);
    var testRef = react_1.useRef(null);
    var root = document.documentElement;
    var docStyle = react_1.useState(getComputedStyle(root))[0];
    var strFontSize = docStyle.getPropertyValue("--base-font-size");
    var strFontWeight = docStyle.getPropertyValue("--base-font-weight");
    var _d = react_1.useState(parseInt(strFontSize, 0)), baseFontSize = _d[0], setBaseFontSize = _d[1];
    var _e = react_1.useState(parseInt(strFontWeight, 0)), baseFontWeight = _e[0], setBaseFontWeight = _e[1];
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
        root.style.setProperty("--base-font-size", baseFontSize + "px");
        root.style.setProperty("--base-font-weight", "" + baseFontWeight);
        var updatedValues = [baseFontSize, baseFontWeight];
        if (callback)
            callback(updatedValues);
    }, [
        setBaseFontSize,
        baseFontSize,
        root.style,
        callback,
        baseFontWeight,
        setBaseFontSize,
    ]);
    useOnClickOutside(testRef, function () { return setPanel(false); });
    return (<div ref={testRef}>
      {panel && (<div ref={fontizerPanelRef} css={react_2.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            text-align: left;\n            position: fixed;\n            background: radial-gradient(\n              559.24% 73.25% at 100% 0%,\n              #fff 0%,\n              #efefef 100%\n            );\n            box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),\n              0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n              0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n              0 12.5px 10px rgba(0, 0, 0, 0.035),\n              0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n              0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n              0 100px 80px rgba(0, 0, 0, 0.07);\n            padding: 16px;\n            border-radius: 4px;\n            animation: appear 0.4s ease forwards;\n            will-change: opacity, transform;\n            transform-origin: ", ";\n\n            @keyframes appear {\n              from {\n                opacity: 0;\n                transform: scale(0);\n              }\n              to {\n                opacity: 1;\n                transform: scale(1);\n              }\n            }\n          "], ["\n            text-align: left;\n            position: fixed;\n            background: radial-gradient(\n              559.24% 73.25% at 100% 0%,\n              #fff 0%,\n              #efefef 100%\n            );\n            box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),\n              0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n              0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n              0 12.5px 10px rgba(0, 0, 0, 0.035),\n              0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n              0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n              0 100px 80px rgba(0, 0, 0, 0.07);\n            padding: 16px;\n            border-radius: 4px;\n            animation: appear 0.4s ease forwards;\n            will-change: opacity, transform;\n            transform-origin: ", ";\n\n            @keyframes appear {\n              from {\n                opacity: 0;\n                transform: scale(0);\n              }\n              to {\n                opacity: 1;\n                transform: scale(1);\n              }\n            }\n          "])), setTransform())}>
          <h5 css={react_2.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n              padding: 0;\n              margin: 0;\n            "], ["\n              padding: 0;\n              margin: 0;\n            "])))}>
            Global font properties
          </h5>

          <p>Size</p>
          <div css={react_2.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n            "], ["\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n            "])))}>
            <button onClick={function () {
        setBaseFontSize(baseFontSize - 1);
    }}>
              -
            </button>
            <strong>{baseFontSize}px</strong>
            <button onClick={function () {
        setBaseFontSize(baseFontSize + 1);
    }}>
              +
            </button>
          </div>

          <p>Weight</p>
          <div css={react_2.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n            "], ["\n              display: flex;\n              align-items: center;\n              justify-content: space-between;\n            "])))}>
            <button onClick={function () {
        setBaseFontWeight(baseFontWeight - 100);
    }}>
              -
            </button>
            <strong>{baseFontWeight}</strong>
            <button onClick={function () {
        setBaseFontWeight(baseFontWeight + 100);
    }}>
              +
            </button>
          </div>
        </div>)}
      <button ref={fontizerButtonRef} css={react_2.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          appearance: none;\n          border: 0;\n          background: radial-gradient(\n            559.24% 73.25% at 100% 0%,\n            #fff 0%,\n            #efefef 100%\n          );\n          border-radius: 100px;\n          box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),\n            0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n            0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n            0 12.5px 10px rgba(0, 0, 0, 0.035),\n            0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n            0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n            0 100px 80px rgba(0, 0, 0, 0.07);\n          color: #555;\n          cursor: pointer;\n          position: fixed;\n          padding: 8px;\n          margin: 16px;\n          width: 40px;\n          height: 40px;\n          box-sizing: border-box;\n          ", "\n\n          &:active {\n            transform: translateY(1px);\n            background: radial-gradient(\n              559.24% 73.25% at 100% 0%,\n              #efefef 0%,\n              #fff 100%\n            );\n          }\n        "], ["\n          appearance: none;\n          border: 0;\n          background: radial-gradient(\n            559.24% 73.25% at 100% 0%,\n            #fff 0%,\n            #efefef 100%\n          );\n          border-radius: 100px;\n          box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),\n            0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n            0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n            0 12.5px 10px rgba(0, 0, 0, 0.035),\n            0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n            0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n            0 100px 80px rgba(0, 0, 0, 0.07);\n          color: #555;\n          cursor: pointer;\n          position: fixed;\n          padding: 8px;\n          margin: 16px;\n          width: 40px;\n          height: 40px;\n          box-sizing: border-box;\n          ", "\n\n          &:active {\n            transform: translateY(1px);\n            background: radial-gradient(\n              559.24% 73.25% at 100% 0%,\n              #efefef 0%,\n              #fff 100%\n            );\n          }\n        "])), positioner())} onClick={function () { return setPanel(!panel); }}>
        <Icon />
      </button>
    </div>);
};
exports["default"] = Fontizer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
