import {ThemeStyle} from "nodoku-core";

export type ParagraphThemeImpl = {
    paragraphContainer?: ThemeStyle;
    paragraphStyle?: ThemeStyle;
}


export const paragraphDefaultThemeImpl: ParagraphThemeImpl = {

    paragraphContainer: {
        base: "",
        decoration: ""
    },

    paragraphStyle: {
        base: "",
        decoration: ""
    }


}

