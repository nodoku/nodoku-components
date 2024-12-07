import { JSX } from "react";
import { HighlightedCodeProps } from "./components/highlighted-code/highlighted-code";
import { HighlightedCodeThemeImpl } from "./components/highlighted-code/highlighted-code-theme";
import { ListCompProps } from "./components/list-comp/list-comp";
import { ListCompThemeImpl } from "./components/list-comp/list-comp-theme";
import { ParagraphsProps } from "./components/paragraphs/paragraphs";
import { BackgroundsProps } from "./components/backgrounds/backgrounds";
import { NdSkinComponentProps } from "nodoku-core";
import { TypographyThemeImpl } from "./components/typography/typography-theme";
import { NdImageProps } from "nodoku-core";
import { ParagraphThemeImpl } from "./components/paragraphs/paragraph-theme";
export declare namespace NodokuComponents {
    type ListCompTheme = ListCompThemeImpl;
    type HighlightedCodeTheme = HighlightedCodeThemeImpl;
    type TypographyTheme = TypographyThemeImpl;
    type ParagraphTheme = ParagraphThemeImpl;
    const listCompDefaultTheme: ListCompTheme;
    const highlightedCodeDefaultTheme: HighlightedCodeTheme;
    const paragraphDefaultTheme: ParagraphTheme;
    function HighlightedCode(props: HighlightedCodeProps): Promise<JSX.Element>;
    function ListComp(props: ListCompProps): Promise<JSX.Element>;
    function Paragraphs(props: ParagraphsProps): Promise<JSX.Element>;
    function Backgrounds(props: BackgroundsProps): Promise<JSX.Element>;
    function Typography(props: NdSkinComponentProps<TypographyTheme, void>): Promise<JSX.Element>;
    function NdImageProvider(props: NdImageProps): Promise<JSX.Element>;
}
