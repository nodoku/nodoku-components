import {ThemeStyle} from "nodoku-core";

export type HighlightedCodeThemeImpl = {
    hljsLightTheme? : string;
    hljsDarkTheme? : string;

    lightDisplay? : "light:block" | "light:inline-block" | "block" | "inline-block";
    darkDisplay? : "dark:block" | "dark:inline-block" | "block" | "inline-block";

    preContainer? : ThemeStyle;
    pre? : ThemeStyle;
    codeContainer? : ThemeStyle;
}

export const highlightedCodeDefaultThemeImpl: HighlightedCodeThemeImpl = {

    hljsLightTheme: "a11y-light",
    hljsDarkTheme: "a11y-dark",

    lightDisplay: "light:inline-block",
    darkDisplay: "dark:inline-block",

    codeContainer: {
        base: "text-center w-full",
        decoration: ""
    },

    preContainer: {
        base: "text-left w-full",
        decoration: "border-2 border-gray-200"
    },

    pre: {
        base: "w-full overflow-scroll",
        decoration: ""
    }

};