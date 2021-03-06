import * as React from "react";

export interface FontizerProps extends React.Props<Fontizer> {
  position: "bl" | "br" | "tl" | "tr";
  callback: Function;
  variables?: {
    size: string;
    weight: string;
  };
}

declare class Fontizer extends React.Component<FontizerProps, any> {}

declare module "fontizer" {}

export default Fontizer;
