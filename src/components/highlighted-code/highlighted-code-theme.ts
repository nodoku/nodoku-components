import {ThemeStyle} from "nodoku-core";

export class HighlightedCodeThemeImpl {
    hljsLightTheme?: string;
    hljsDarkTheme?: string;

    lightDisplay?: "light:block" | "light:inline-block";
    darkDisplay?: "dark:block" | "dark:inline-block";

    codeContainer?: ThemeStyle;
    preContainer?: ThemeStyle;

    static defaultTheme: HighlightedCodeThemeImpl = {

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
        }

    }


}

export default HighlightedCodeThemeImpl.defaultTheme;
