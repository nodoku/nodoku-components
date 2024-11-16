import { HighlightedCodeThemeImpl } from "../highlighted-code/highlighted-code-theme";
import { ThemeStyle } from "nodoku-core";
export declare class TypographyThemeImpl {
    containerStyle?: ThemeStyle;
    preContainer?: ThemeStyle;
    contentContainerStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeThemeImpl;
    static defaultTheme: TypographyThemeImpl;
}
