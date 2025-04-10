
import {JSX} from "react"

import {HighlightedCodeImpl, HighlightedCodePropsImpl} from "./components/highlighted-code/highlighted-code";
import {HighlightedCodeThemeImpl} from "./components/highlighted-code/highlighted-code-theme";
import {ListCompImpl, ListCompPropsImpl} from "./components/list-comp/list-comp";
import {ListCompThemeImpl} from "./components/list-comp/list-comp-theme";
import {ParagraphsImpl, ParagraphsPropsImpl} from "./components/paragraphs/paragraphs";
import {BackgroundsImpl, BackgroundsPropsImpl} from "./components/backgrounds/backgrounds";
import {NdSkinComponentProps} from "nodoku-core";
import {TypographyThemeImpl} from "./components/typography/typography-theme";
import {TypographyImpl} from "./components/typography/typography";
import {imageProviderImpl} from "./components/nd-image/nd-image";
import {NdImageProps} from "nodoku-core";
import {ParagraphThemeImpl} from "./components/paragraphs/paragraph-theme";
import {paragraphDefaultThemeImpl} from "./components/paragraphs/paragraph-theme";
import {highlightedCodeDefaultThemeImpl} from "./components/highlighted-code/highlighted-code-theme";
import {listCompDefaultThemeImpl} from "./components/list-comp/list-comp-theme";

export namespace NodokuComponents {

    export type ListCompTheme = ListCompThemeImpl;
    export type HighlightedCodeTheme = HighlightedCodeThemeImpl;
    export type TypographyTheme = TypographyThemeImpl;
    export type ParagraphTheme = ParagraphThemeImpl;

    export const listCompDefaultTheme : ListCompTheme = listCompDefaultThemeImpl;
    export const highlightedCodeDefaultTheme: HighlightedCodeTheme = highlightedCodeDefaultThemeImpl;
    export const paragraphDefaultTheme: ParagraphTheme = paragraphDefaultThemeImpl;

    export type HighlightedCodeProps = HighlightedCodePropsImpl;
    export type ParagraphsProps = ParagraphsPropsImpl;
    export type ListCompProps = ListCompPropsImpl;
    export type BackgroundsProps = BackgroundsPropsImpl;

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

    export async function imageProvider(props: NdImageProps): Promise<JSX.Element> {
        return imageProviderImpl(props)
    }

}