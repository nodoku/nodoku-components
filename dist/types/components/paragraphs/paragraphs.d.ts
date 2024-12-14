import { JSX } from "react";
import { NdCode, NdDefaultThemeName, NdList, NdTranslatableText } from "nodoku-core";
import { NodokuComponents } from "../../index";
import ParagraphTheme = NodokuComponents.ParagraphTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import { NdI18nextTrustedHtmlProvider } from "nodoku-core";
export type ParagraphsPropsImpl = {
    lng: string;
    blockParagraphs: (NdTranslatableText | NdList | NdCode)[];
    paragraphTheme: ParagraphTheme;
    codeHighlightTheme: HighlightedCodeTheme;
    listTheme: ListCompTheme;
    defaultThemeName: NdDefaultThemeName;
    i18nextTrustedHtmlProvider: NdI18nextTrustedHtmlProvider;
};
export declare function ParagraphsImpl(props: ParagraphsPropsImpl): Promise<JSX.Element>;
