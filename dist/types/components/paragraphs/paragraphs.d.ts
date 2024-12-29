import { JSX } from "react";
import { NdDefaultThemeName } from "nodoku-core";
import { NodokuComponents } from "../../index";
import ParagraphTheme = NodokuComponents.ParagraphTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import { NdI18nextTrustedHtmlProvider } from "nodoku-core";
import { NdParagraph } from "nodoku-core";
export type ParagraphsPropsImpl = {
    lng: string;
    blockParagraphs: NdParagraph[];
    paragraphTheme: ParagraphTheme;
    codeHighlightTheme: HighlightedCodeTheme;
    listTheme: ListCompTheme;
    defaultThemeName: NdDefaultThemeName;
    i18nextTrustedHtmlProvider: NdI18nextTrustedHtmlProvider;
};
export declare function ParagraphsImpl(props: ParagraphsPropsImpl): Promise<JSX.Element>;
