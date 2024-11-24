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
import {ThemeStyle} from "nodoku-core";
import {ParagraphThemeImpl} from "./paragraph-theme";
import {ts} from "nodoku-core";


export type ParagraphsProps = {
    lng: string;
    blockParagraphs: (NdTranslatableText | NdList | NdCode)[];
    paragraphTheme: ParagraphTheme;
    codeHighlightTheme: HighlightedCodeTheme;
    listTheme: ListCompTheme;
    defaultThemeName: NdDefaultThemeName;
    i18nextProvider: I18nextProvider;


    // constructor(lng: string,
    //             blockParagraphs: (NdTranslatableText | NdList | NdCode)[],
    //             paragraphStyle: ParagraphTheme | undefined,
    //             codeHighlightTheme: HighlightedCodeTheme,
    //             listTheme: ListCompTheme,
    //             defaultThemeName: NdDefaultThemeName,
    //             i18nextProvider: I18nextProvider) {
    //
    //     this.lng = lng;
    //     this.blockParagraphs = blockParagraphs;
    //     this.paragraphTheme = paragraphStyle;
    //     this.codeHighlightTheme = codeHighlightTheme;
    //     this.listTheme = listTheme;
    //     this.defaultThemeName = defaultThemeName;
    //     this.i18nextProvider = i18nextProvider;
    // }
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
        <div className={`${ts(paragraphTheme, "paragraphContainer")} paragraphContainer ${paragraphTheme.paragraphContainer?.base} ${paragraphTheme?.paragraphContainer?.decoration}`}>
            {await Promise.all(blockParagraphs.map(async (p: NdTranslatableText | NdList | NdCode, ip: number): Promise<JSX.Element> => {
                if (p instanceof NdTranslatableText) {
                    return (
                        <p key={ip}
                           className={`${ts(paragraphTheme, "paragraphStyle")} paragraphStyle ${paragraphTheme.paragraphStyle?.base} ${paragraphTheme?.paragraphStyle?.decoration}`}
                           dangerouslySetInnerHTML={{__html: t(p)}} />
                    )
                } else if (p instanceof NdCode) {
                    return await HighlightedCodeImpl({code: p as NdCode, theme: codeHighlightTheme, defaultThemeName: defaultThemeName})
                } else {
                    return await ListCompImpl({list: p as NdList, lng: lng, i18nextProvider: i18nextProvider, listTheme: listTheme})
                }
            }))}
        </div>
    )

}