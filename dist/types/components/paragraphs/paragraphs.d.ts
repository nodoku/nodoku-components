import { JSX } from "react";
import { I18nextProvider, NdCode, NdDefaultThemeName, NdList, NdTranslatedText, ThemeStyle } from "nodoku-core";
import { HighlightedCodeThemeImpl } from "../highlighted-code/highlighted-code-theme";
import { ListCompThemeImpl } from "../list-comp/list-comp-theme";
export declare class ParagraphsProps {
    lng: string;
    blockParagraphs: (NdTranslatedText | NdList | NdCode)[];
    paragraphStyle: ThemeStyle | undefined;
    codeHighlightTheme: HighlightedCodeThemeImpl;
    listTheme: ListCompThemeImpl;
    defaultThemeName: NdDefaultThemeName;
    i18nextProvider: I18nextProvider;
    constructor(lng: string, blockParagraphs: (NdTranslatedText | NdList | NdCode)[], paragraphStyle: ThemeStyle | undefined, codeHighlightTheme: HighlightedCodeThemeImpl, listTheme: ListCompThemeImpl, defaultThemeName: NdDefaultThemeName, i18nextProvider: I18nextProvider);
}
export declare function ParagraphsImpl(props: ParagraphsProps): Promise<JSX.Element>;
