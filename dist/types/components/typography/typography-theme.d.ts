import { ThemeStyle } from "nodoku-core";
import { NodokuComponents } from "../../index";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
export type TypographyThemeImpl = {
    containerStyle?: ThemeStyle;
    preContainer?: ThemeStyle;
    contentContainerStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    imageContainer?: ThemeStyle;
    imageStyle?: ThemeStyle;
};
export declare const typographyDefaultTheme: TypographyThemeImpl;
