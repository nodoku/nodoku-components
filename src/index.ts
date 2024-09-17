
import {JSX} from "react"

import {HighlightedCodeImpl, HighlightedCodeProps} from "./components/highlighted-code/highlighted-code";
import {HighlightedCodeThemeImpl} from "./components/highlighted-code/highlighted-code-theme";
import {ListCompImpl, ListCompProps} from "./components/list-comp/list-comp";
import {ListCompThemeImpl} from "./components/list-comp/list-comp-theme";

export namespace NodokuComponents {

    export type ListCompTheme = ListCompThemeImpl;
    export type HighlightedCodeTheme = HighlightedCodeThemeImpl;

    export async function HighlightedCode(props: HighlightedCodeProps): Promise<JSX.Element> {
        return HighlightedCodeImpl(props)
    }

    export async function ListComp(props: ListCompProps): Promise<JSX.Element> {
        return ListCompImpl(props)
    }

}