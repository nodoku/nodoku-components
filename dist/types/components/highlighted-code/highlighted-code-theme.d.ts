import { ThemeStyle } from "nodoku-core";
export declare class HighlightedCodeThemeImpl {
    light?: string;
    dark?: string;
    lightDisplay?: "light:block" | "light:inline-block";
    darkDisplay?: "dark:block" | "dark:inline-block";
    codeContainer?: ThemeStyle;
    preContainer?: ThemeStyle;
    static defaultTheme: HighlightedCodeThemeImpl;
}
declare const _default: HighlightedCodeThemeImpl;
export default _default;
