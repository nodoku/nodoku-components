import {mergeTheme, NdList, NdTranslatableText} from "nodoku-core";
import {NdI18nextProvider} from "nodoku-core";
import {JSX} from "react";
import {listCompDefaultThemeImpl} from "./list-comp-theme";
import {NodokuComponents} from "../../index";
import ListCompTheme = NodokuComponents.ListCompTheme;
import {ts} from "nodoku-core";
import {NdI18nextTrustedHtmlProvider} from "nodoku-core";

export type ListCompPropsImpl = {
    key: string;
    list: NdList;
    lng: string;
    i18nextProvider: NdI18nextTrustedHtmlProvider;
    listTheme: ListCompTheme;

}

export async function ListCompImpl(props: ListCompPropsImpl): Promise<JSX.Element> {

    const {key, list, i18nextProvider, lng, listTheme} = props

    const effectiveTheme = mergeTheme(listTheme, listCompDefaultThemeImpl)

    const {t} = await i18nextProvider(lng);

    const listItems: JSX.Element[] = list.items.map((item: NdTranslatableText) =>
        <li key={item.key} className={`listItemStyle ${ts(effectiveTheme, "listItemStyle")}`}
            dangerouslySetInnerHTML={t(item)}/>
    );

    if (list.ordered) {
        return <ol key={key} className={`listStyle ${effectiveTheme.listStyle?.base} ${effectiveTheme.listStyle?.decoration}`}>{listItems}</ol>
    } else {
        return <ul key={key} className={`listStyle ${effectiveTheme.listStyle?.base} ${effectiveTheme.listStyle?.decoration}`}>{listItems}</ul>
    }

}