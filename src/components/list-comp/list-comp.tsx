import {mergeTheme, NdList} from "nodoku-core";
import {I18nextProvider} from "nodoku-core";
import {JSX} from "react";
import {ListCompThemeImpl} from "./list-comp-theme";

export class ListCompProps {
    list: NdList;
    lng: string;
    i18nextProvider: I18nextProvider;
    listTheme: ListCompThemeImpl;

    constructor(list: NdList, lng: string, i18nextProvider: I18nextProvider, listTheme: ListCompThemeImpl) {
        this.list = list;
        this.lng = lng;
        this.i18nextProvider = i18nextProvider;
        this.listTheme = listTheme;
    }

}

export async function ListCompImpl(props: ListCompProps): Promise<JSX.Element> {

    const {list, i18nextProvider, lng, listTheme} = props

    const effectiveTheme = mergeTheme(listTheme, ListCompThemeImpl.defaultTheme)

    const {t} = await i18nextProvider(lng);

    const listItems: JSX.Element[] = list.items.map(i =>
        <li className={`${effectiveTheme.listItemStyle?.base} ${effectiveTheme.listItemStyle?.decoration}`}
            dangerouslySetInnerHTML={{__html: t(i.key, i.ns)}}/>
    );

    if (list.ordered) {
        return <ol className={`${effectiveTheme.listStyle?.base} ${effectiveTheme.listStyle?.decoration}`}>{listItems}</ol>
    } else {
        return <ul className={`${effectiveTheme.listStyle?.base} ${effectiveTheme.listStyle?.decoration}`}>{listItems}</ul>
    }

}