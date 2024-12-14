import { NdList } from "nodoku-core";
import { JSX } from "react";
import { NodokuComponents } from "../../index";
import ListCompTheme = NodokuComponents.ListCompTheme;
import { NdI18nextTrustedHtmlProvider } from "nodoku-core";
export type ListCompPropsImpl = {
    key: string;
    list: NdList;
    lng: string;
    i18nextProvider: NdI18nextTrustedHtmlProvider;
    listTheme: ListCompTheme;
};
export declare function ListCompImpl(props: ListCompPropsImpl): Promise<JSX.Element>;
