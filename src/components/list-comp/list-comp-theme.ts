import {ThemeStyle} from "nodoku-core";

export class ListCompThemeImpl {
    listStyle?: ThemeStyle;
    listItemStyle?: ThemeStyle;

    static defaultTheme: ListCompThemeImpl = {
        listStyle: {
            base: "inline-block list-disc space-y-1 list-outside",
            decoration: ""
        },
        listItemStyle: {
            base: "ml-4",
            decoration: ""
        }
    }
}

export default ListCompThemeImpl.defaultTheme;

