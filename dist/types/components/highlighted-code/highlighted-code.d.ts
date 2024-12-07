import { NdCode, NdDefaultThemeName } from "nodoku-core";
import { JSX } from "react";
import { NodokuComponents } from "../../index";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
export type HighlightedCodeProps = {
    key: string;
    code: NdCode;
    theme: HighlightedCodeTheme;
    defaultThemeName: NdDefaultThemeName;
};
export declare function HighlightedCodeImpl(props: HighlightedCodeProps): Promise<JSX.Element>;
