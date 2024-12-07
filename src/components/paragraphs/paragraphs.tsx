import {JSX} from "react"
import {
    I18nextProvider,
    NdCode,
    NdDefaultThemeName,
    NdList,
    NdTranslatableText
} from "nodoku-core";
import {HighlightedCodeImpl} from "../highlighted-code/highlighted-code";
import {ListCompImpl} from "../list-comp/list-comp";
import {NodokuComponents} from "../../index";
import ParagraphTheme = NodokuComponents.ParagraphTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import {ts} from "nodoku-core";


export type ParagraphsProps = {
    lng: string;
    blockParagraphs: (NdTranslatableText | NdList | NdCode)[];
    paragraphTheme: ParagraphTheme;
    codeHighlightTheme: HighlightedCodeTheme;
    listTheme: ListCompTheme;
    defaultThemeName: NdDefaultThemeName;
    i18nextProvider: I18nextProvider;
}


export async function ParagraphsImpl(props: ParagraphsProps): Promise<JSX.Element> {

    const {
        lng,
        blockParagraphs,
        i18nextProvider,
        paragraphTheme,
        listTheme,
        codeHighlightTheme,
        defaultThemeName
    } = props;

    const {t} = await i18nextProvider(lng);

    return (
        <div className={`${ts(paragraphTheme, "paragraphContainer")} paragraphContainer`}>
            {await Promise.all(blockParagraphs.map(async (p: NdTranslatableText | NdList | NdCode, ip: number): Promise<JSX.Element> => {
                if (p instanceof NdTranslatableText) {
                    return (
                        <p key={`para-${ip}`}
                           className={`${ts(paragraphTheme, "paragraphStyle")} paragraphStyle`}
                           dangerouslySetInnerHTML={{__html: t(p)}} />
                    )
                } else if (p instanceof NdCode) {
                    return await HighlightedCodeImpl({key: `code-${ip}`, code: p as NdCode, theme: codeHighlightTheme, defaultThemeName: defaultThemeName})
                } else {
                    return await ListCompImpl({key: `list-${ip}`, list: p as NdList, lng: lng, i18nextProvider: i18nextProvider, listTheme: listTheme})
                }
            }))}
        </div>
    )

}