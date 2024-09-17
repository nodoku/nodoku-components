import { NdCode, NdDefaultThemeName } from "nodoku-core";
import { JSX } from "react";
import { HighlightedCodeThemeImpl } from "./highlighted-code-theme";
export declare class HighlightedCodeProps {
    code: NdCode;
    theme: HighlightedCodeThemeImpl;
    defaultThemeName: NdDefaultThemeName;
    constructor(code: NdCode, theme: HighlightedCodeThemeImpl, defaultThemeName: NdDefaultThemeName);
}
export declare function HighlightedCodeImpl(props: HighlightedCodeProps): Promise<JSX.Element>;
