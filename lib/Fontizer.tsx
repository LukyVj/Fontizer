/** @jsx jsx */
import { useState, useRef, useEffect } from "react";
import { css, jsx } from "@emotion/react";

const Icon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 7V4h16v3M9 20h6M12 4v16" />
  </svg>
);

const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const etn: any = event.target;
      if (!ref.current || ref.current.contains(etn)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

interface FontizerProps {
  position?: "bl" | "tl" | "br" | "tr";
  callback?: Function | false;
}
const Fontizer = ({ position = "bl", callback }: FontizerProps) => {
  const [panel, setPanel] = useState(false);
  const fontizerButtonRef = useRef<HTMLButtonElement>(null);
  const fontizerPanelRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  const root = document.documentElement;
  const [docStyle] = useState(getComputedStyle(root));
  const strFontSize = docStyle.getPropertyValue("--base-font-size");
  const strFontWeight = docStyle.getPropertyValue("--base-font-weight");
  const [baseFontSize, setBaseFontSize] = useState(parseInt(strFontSize, 0));
  const [baseFontWeight, setBaseFontWeight] = useState(
    parseInt(strFontWeight, 0)
  );

  const positioner = () => {
    switch (position) {
      case "bl":
        return `bottom: 0;left: 0;`;
      case "tl":
        return `top: 0;left: 0;`;
      case "br":
        return `bottom: 0;right: 0;`;
      case "tr":
        return `top: 0;right: 0;`;
      default:
        return `bottom:0;left:0;`;
    }
  };

  const setTransform = () => {
    switch (position) {
      case "bl":
        return `bottom left`;
      case "tl":
        return `top left`;
      case "br":
        return `bottom right`;
      case "tr":
        return `top right`;
      default:
        return `bottom left`;
    }
  };

  useEffect(() => {
    if (
      fontizerButtonRef.current !== null &&
      fontizerPanelRef.current !== null
    ) {
      const rect = fontizerButtonRef.current.getBoundingClientRect();

      if (position === "bl") {
        fontizerPanelRef.current.style.bottom = `${rect.height * 2}px`;
        fontizerPanelRef.current.style.left = `${rect.width}px`;
      }
      if (position === "tl") {
        fontizerPanelRef.current.style.top = `${rect.height * 2}px`;
        fontizerPanelRef.current.style.left = `${rect.width}px`;
      }
      if (position === "br") {
        fontizerPanelRef.current.style.bottom = `${rect.height * 2}px`;
        fontizerPanelRef.current.style.right = `${rect.width}px`;
      }
      if (position === "tr") {
        fontizerPanelRef.current.style.top = `${rect.height * 2}px`;
        fontizerPanelRef.current.style.right = `${rect.width}px`;
      }
    }
  }, [panel, position, docStyle]);

  useEffect(() => {
    root.style.setProperty("--base-font-size", `${baseFontSize}px`);
    root.style.setProperty("--base-font-weight", `${baseFontWeight}`);
    const updatedValues = [baseFontSize, baseFontWeight];
    if (callback) callback(updatedValues);
  }, [
    setBaseFontSize,
    baseFontSize,
    root.style,
    callback,
    baseFontWeight,
    setBaseFontSize,
  ]);

  useOnClickOutside(testRef, () => setPanel(false));

  return (
    <div ref={testRef}>
      {panel && (
        <div
          ref={fontizerPanelRef}
          css={css`
            text-align: left;
            position: fixed;
            background: radial-gradient(
              559.24% 73.25% at 100% 0%,
              #fff 0%,
              #efefef 100%
            );
            box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),
              0 2.8px 2.2px rgba(0, 0, 0, 0.02),
              0 6.7px 5.3px rgba(0, 0, 0, 0.028),
              0 12.5px 10px rgba(0, 0, 0, 0.035),
              0 22.3px 17.9px rgba(0, 0, 0, 0.042),
              0 41.8px 33.4px rgba(0, 0, 0, 0.05),
              0 100px 80px rgba(0, 0, 0, 0.07);
            padding: 16px;
            border-radius: 4px;
            animation: appear 0.4s ease forwards;
            will-change: opacity, transform;
            transform-origin: ${setTransform()};

            @keyframes appear {
              from {
                opacity: 0;
                transform: scale(0);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}
        >
          <h5
            css={css`
              padding: 0;
              margin: 0;
            `}
          >
            Global font properties
          </h5>

          <p>Size</p>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <button
              onClick={() => {
                setBaseFontSize(baseFontSize - 1);
              }}
            >
              -
            </button>
            <strong>{baseFontSize}px</strong>
            <button
              onClick={() => {
                setBaseFontSize(baseFontSize + 1);
              }}
            >
              +
            </button>
          </div>

          <p>Weight</p>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <button
              onClick={() => {
                setBaseFontWeight(baseFontWeight - 100);
              }}
            >
              -
            </button>
            <strong>{baseFontWeight}</strong>
            <button
              onClick={() => {
                setBaseFontWeight(baseFontWeight + 100);
              }}
            >
              +
            </button>
          </div>
        </div>
      )}
      <button
        ref={fontizerButtonRef}
        css={css`
          appearance: none;
          border: 0;
          background: radial-gradient(
            559.24% 73.25% at 100% 0%,
            #fff 0%,
            #efefef 100%
          );
          border-radius: 100px;
          box-shadow: 0 1px 0px rgba(0, 0, 0, 0.05),
            0 2.8px 2.2px rgba(0, 0, 0, 0.02),
            0 6.7px 5.3px rgba(0, 0, 0, 0.028),
            0 12.5px 10px rgba(0, 0, 0, 0.035),
            0 22.3px 17.9px rgba(0, 0, 0, 0.042),
            0 41.8px 33.4px rgba(0, 0, 0, 0.05),
            0 100px 80px rgba(0, 0, 0, 0.07);
          color: #555;
          cursor: pointer;
          position: fixed;
          padding: 8px;
          margin: 16px;
          width: 40px;
          height: 40px;
          box-sizing: border-box;
          ${positioner()}

          &:active {
            transform: translateY(1px);
            background: radial-gradient(
              559.24% 73.25% at 100% 0%,
              #efefef 0%,
              #fff 100%
            );
          }
        `}
        onClick={() => setPanel(!panel)}
      >
        <Icon />
      </button>
    </div>
  );
};

export default Fontizer;
