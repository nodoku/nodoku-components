
import {JSX} from "react"

import {HighlightedCodeImpl, HighlightedCodeProps} from "./components/highlighted-code/highlighted-code";
import {HighlightedCodeThemeImpl} from "./components/highlighted-code/highlighted-code-theme";
import {ListCompImpl, ListCompProps} from "./components/list-comp/list-comp";
import {ListCompThemeImpl} from "./components/list-comp/list-comp-theme";
import {ParagraphsImpl, ParagraphsProps} from "./components/paragraphs/paragraphs";
import {BackgroundsImpl, BackgroundsProps} from "./components/backgrounds/backgrounds";
import {NdSkinComponentProps} from "../../nodoku-core";
import {TypographyThemeImpl} from "./components/typography/typography-theme";
import {TypographyImpl} from "./components/typography/typography";

export namespace NodokuComponents {

    export type ListCompTheme = ListCompThemeImpl;
    export type HighlightedCodeTheme = HighlightedCodeThemeImpl;
    export type TypographyTheme = TypographyThemeImpl;

    export async function HighlightedCode(props: HighlightedCodeProps): Promise<JSX.Element> {
        return HighlightedCodeImpl(props)
    }

    export async function ListComp(props: ListCompProps): Promise<JSX.Element> {
        return ListCompImpl(props);
    }

    export async function Paragraphs(props: ParagraphsProps): Promise<JSX.Element> {
        return ParagraphsImpl(props);
    }

    export async function Backgrounds(props: BackgroundsProps): Promise<JSX.Element> {
        return BackgroundsImpl(props);
    }

    export async function Typography(props: NdSkinComponentProps<TypographyTheme, void>): Promise<JSX.Element> {
        return TypographyImpl(props)
    }

}