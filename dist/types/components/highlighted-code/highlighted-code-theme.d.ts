import { ThemeStyle } from "nodoku-core";
export type HighlightedCodeThemeImpl = {
    hljsLightTheme?: string;
    hljsDarkTheme?: string;
    lightDisplay?: "light:block" | "light:inline-block" | "block" | "inline-block";
    darkDisplay?: "dark:block" | "dark:inline-block" | "block" | "inline-block";
    preContainer?: ThemeStyle;
    pre?: ThemeStyle;
    codeContainer?: ThemeStyle;
};
export declare const highlightedCodeDefaultThemeImpl: HighlightedCodeThemeImpl;
