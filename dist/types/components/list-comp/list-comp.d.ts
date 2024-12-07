import { NdList } from "nodoku-core";
import { I18nextProvider } from "nodoku-core";
import { JSX } from "react";
import { NodokuComponents } from "../../index";
import ListCompTheme = NodokuComponents.ListCompTheme;
export type ListCompProps = {
    key: string;
    list: NdList;
    lng: string;
    i18nextProvider: I18nextProvider;
    listTheme: ListCompTheme;
};
export declare function ListCompImpl(props: ListCompProps): Promise<JSX.Element>;
