import {HighlightedCodeThemeImpl} from "../highlighted-code/highlighted-code-theme";
import {ThemeStyle} from "nodoku-core";

export class TypographyThemeImpl {

    containerStyle?: ThemeStyle;
    contentContainerStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeThemeImpl;

    static defaultTheme: TypographyThemeImpl = {

    }

}