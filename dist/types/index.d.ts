import { JSX } from "react";
import { HighlightedCodeProps } from "./components/highlighted-code/highlighted-code";
import { HighlightedCodeThemeImpl } from "./components/highlighted-code/highlighted-code-theme";
import { ListCompProps } from "./components/list-comp/list-comp";
import { ListCompThemeImpl } from "./components/list-comp/list-comp-theme";
export declare namespace NodokuComponents {
    type ListCompTheme = ListCompThemeImpl;
    type HighlightedCodeTheme = HighlightedCodeThemeImpl;
    function HighlightedCode(props: HighlightedCodeProps): Promise<JSX.Element>;
    function ListComp(props: ListCompProps): Promise<JSX.Element>;
}
