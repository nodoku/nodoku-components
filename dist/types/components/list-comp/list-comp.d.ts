import { NdList } from "nodoku-core";
import { I18nextProvider } from "nodoku-core";
import { JSX } from "react";
import { ListCompThemeImpl } from "./list-comp-theme";
export declare class ListCompProps {
    list: NdList;
    lng: string;
    i18nextProvider: I18nextProvider;
    listTheme: ListCompThemeImpl;
    constructor(list: NdList, lng: string, i18nextProvider: I18nextProvider, listTheme: ListCompThemeImpl);
}
export declare function ListCompImpl(props: ListCompProps): Promise<JSX.Element>;
