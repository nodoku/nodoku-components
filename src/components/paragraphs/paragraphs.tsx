import {JSX} from "react"
import {
    I18nextProvider,
    NdCode,
    NdDefaultThemeName,
    NdList,
    NdTranslatedText,
    ThemeStyle
} from "nodoku-core";
import {HighlightedCodeThemeImpl} from "../highlighted-code/highlighted-code-theme";
import {HighlightedCodeImpl} from "../highlighted-code/highlighted-code";
import {ListCompImpl} from "../list-comp/list-comp";
import {ListCompThemeImpl} from "../list-comp/list-comp-theme";


export class ParagraphsProps {
    lng: string;
    blockParagraphs: (NdTranslatedText | NdList | NdCode)[] = [];
    paragraphStyle: ThemeStyle | undefined;
    codeHighlightTheme: HighlightedCodeThemeImpl;
    listTheme: ListCompThemeImpl;
    defaultThemeName: NdDefaultThemeName;
    i18nextProvider: I18nextProvider;


    constructor(lng: string,
                blockParagraphs: (NdTranslatedText | NdList | NdCode)[],
                paragraphStyle: ThemeStyle | undefined,
                codeHighlightTheme: HighlightedCodeThemeImpl,
                listTheme: ListCompThemeImpl,
                defaultThemeName: NdDefaultThemeName,
                i18nextProvider: I18nextProvider) {

        this.lng = lng;
        this.blockParagraphs = blockParagraphs;
        this.paragraphStyle = paragraphStyle;
        this.codeHighlightTheme = codeHighlightTheme;
        this.listTheme = listTheme;
        this.defaultThemeName = defaultThemeName;
        this.i18nextProvider = i18nextProvider;
    }
}


export async function ParagraphsImpl(props: ParagraphsProps): Promise<JSX.Element> {

    const {
        lng,
        blockParagraphs,
        i18nextProvider,
        paragraphStyle,
        listTheme,
        codeHighlightTheme,
        defaultThemeName
    } = props;

    const {t} = await i18nextProvider(lng);

    return (
        <>
            {await Promise.all(blockParagraphs.map(async (p: NdTranslatedText | NdList | NdCode, ip: number): Promise<JSX.Element> => {
                if (p instanceof NdTranslatedText) {
                    return (
                        <p key={ip}
                           className={`${paragraphStyle?.base} ${paragraphStyle?.decoration}`}
                           dangerouslySetInnerHTML={{__html: t(p.key, p.ns)}} />
                    )
                } else if (p instanceof NdCode) {
                    return await HighlightedCodeImpl({code: p as NdCode, theme: codeHighlightTheme, defaultThemeName: defaultThemeName})
                } else {
                    return await ListCompImpl({list: p as NdList, lng: lng, i18nextProvider: i18nextProvider, listTheme: listTheme})
                }
            }))}
        </>
    )

}