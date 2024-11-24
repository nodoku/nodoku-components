import { JSX } from "react";
import { I18nextProvider, NdCode, NdDefaultThemeName, NdList, NdTranslatableText } from "nodoku-core";
import { NodokuComponents } from "../../index";
import ParagraphTheme = NodokuComponents.ParagraphTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
export type ParagraphsProps = {
    lng: string;
    blockParagraphs: (NdTranslatableText | NdList | NdCode)[];
    paragraphTheme: ParagraphTheme;
    codeHighlightTheme: HighlightedCodeTheme;
    listTheme: ListCompTheme;
    defaultThemeName: NdDefaultThemeName;
    i18nextProvider: I18nextProvider;
};
export declare function ParagraphsImpl(props: ParagraphsProps): Promise<JSX.Element>;
