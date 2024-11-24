import {ThemeStyle} from "nodoku-core";

export type ListCompThemeImpl = {
    listStyle?: ThemeStyle;
    listItemStyle?: ThemeStyle;
}

export const listCompDefaultThemeImpl: ListCompThemeImpl = {
    listStyle: {
        base: "inline-block list-disc space-y-1 list-outside",
        decoration: ""
    },
    listItemStyle: {
        base: "ml-4",
        decoration: ""
    }
};


