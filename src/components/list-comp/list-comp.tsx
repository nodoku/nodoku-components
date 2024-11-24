import {mergeTheme, NdList} from "nodoku-core";
import {I18nextProvider} from "nodoku-core";
import {JSX} from "react";
import {listCompDefaultThemeImpl} from "./list-comp-theme";
import {NodokuComponents} from "../../index";
import ListCompTheme = NodokuComponents.ListCompTheme;

export class ListCompProps {
    list: NdList;
    lng: string;
    i18nextProvider: I18nextProvider;
    listTheme: ListCompTheme;

    constructor(list: NdList, lng: string, i18nextProvider: I18nextProvider, listTheme: ListCompTheme) {
        this.list = list;
        this.lng = lng;
        this.i18nextProvider = i18nextProvider;
        this.listTheme = listTheme;
    }

}

export async function ListCompImpl(props: ListCompProps): Promise<JSX.Element> {

    const {list, i18nextProvider, lng, listTheme} = props

    const effectiveTheme = mergeTheme(listTheme, listCompDefaultThemeImpl)

    const {t} = await i18nextProvider(lng);

    const listItems: JSX.Element[] = list.items.map(i =>
        <li key={i.key} className={`listItemStyle ${effectiveTheme.listItemStyle?.base} ${effectiveTheme.listItemStyle?.decoration}`}
            dangerouslySetInnerHTML={{__html: t(i)}}/>
    );

    if (list.ordered) {
        return <ol className={`listStyle ${effectiveTheme.listStyle?.base} ${effectiveTheme.listStyle?.decoration}`}>{listItems}</ol>
    } else {
        return <ul className={`listStyle ${effectiveTheme.listStyle?.base} ${effectiveTheme.listStyle?.decoration}`}>{listItems}</ul>
    }

}