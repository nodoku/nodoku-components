import {JSX} from "react"
import {
    NdI18nextProvider,
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
import {NdI18nextTrustedHtmlProvider} from "nodoku-core";
import {NdParagraph} from "nodoku-core";


export type ParagraphsPropsImpl = {
    lng: string;
    blockParagraphs: NdParagraph[];
    paragraphTheme: ParagraphTheme;
    codeHighlightTheme: HighlightedCodeTheme;
    listTheme: ListCompTheme;
    defaultThemeName: NdDefaultThemeName;
    i18nextTrustedHtmlProvider: NdI18nextTrustedHtmlProvider;
}


export async function ParagraphsImpl(props: ParagraphsPropsImpl): Promise<JSX.Element> {

    const {
        lng,
        blockParagraphs,
        i18nextTrustedHtmlProvider,
        paragraphTheme,
        listTheme,
        codeHighlightTheme,
        defaultThemeName
    } = props;

    const {t} = await i18nextTrustedHtmlProvider(lng);

    return (
        <div className={`${ts(paragraphTheme, "paragraphContainer")} paragraphContainer`}>
            {await Promise.all(blockParagraphs.map(async (p: NdParagraph, ip: number): Promise<JSX.Element> => {
                if (p instanceof NdTranslatableText) {
                    return (
                        <p key={`para-${ip}`}
                           className={`${ts(paragraphTheme, "paragraphStyle")} paragraphStyle`}
                           dangerouslySetInnerHTML={t(p)} />
                    )
                } else if (p instanceof NdCode) {
                    return await HighlightedCodeImpl({key: `code-${ip}`, code: p as NdCode, theme: codeHighlightTheme, defaultThemeName: defaultThemeName})
                } else {
                    return await ListCompImpl({key: `list-${ip}`, list: p as NdList, lng: lng, i18nextProvider: i18nextTrustedHtmlProvider, listTheme: listTheme})
                }
            }))}
        </div>
    )

}